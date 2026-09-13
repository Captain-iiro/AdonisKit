import { Form } from '@adonisjs/inertia/react'
import AuthLayout from '@/layouts/auth_layout'
import InputError from '@/components/input_error'
import TextLink from '@/components/text_link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Spinner from '@/components/spinner'

export default function ForgotPassword({ status }: { status?: string }) {
  return (
    <AuthLayout
      title="Forgot password"
      description="Enter your email to receive a password reset link"
    >
      {status && <div className="text-green-600 text-center text-sm font-medium">{status}</div>}

      <div className="space-y-6">
        <Form route="password.forgot.store">
          {({ errors, processing }) => (
            <>
              <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  autoFocus
                  placeholder="email@example.com"
                  aria-invalid={errors.email ? 'true' : undefined}
                />
                <InputError message={errors.email} />
              </div>

              <div className="my-6 flex items-center justify-start">
                <Button className="w-full" disabled={processing}>
                  {processing && <Spinner />}
                  Email password reset link
                </Button>
              </div>
            </>
          )}
        </Form>

        <div className="text-muted-foreground space-x-1 text-center text-sm">
          <span>Or, return to</span>
          <TextLink href="/login">log in</TextLink>
        </div>
      </div>
    </AuthLayout>
  )
}
