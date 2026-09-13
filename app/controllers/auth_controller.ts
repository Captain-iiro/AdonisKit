import { randomBytes } from 'node:crypto'
import hash from '@adonisjs/core/services/hash'
import mail from '@adonisjs/mail/services/main'
import { DateTime } from 'luxon'
import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import PasswordResetToken from '#models/password_reset_token'
import EmailVerificationToken from '#models/email_verification_token'
import { forgotPasswordValidator, resetPasswordValidator } from '#validators/user'
import EmailVerificationMail from '#mails/email_verification'
import PasswordResetMail from '#mails/password_reset'

const TOKEN_EXPIRY_MINUTES = 60

function tokenExpiry() {
  return DateTime.utc().minus({ minutes: TOKEN_EXPIRY_MINUTES }).toSQL()!
}

function generateToken() {
  return randomBytes(32).toString('hex')
}

export default class AuthController {
  async forgotPassword({ inertia }: HttpContext) {
    return inertia.render('auth/forgot_password', {})
  }

  async sendPasswordResetLink({ request, session, response }: HttpContext) {
    const { email } = await request.validateUsing(forgotPasswordValidator)
    const user = await User.findBy('email', email)

    // Always respond the same way to prevent email enumeration.
    if (user) {
      const rawToken = generateToken()
      const tokenHash = await hash.make(rawToken)
      await PasswordResetToken.create({ email, tokenHash })

      const resetBase = new URL('/reset-password', request.completeUrl()).href
      await mail.send(new PasswordResetMail(user.email, `${resetBase}?token=${rawToken}`))
    }

    session.flash(
      'success',
      'If an account exists for that email, a password reset link has been sent.'
    )
    return response.redirect().back()
  }

  async resetPassword({ request, inertia }: HttpContext) {
    return inertia.render('auth/reset_password', {
      token: request.input('token'),
    })
  }

  async updatePassword({ request, session, response }: HttpContext) {
    const { token, password } = await request.validateUsing(resetPasswordValidator)

    const resetToken = await PasswordResetToken.query()
      .where('createdAt', '>', tokenExpiry())
      .first()

    if (!resetToken || !(await hash.verify(resetToken.tokenHash, token))) {
      session.flash('error', 'This password reset link is invalid or has expired.')
      return response.redirect().back()
    }

    const user = await User.findBy('email', resetToken.email)
    if (user) {
      user.password = password
      await user.save()
      await resetToken.delete()
      session.flash(
        'success',
        'Your password has been reset. You can sign in with your new password.'
      )
      return response.redirect().toRoute('session.create')
    }

    session.flash('error', 'This password reset link is invalid or has expired.')
    return response.redirect().back()
  }

  async verifyEmail({ inertia, response, auth }: HttpContext) {
    const user = auth.use('web').user!
    if (user.hasVerifiedEmail) {
      return response.redirect().toRoute('dashboard.index')
    }

    return inertia.render('auth/verify_email', {})
  }

  async resendVerificationEmail({ auth, request, session, response }: HttpContext) {
    const user = auth.use('web').user!
    if (!user.hasVerifiedEmail) {
      const rawToken = generateToken()
      const tokenHash = await hash.make(rawToken)
      await EmailVerificationToken.create({ userId: user.id, tokenHash })

      const verifyBase = new URL('/verify-email', request.completeUrl()).href
      await mail.send(new EmailVerificationMail(user.email, `${verifyBase}?token=${rawToken}`))
    }

    session.flash('success', 'A new verification link has been sent to your email address.')
    return response.redirect().back()
  }

  async confirmEmail({ request, session, response, auth }: HttpContext) {
    const token = request.input('token')

    if (!token) {
      session.flash('error', 'This verification link is invalid or has expired.')
      return response.redirect().back()
    }

    const verificationToken = await EmailVerificationToken.query()
      .where('createdAt', '>', tokenExpiry())
      .first()

    if (!verificationToken || !(await hash.verify(verificationToken.tokenHash, token))) {
      session.flash('error', 'This verification link is invalid or has expired.')
      return response.redirect().back()
    }

    const user = await User.find(verificationToken.userId)
    if (!user) {
      session.flash('error', 'This verification link is invalid or has expired.')
      return response.redirect().back()
    }

    user.emailVerifiedAt = DateTime.now()
    await user.save()
    await verificationToken.delete()

    await auth.use('web').login(user)

    session.flash('success', 'Your email has been verified.')
    return response.redirect().toRoute('dashboard.index')
  }
}
