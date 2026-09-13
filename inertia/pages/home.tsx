import { usePage } from '@inertiajs/react'
import { Link } from '@adonisjs/inertia/react'
import AppLogo from '@/components/app_logo'
import { ThemeToggle } from '@/components/theme_toggle'
import { Button } from '@/components/ui/button'

export default function Home() {
  const user = usePage().props.user

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="sticky top-0 z-10 border-b border-sidebar-border/80 bg-background">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <AppLogo />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <Button nativeButton={false} render={<Link href="/dashboard">Dashboard</Link>} />
            ) : (
              <>
                <Button
                  nativeButton={false}
                  variant="ghost"
                  render={<Link href="/login">Log in</Link>}
                />
                <Button nativeButton={false} render={<Link href="/signup">Create account</Link>} />
              </>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-16 text-center md:px-6">
        <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Welcome to your AdonisKit dashboard
        </h1>
        <p className="mt-4 max-w-xl text-balance text-lg text-muted-foreground">
          A modern dashboard powered by Inertia, React and Tailwind CSS — built with AdonisJS.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {user ? (
            <Button
              nativeButton={false}
              size="lg"
              render={<Link href="/dashboard">Open dashboard</Link>}
            />
          ) : (
            <>
              <Button
                nativeButton={false}
                size="lg"
                render={<Link href="/signup">Create account</Link>}
              />
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                render={<Link href="/login">Log in</Link>}
              />
            </>
          )}
        </div>
      </main>

      <footer className="border-t border-sidebar-border/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-muted-foreground md:px-6">
          <p>© {new Date().getFullYear()} AdonisKit</p>
          <a
            href="https://docs.adonisjs.com/introduction"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Documentation
          </a>
        </div>
      </footer>
    </div>
  )
}
