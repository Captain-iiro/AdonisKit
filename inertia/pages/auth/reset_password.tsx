import { Form } from '@adonisjs/inertia/react'
import AuthLayout from '@/layouts/auth_layout'
import InputError from '@/components/input_error'
import { PasswordInput } from '@/components/password_input'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Spinner from '@/components/spinner'

type Props = {
  token?: string
  email?: string
}

export default function ResetPassword({ token, email }: Props) {
  return (
    <AuthLayout title="Reset password" description="Please enter your new password below">
      <Form route="password.reset.store" className="grid gap-6">
        {({ errors, processing }) => (
          <>
            <input type="hidden" name="token" value={token ?? ''} />

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email ?? ''}
                readOnly
                className="mt-1 block w-full"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                name="password"
                autoComplete="new-password"
                autoFocus
                placeholder="Password"
                className="mt-1 block w-full"
                aria-invalid={errors.password ? 'true' : undefined}
              />
              <InputError message={errors.password} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="passwordConfirmation">Confirm password</Label>
              <PasswordInput
                id="passwordConfirmation"
                name="passwordConfirmation"
                autoComplete="new-password"
                placeholder="Confirm password"
                className="mt-1 block w-full"
                aria-invalid={errors.passwordConfirmation ? 'true' : undefined}
              />
              <InputError message={errors.passwordConfirmation} />
            </div>

            <Button className="mt-4 w-full" type="submit" disabled={processing}>
              {processing && <Spinner />}
              Reset password
            </Button>
          </>
        )}
      </Form>
    </AuthLayout>
  )
}
