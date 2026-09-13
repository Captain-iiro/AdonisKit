import type { ReactNode } from 'react'
import { Link } from '@adonisjs/inertia/react'
import AppLogoIcon from '@/components/app_logo_icon'

type AuthLayoutProps = {
  children: ReactNode
  title: string
  description: string
}

export default function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <Link className="flex flex-col items-center gap-2 font-medium" href="/">
              <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                <AppLogoIcon className="size-9" />
              </div>
              <span className="sr-only">{title}</span>
            </Link>

            <div className="space-y-2 text-center">
              <h1 className="text-xl font-medium">{title}</h1>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}
