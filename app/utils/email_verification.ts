import env from '#start/env'

/**
 * Whether email addresses must be verified before accessing the
 * authenticated parts of the application.
 *
 * When the mailer is in dev mode ("dev"), no real email is sent, so
 * verification would lock users out. Verification is only enforced when
 * real emails are possible ("smtp").
 */
export function isEmailVerificationRequired() {
  return env.get('MAIL_MAILER') === 'smtp'
}
