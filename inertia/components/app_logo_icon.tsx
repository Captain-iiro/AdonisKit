import { cn } from 'cn'

export default function AppLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn('size-5', className)}
    >
      <path d="M12 4 7 20h10M12 4l5 16M9.2 13.2h5.6" />
    </svg>
  )
}
