import { Link } from '@adonisjs/inertia/react'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useCurrentUrl } from '@/hooks/use_current_url'
import type { NavItem } from '@/types'

export function NavMain({ items }: { items: NavItem[] }) {
  const { isCurrentUrl } = useCurrentUrl()

  return (
    <SidebarGroup className="px-2 py-0">
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              tooltip={{ children: item.title }}
              isActive={isCurrentUrl(item.href)}
              render={
                <Link href={item.href} prefetch>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              }
            />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
