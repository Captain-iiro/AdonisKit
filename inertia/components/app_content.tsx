import { SidebarInset } from '@/components/ui/sidebar'
import * as React from 'react'

export function AppContent({
  children,
  className,
  ...props
}: React.ComponentProps<'main'> & { className?: string }) {
  return (
    <SidebarInset className={className} {...props}>
      {children}
    </SidebarInset>
  )
}
