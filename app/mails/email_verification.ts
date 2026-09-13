import { BaseMail } from '@adonisjs/mail'

export default class EmailVerificationMail extends BaseMail {
  constructor(
    private email: string,
    private verifyUrl: string
  ) {
    super()
  }

  prepare() {
    this.message.to(this.email)
    this.message.subject('Verify your email address')
    this.message.html(
      `<p>Hello,</p>
      <p>Please verify your email address by clicking the link below.</p>
      <p><a href="${this.verifyUrl}">Verify email</a></p>
      <p>If you did not create an account, no further action is required.</p>`
    )
  }
}
