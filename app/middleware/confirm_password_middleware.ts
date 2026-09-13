import { type HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

const CONFIRMATION_TTL_MINUTES = 60

/**
 * Requires the user to have recently confirmed their password
 * (within the last 60 minutes) before accessing the protected route.
 */
export default class ConfirmPasswordMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const confirmedAt = ctx.session.get('password_confirmed_at') as number | undefined

    if (!confirmedAt || Date.now() - confirmedAt > CONFIRMATION_TTL_MINUTES * 60_000) {
      return ctx.response.redirect().toRoute('confirm_password.show')
    }

    return next()
  }
}
