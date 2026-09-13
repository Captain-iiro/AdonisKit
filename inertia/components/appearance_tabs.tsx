import type { LucideIcon } from 'lucide-react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme, type Theme } from '@/components/theme_provider'
import { cn } from 'cn'

const appearanceOptions: Array<{ theme: Theme; label: string; icon: LucideIcon }> = [
  { theme: 'light', label: 'Light', icon: Sun },
  { theme: 'dark', label: 'Dark', icon: Moon },
  { theme: 'system', label: 'System', icon: Monitor },
]

export function AppearanceTabs() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800">
      {appearanceOptions.map(({ theme: value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          className={cn(
            'flex items-center rounded-md px-3.5 py-1.5 transition-colors',
            theme === value
              ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
              : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60'
          )}
        >
          <Icon className="-ml-1 h-4 w-4" />
          <span className="ml-1.5 text-sm">{label}</span>
        </button>
      ))}
    </div>
  )
}
