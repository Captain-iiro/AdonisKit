import { type HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { isEmailVerificationRequired } from '#utils/email_verification'

/**
 * Redirects users without a verified email address to
 * the "verify email" page.
 *
 * When email verification is not enforced (e.g. the dev mailer is
 * active and no real email is sent), this middleware does nothing.
 */
export default class VerifiedMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (!isEmailVerificationRequired()) {
      return next()
    }

    const user = ctx.auth.use('web').user

    if (!user) {
      return ctx.response.redirect().toRoute('session.create')
    }

    if (user.hasVerifiedEmail) {
      return next()
    }

    return ctx.response.redirect().toRoute('verify_email.show')
  }
}
