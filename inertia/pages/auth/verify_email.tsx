import { Form } from '@adonisjs/inertia/react'
import AuthLayout from '@/layouts/auth_layout'
import { Button } from '@/components/ui/button'
import Spinner from '@/components/spinner'

export default function VerifyEmail() {
  return (
    <AuthLayout
      title="Email verification"
      description="Please verify your email address by clicking on the link we just emailed to you."
    >
      <div className="space-y-6 text-center">
        <Form route="verify_email.send">
          {({ processing }) => (
            <Button variant="secondary" type="submit" disabled={processing} className="w-full">
              {processing && <Spinner />}
              Resend verification email
            </Button>
          )}
        </Form>

        <Form route="session.destroy">
          {({ processing }) => (
            <button
              type="submit"
              disabled={processing}
              className="text-foreground underline underline-offset-4 transition-colors hover:text-current text-sm"
            >
              Log out
            </button>
          )}
        </Form>
      </div>
    </AuthLayout>
  )
}
