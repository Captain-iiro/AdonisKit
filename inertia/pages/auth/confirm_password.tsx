import { Form } from '@adonisjs/inertia/react'
import AuthLayout from '@/layouts/auth_layout'
import InputError from '@/components/input_error'
import { PasswordInput } from '@/components/password_input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Spinner from '@/components/spinner'

export default function ConfirmPassword() {
  return (
    <AuthLayout
      title="Confirm password"
      description="This is a secure area of the application. Please confirm your password to continue."
    >
      <Form route="confirm_password.store" className="grid gap-6">
        {({ errors, processing }) => (
          <>
            <input
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
              name="username"
              autoComplete="username"
            />

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                name="password"
                autoComplete="current-password"
                placeholder="Password"
                aria-invalid={errors.password ? 'true' : undefined}
              />
              <InputError message={errors.password} />
            </div>

            <Button className="mt-2 w-full" type="submit" disabled={processing}>
              {processing && <Spinner />}
              Confirm password
            </Button>
          </>
        )}
      </Form>
    </AuthLayout>
  )
}
