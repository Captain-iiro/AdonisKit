import env from '#start/env'
import { defineConfig, transports } from '@adonisjs/mail'
import { MailResponse } from '@adonisjs/mail'
import type { MailTransportContract, NodeMailerMessage } from '@adonisjs/mail/types'
import logger from '@adonisjs/core/services/logger'

/**
 * Dev transport that logs emails to the console instead of sending them.
 * This is the default mailer so that no real email is sent until the
 * developer explicitly enables SMTP via the MAIL_MAILER environment
 * variable ("smtp").
 */
function devTransport(): MailTransportContract {
  return {
    async send(message: NodeMailerMessage) {
      const from = message.from
        ? typeof message.from === 'string'
          ? message.from
          : (message.from as { address?: string }).address
        : 'no-reply@localhost'

      const to = (message.to ?? []).map((r) =>
        typeof r === 'string' ? r : (r as { address: string }).address
      )

      logger.info(
        { from, to, subject: message.subject, html: message.html },
        'Dev email sent (no SMTP configured)'
      )

      return new MailResponse(`<dev-${Date.now()}@localhost>`, { from, to } as any, message)
    },
  }
}

const mailConfig = defineConfig({
  default: env.get('MAIL_MAILER'),

  from: {
    address: env.get('MAIL_FROM_ADDRESS') ?? 'no-reply@localhost',
    name: env.get('MAIL_FROM_NAME') ?? 'No Reply',
  },

  mailers: {
    dev: devTransport,

    smtp: transports.smtp({
      host: env.get('SMTP_HOST') ?? 'localhost',
      port: env.get('SMTP_PORT') ?? 587,
      /**
       * Uncomment the auth block if your SMTP
       * server needs authentication.
       * Set SMTP_USERNAME and SMTP_PASSWORD in your .env.
       */
      /* auth: {
        type: 'login',
        user: env.get('SMTP_USERNAME')!,
        pass: env.get('SMTP_PASSWORD')!,
      }, */
    }),
  },
})

export default mailConfig

declare module '@adonisjs/mail/types' {
  export interface MailersList extends InferMailers<typeof mailConfig> {}
}
