import { Link } from '@adonisjs/inertia/react'
import { cn } from 'cn'
import type { ComponentProps } from 'react'

export default function TextLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        'text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500',
        className
      )}
      {...props}
    />
  )
}
