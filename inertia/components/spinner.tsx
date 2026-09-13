import { LoaderCircle } from 'lucide-react'
import { cn } from 'cn'

export default function Spinner({
  className,
  ...props
}: React.ComponentProps<typeof LoaderCircle>) {
  return (
    <LoaderCircle className={cn('size-4 animate-spin', className)} aria-hidden="true" {...props} />
  )
}
