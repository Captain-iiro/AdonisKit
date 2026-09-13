import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class EmailVerificationToken extends BaseModel {
  static $table = 'email_verification_tokens'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare tokenHash: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime
}
