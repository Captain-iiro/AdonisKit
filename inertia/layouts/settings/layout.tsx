import type { PropsWithChildren } from 'react'
import { Link } from '@adonisjs/inertia/react'
import Heading from '@/components/heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCurrentUrl } from '@/hooks/use_current_url'
import { cn } from 'cn'
import type { NavItem } from '@/types'

const settingsNavItems: NavItem[] = [
  { title: 'Profile', href: '/settings/profile' },
  { title: 'Security', href: '/settings/password' },
  { title: 'Appearance', href: '/settings/appearance' },
]

export default function SettingsLayout({ children }: PropsWithChildren) {
  const { isCurrentOrParentUrl } = useCurrentUrl()

  return (
    <div className="px-4 py-6">
      <Heading title="Settings" description="Manage your profile and account settings" />

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <aside className="w-full max-w-xl lg:w-48">
          <nav className="flex flex-col space-x-0 space-y-1" aria-label="Settings">
            {settingsNavItems.map((item) => (
              <Button
                key={item.href}
                size="sm"
                variant="ghost"
                nativeButton={false}
                render={
                  <Link href={item.href} className="w-full justify-start">
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.title}
                  </Link>
                }
                className={cn('w-full justify-start', {
                  'bg-muted': isCurrentOrParentUrl(item.href),
                })}
              />
            ))}
          </nav>
        </aside>

        <Separator className="my-6 lg:hidden" />

        <div className="min-w-0 flex-1 md:max-w-2xl">
          <section className="max-w-xl space-y-12">{children}</section>
        </div>
      </div>
    </div>
  )
}
