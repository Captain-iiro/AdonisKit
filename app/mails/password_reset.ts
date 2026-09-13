import { BaseMail } from '@adonisjs/mail'

export default class PasswordResetMail extends BaseMail {
  constructor(
    private email: string,
    private resetUrl: string
  ) {
    super()
  }

  prepare() {
    this.message.to(this.email)
    this.message.subject('Reset your password')
    this.message.html(
      `<p>Hello,</p>
      <p>You are receiving this email because we received a password reset request for your account.</p>
      <p><a href="${this.resetUrl}">Reset password</a></p>
      <p>This password reset link will expire in 60 minutes. If you did not request a password reset, no further action is required.</p>`
    )
  }
}
