import { changePasswordValidator, updateProfileValidator } from '#validators/user'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class SettingsController {
  async profile({ inertia }: HttpContext) {
    return inertia.render('settings/profile', {})
  }

  async password({ inertia }: HttpContext) {
    return inertia.render('settings/password', {})
  }

  async appearance({ inertia }: HttpContext) {
    return inertia.render('settings/appearance', {})
  }

  async updateProfile({ request, auth, response, session }: HttpContext) {
    const user = auth.use('web').user!
    const { fullName, email } = await request.validateUsing(updateProfileValidator, {
      meta: { userId: user.id },
    })

    user.fullName = fullName
    user.email = email
    await user.save()

    session.flash('success', 'Profile updated successfully.')
    return response.redirect().back()
  }

  async updatePassword({ request, auth, response, session }: HttpContext) {
    const user = auth.use('web').user!
    const { currentPassword, newPassword } = await request.validateUsing(changePasswordValidator)

    const passwordMatches = await hash.verify(user.password, currentPassword)
    if (!passwordMatches) {
      session.flash('error', 'The current password is incorrect.')
      return response.redirect().back()
    }

    user.password = newPassword
    await user.save()

    session.flash('success', 'Password updated successfully.')
    return response.redirect().back()
  }

  async destroy({ auth, response, session }: HttpContext) {
    const user = auth.use('web').user!

    user.deletedAt = DateTime.now()
    await user.save()

    await auth.use('web').logout()
    session.flash('success', 'Your account has been deleted.')
    return response.redirect().toRoute('home')
  }
}
