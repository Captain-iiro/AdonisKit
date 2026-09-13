import { Link } from '@adonisjs/inertia/react'
import { ChevronRight } from 'lucide-react'
import type { BreadcrumbItem } from '@/types'
import { cn } from 'cn'

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1

          return (
            <li key={item.title} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />}
              {isCurrent ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.title}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'transition-colors hover:text-foreground',
                    'underline-offset-4 hover:underline'
                  )}
                >
                  {item.title}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
