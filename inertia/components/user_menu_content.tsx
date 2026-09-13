import { Form, Link } from '@adonisjs/inertia/react'
import { LogOut, Settings } from 'lucide-react'
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { UserInfo } from '@/components/user_info'
import { useMobileNavigation } from '@/hooks/use_mobile_navigation'
import type { Data } from '@generated/data'

export function UserMenuContent({ user }: { user: Data.User }) {
  const cleanup = useMobileNavigation()

  return (
    <>
      <DropdownMenuGroup>
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <UserInfo user={user} showEmail />
          </div>
        </DropdownMenuLabel>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem
          render={
            <Link href="/settings/profile" className="flex w-full items-center gap-1.5">
              <Settings />
              Settings
            </Link>
          }
        />
      </DropdownMenuGroup>
      <DropdownMenuSeparator />

      <DropdownMenuItem variant="destructive" className="p-0">
        <Form route="session.destroy" className="w-full" onFinish={cleanup}>
          <button
            type="submit"
            className="flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-left text-sm font-medium text-destructive"
          >
            <LogOut />
            Log out
          </button>
        </Form>
      </DropdownMenuItem>
    </>
  )
}
