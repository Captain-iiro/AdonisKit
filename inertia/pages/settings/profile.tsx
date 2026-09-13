import { Head, usePage } from '@inertiajs/react'
import { Form } from '@adonisjs/inertia/react'
import { useState } from 'react'
import SettingsLayout from '@/layouts/settings/layout'
import Heading from '@/components/heading'
import InputError from '@/components/input_error'
import Spinner from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DeleteUser } from '@/components/delete_user'
import type { Data } from '@generated/data'

export default function SettingsProfile() {
  const user = usePage<{ user?: Data.User }>().props.user
  const [fullName, setFullName] = useState(user?.fullName ?? '')
  const [email, setEmail] = useState(user?.email ?? '')

  if (!user) {
    return null
  }

  return (
    <>
      <Head title="Profile settings" />
      <h1 className="sr-only">Profile settings</h1>
      <SettingsLayout>
        <div className="space-y-6">
          <Heading
            variant="small"
            title="Profile"
            description="Update your name and email address"
          />

          <Form route="settings.update_profile" options={{ preserveScroll: true }}>
            {({ errors, processing }) => (
              <div className="space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="fullName">Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={errors.email ? 'true' : undefined}
                  />
                  <InputError message={errors.email} />
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

        <DeleteUser />
      </SettingsLayout>
    </>
  )
}
