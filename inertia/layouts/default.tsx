import { Toaster } from 'sonner'
import { usePage } from '@inertiajs/react'
import DashboardLayout from './dashboard'
import { useFlashToast } from '@/hooks/use_flash_toast'
import type { BreadcrumbItem } from '@/types'

function getBreadcrumbs(url: string): BreadcrumbItem[] {
  if (url.startsWith('/settings')) {
    const labels: Array<[string, string]> = [
      ['/settings/profile', 'Profile'],
      ['/settings/password', 'Security'],
      ['/settings/appearance', 'Appearance'],
    ]
    const current = labels.find(([path]) => url.startsWith(path))
    return current
      ? [
          { title: 'Settings', href: '/settings/profile' },
          { title: current[1], href: current[0] },
        ]
      : []
  }

  return [{ title: 'Dashboard', href: '/dashboard' }]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { url } = usePage()

  useFlashToast()

  const content =
    url.startsWith('/dashboard') || url.startsWith('/settings') ? (
      <DashboardLayout breadcrumbs={getBreadcrumbs(url)}>
        {children as React.ReactElement}
      </DashboardLayout>
    ) : (
      children
    )

  return (
    <>
      {content}
      <Toaster position="top-center" richColors />
    </>
  )
}
