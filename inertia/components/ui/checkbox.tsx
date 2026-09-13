import type { ComponentProps } from 'react'
import { Check } from 'lucide-react'
import { cn } from 'cn'

export function Checkbox({ className, ...props }: ComponentProps<'input'>) {
  return (
    <span className="relative flex size-4 shrink-0 items-center justify-center">
      <input
        type="checkbox"
        className={cn(
          'peer size-4 appearance-none rounded-[4px] border border-primary shadow transition-colors',
          'checked:border-primary checked:bg-primary checked:disabled:border-transparent checked:disabled:bg-primary/50',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className
        )}
        {...props}
      />
      <Check className="pointer-events-none absolute size-3.5 text-primary-foreground opacity-0 peer-checked:opacity-100" />
    </span>
  )
}
