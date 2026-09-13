import { DateTime } from 'luxon'
import User from '#models/user'
import { loginValidator } from '#validators/user'
import { isEmailVerificationRequired } from '#utils/email_verification'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/login', {})
  }

  async store({ request, auth, response, session }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)

    if (user.deletedAt) {
      session.flash('error', 'This account was deleted and can no longer sign in.')
      return response.redirect().back()
    }

    await auth.use('web').login(user)

    if (!user.hasVerifiedEmail) {
      if (!isEmailVerificationRequired()) {
        user.emailVerifiedAt = DateTime.now()
        await user.save()
        return response.redirect().toRoute('dashboard.index')
      }

      return response.redirect().toRoute('verify_email.show')
    }

    response.redirect().toRoute('dashboard.index')
  }

  async destroy({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    response.redirect().toRoute('session.create')
  }
}
