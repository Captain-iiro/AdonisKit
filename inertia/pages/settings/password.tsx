import { Head, usePage } from '@inertiajs/react'
import { Form } from '@adonisjs/inertia/react'
import SettingsLayout from '@/layouts/settings/layout'
import { DeleteUser } from '@/components/delete_user'
import Heading from '@/components/heading'
import InputError from '@/components/input_error'
import Spinner from '@/components/spinner'
import { PasswordInput } from '@/components/password_input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import type { Data } from '@generated/data'

export default function SettingsPassword() {
  const user = usePage<{ user?: Data.User }>().props.user

  return (
    <>
      <Head title="Security settings" />
      <h1 className="sr-only">Security settings</h1>
      <SettingsLayout>
        <div className="space-y-6">
          <Heading
            variant="small"
            title="Update password"
            description="Ensure your account is using a long, random password to stay secure"
          />

          <Form route="settings.update_password" options={{ preserveScroll: true }}>
            {({ errors, processing }) => (
              <div className="space-y-6">
                <input
                  className="sr-only"
                  tabIndex={-1}
                  aria-hidden="true"
                  name="username"
                  defaultValue={user?.email}
                  autoComplete="username"
                />

                <div className="grid gap-2">
                  <Label htmlFor="currentPassword">Current password</Label>
                  <PasswordInput
                    id="currentPassword"
                    name="currentPassword"
                    autoComplete="current-password"
                    aria-invalid={errors.currentPassword ? 'true' : undefined}
                  />
                  <InputError message={errors.currentPassword} />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="newPassword">New password</Label>
                  <PasswordInput
                    id="newPassword"
                    name="newPassword"
                    autoComplete="new-password"
                    aria-invalid={errors.newPassword ? 'true' : undefined}
                  />
                  <InputError message={errors.newPassword} />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="newPasswordConfirmation">Confirm new password</Label>
                  <PasswordInput
                    id="newPasswordConfirmation"
                    name="newPasswordConfirmation"
                    autoComplete="new-password"
                    aria-invalid={errors.newPasswordConfirmation ? 'true' : undefined}
                  />
                  <InputError message={errors.newPasswordConfirmation} />
                </div>

                <div className="flex items-center gap-4">
                  <Button type="submit" disabled={processing}>
                    {processing && <Spinner />}
                    Save
                  </Button>
                </div>
              </div>
            )}
          </Form>
        </div>

        <div className="border-t pt-6">
          <DeleteUser />
        </div>
      </SettingsLayout>
    </>
  )
}
