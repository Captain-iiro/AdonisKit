import { test } from '@japa/runner'
import User from '#models/user'

test.group('User model', () => {
  test('initials uses the first letters of the full name', ({ assert }) => {
    const user = new User()
    user.fullName = 'Adonis Demo'

    assert.equal(user.initials, 'AD')
  })

  test('initials fall back to the email prefix', ({ assert }) => {
    const user = new User()
    user.fullName = null
    user.email = 'demo@example.com'

    assert.equal(user.initials, 'DE')
  })

  test('hasVerifiedEmail is false until the email is confirmed', ({ assert }) => {
    const user = new User()
    assert.isFalse(user.hasVerifiedEmail)
  })
})
