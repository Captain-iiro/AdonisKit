import { Form } from '@adonisjs/inertia/react'
import AuthLayout from '@/layouts/auth_layout'
import InputError from '@/components/input_error'
import TextLink from '@/components/text_link'
import { PasswordInput } from '@/components/password_input'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Spinner from '@/components/spinner'

export default function Signup() {
  return (
    <AuthLayout
      title="Create an account"
      description="Enter your details below to create your account"
    >
      <Form route="new_account.store" className="flex flex-col gap-6">
        {({ errors, processing }) => (
          <>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoFocus
                  autoComplete="name"
                  placeholder="Full name"
                  aria-invalid={errors.fullName ? 'true' : undefined}
                />
                <InputError message={errors.fullName} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="email@example.com"
                  aria-invalid={errors.email ? 'true' : undefined}
                />
                <InputError message={errors.email} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <PasswordInput
                  id="password"
                  name="password"
                  required
                  autoComplete="new-password"
                  placeholder="Password"
                  aria-invalid={errors.password ? 'true' : undefined}
                />
                <InputError message={errors.password} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="passwordConfirmation">Confirm password</Label>
                <PasswordInput
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  required
                  autoComplete="new-password"
                  placeholder="Confirm password"
                  aria-invalid={errors.passwordConfirmation ? 'true' : undefined}
                />
                <InputError message={errors.passwordConfirmation} />
              </div>

              <Button className="mt-2 w-full" type="submit" disabled={processing}>
                {processing && <Spinner />}
                Create account
              </Button>
            </div>

            <div className="text-muted-foreground text-center text-sm">
              Already have an account? <TextLink href="/login">Log in</TextLink>
            </div>
          </>
        )}
      </Form>
    </AuthLayout>
  )
}
