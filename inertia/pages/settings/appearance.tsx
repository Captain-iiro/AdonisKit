import { Head } from '@inertiajs/react'
import SettingsLayout from '@/layouts/settings/layout'
import Heading from '@/components/heading'
import { AppearanceTabs } from '@/components/appearance_tabs'

export default function SettingsAppearance() {
  return (
    <>
      <Head title="Appearance settings" />
      <h1 className="sr-only">Appearance settings</h1>
      <SettingsLayout>
        <div className="space-y-6">
          <Heading
            variant="small"
            title="Appearance settings"
            description="Update the appearance settings for your account"
          />
          <AppearanceTabs />
        </div>
      </SettingsLayout>
    </>
  )
}
