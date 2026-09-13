import { test } from '@japa/runner'

test.group('Auth pages', () => {
  test('get the login page', async ({ client, assert }) => {
    const response = await client.get('/login')

    response.assertStatus(200)
    assert.exists(response.text())
  })

  test('dashboard redirects guests to the login page', async ({ client, assert }) => {
    const response = await client.get('/dashboard').redirects(0)

    response.assertStatus(302)
    assert.equal(response.headers().location, '/login')
  })

  test('signup page is available', async ({ client, assert }) => {
    const response = await client.get('/signup')

    response.assertStatus(200)
    assert.exists(response.text())
  })
})
