import type { ReactNode } from 'react'
import { usePage } from '@inertiajs/react'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function AppShell({ children }: { children: ReactNode }) {
  const { sidebarOpen } = usePage().props as { sidebarOpen?: boolean }

  return <SidebarProvider defaultOpen={sidebarOpen ?? true}>{children}</SidebarProvider>
}
