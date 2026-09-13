import { Form } from '@adonisjs/inertia/react'
import AuthLayout from '@/layouts/auth_layout'
import InputError from '@/components/input_error'
import TextLink from '@/components/text_link'
import { PasswordInput } from '@/components/password_input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Spinner from '@/components/spinner'

export default function Login() {
  return (
    <AuthLayout title="Log in" description="Enter your email and password below to log in">
      <Form route="session.store" className="flex flex-col gap-6">
        {({ errors, processing }) => (
          <>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoFocus
                  autoComplete="email"
                  placeholder="email@example.com"
                  aria-invalid={errors.email ? 'true' : undefined}
                />
                <InputError message={errors.email} />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <TextLink href="/forgot-password" className="ml-auto text-sm">
                    Forgot your password?
                  </TextLink>
                </div>
                <PasswordInput
                  id="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="Password"
                  aria-invalid={errors.password ? 'true' : undefined}
                />
                <InputError message={errors.password} />
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="remember" name="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>

              <Button className="mt-4 w-full" type="submit" disabled={processing}>
                {processing && <Spinner />}
                Log in
              </Button>
            </div>

            <div className="text-muted-foreground text-center text-sm">
              Don&apos;t have an account? <TextLink href="/signup">Sign up</TextLink>
            </div>
          </>
        )}
      </Form>
    </AuthLayout>
  )
}
