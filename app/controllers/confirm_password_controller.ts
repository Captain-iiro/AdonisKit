import hash from '@adonisjs/core/services/hash'
import { confirmPasswordValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class ConfirmPasswordController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/confirm_password', {})
  }

  async store({ request, auth, session, response }: HttpContext) {
    const user = auth.use('web').user!
    const { password } = await request.validateUsing(confirmPasswordValidator)

    const passwordMatches = await hash.verify(user.password, password)
    if (!passwordMatches) {
      session.flash('error', 'The password is incorrect.')
      return response.redirect().back()
    }

    session.put('password_confirmed_at', Date.now())
    session.flash('success', 'Password confirmed.')
    return response.redirect().back()
  }
}
