import { BaseSeeder } from '@adonisjs/lucid/seeders'
import hash from '@adonisjs/core/services/hash'
import { DateTime } from 'luxon'
import User from '#models/user'

/**
 * Creates a demo account so the starter kit can be explored right after
 * `node ace db:seed`. The seeder is idempotent: it does nothing when the
 * demo email is already registered.
 */
export default class DemoUserSeeder extends BaseSeeder {
  static environment = ['development', 'test']

  async run() {
    const email = 'demo@adoniskit.dev'

    const existing = await User.findBy('email', email)
    if (existing) {
      return
    }

    await User.create({
      fullName: 'Adonis Demo',
      email,
      password: await hash.make('password'),
      emailVerifiedAt: DateTime.now(),
    })
  }
}
