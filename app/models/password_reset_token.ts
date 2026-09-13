import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PasswordResetToken extends BaseModel {
  static $table = 'password_reset_tokens'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column()
  declare tokenHash: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime
}
