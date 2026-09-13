import { Link } from '@adonisjs/inertia/react'
import { BookOpen, FolderGit2, LayoutGrid } from 'lucide-react'
import AppLogo from '@/components/app_logo'
import { NavFooter } from '@/components/nav_footer'
import { NavMain } from '@/components/nav_main'
import { NavUser } from '@/components/nav_user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import type { NavItem } from '@/types'

const mainNavItems: NavItem[] = [{ title: 'Dashboard', href: '/dashboard', icon: LayoutGrid }]

const footerNavItems: NavItem[] = [
  { title: 'Repository', href: 'https://github.com/adonisjs', icon: FolderGit2 },
  { title: 'Documentation', href: 'https://docs.adonisjs.com', icon: BookOpen },
]

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              render={
                <Link href="/dashboard" prefetch>
                  <AppLogo />
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={footerNavItems} className="mt-auto" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
