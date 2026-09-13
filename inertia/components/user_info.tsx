import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import type { Data } from '@generated/data'

export function UserInfo({ user, showEmail = false }: { user: Data.User; showEmail?: boolean }) {
  return (
    <>
      <Avatar className="h-8 w-8 overflow-hidden rounded-full">
        <AvatarFallback className="rounded-lg bg-zinc-200 text-black dark:bg-zinc-700 dark:text-white">
          {user.initials}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{user.fullName}</span>
        {showEmail && <span className="truncate text-xs text-muted-foreground">{user.email}</span>}
      </div>
    </>
  )
}
