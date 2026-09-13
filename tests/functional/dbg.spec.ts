import { test } from '@japa/runner'

test.group('debug', () => {
  test('dump dashboard guest response', async ({ client }) => {
    const response = await client.get('/dashboard')
    console.log('STATUS', response.status())
    console.log('TYPE', response.type())
    console.log('HEADERS', response.headers())
    console.log('BODY', response.body()?.slice?.(0, 500) ?? response.body())
  })
})
