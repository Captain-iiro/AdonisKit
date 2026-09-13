import { DateTime } from 'luxon'
import { randomBytes } from 'node:crypto'
import hash from '@adonisjs/core/services/hash'
import mail from '@adonisjs/mail/services/main'
import User from '#models/user'
import EmailVerificationToken from '#models/email_verification_token'
import { signupValidator } from '#validators/user'
import EmailVerificationMail from '#mails/email_verification'
import { isEmailVerificationRequired } from '#utils/email_verification'
import type { HttpContext } from '@adonisjs/core/http'

export default class NewAccountController {
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/signup', {})
  }

  async store({ request, response, auth, session }: HttpContext) {
    const { passwordConfirmation, ...payload } = await request.validateUsing(signupValidator)
    const user = await User.create({ ...payload })

    if (!isEmailVerificationRequired()) {
      user.emailVerifiedAt = DateTime.now()
      await user.save()
    }

    await auth.use('web').login(user)

    if (isEmailVerificationRequired()) {
      const rawToken = randomBytes(32).toString('hex')
      const tokenHash = await hash.make(rawToken)
      await EmailVerificationToken.create({ userId: user.id, tokenHash })

      const verifyBase = new URL('/verify-email', request.completeUrl()).href
      await mail.send(new EmailVerificationMail(user.email, `${verifyBase}?token=${rawToken}`))

      session.flash('success', 'We sent you a link to verify your email address.')
      return response.redirect().toRoute('verify_email.show')
    }

    session.flash('success', 'Your account has been created.')
    return response.redirect().toRoute('dashboard.index')
  }
}
