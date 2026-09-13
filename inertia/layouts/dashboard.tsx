import { type ReactElement } from 'react'
import AppShell from '@/components/app_shell'
import { AppContent } from '@/components/app_content'
import AppSidebar from '@/components/app_sidebar'
import { AppSidebarHeader } from '@/components/app_sidebar_header'
import type { BreadcrumbItem } from '@/types'

export default function DashboardLayout({
  children,
  breadcrumbs = [],
}: {
  children: ReactElement
  breadcrumbs?: BreadcrumbItem[]
}) {
  return (
    <AppShell>
      <AppSidebar />
      <AppContent className="min-w-0 overflow-x-clip">
        <AppSidebarHeader breadcrumbs={breadcrumbs} />
        {children}
      </AppContent>
    </AppShell>
  )
}
