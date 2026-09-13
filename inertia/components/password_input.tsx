import { forwardRef, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from 'cn'

const PasswordInput = forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, onChange, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const [hasValue, setHasValue] = useState(Boolean(props.defaultValue))
    const disabled = !hasValue || props.disabled

    return (
      <div className="relative">
        <Input
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          className={cn('pr-10', className)}
          onChange={(e) => {
            setHasValue(e.target.value !== '')
            onChange?.(e)
          }}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 rounded-md px-0 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </Button>
      </div>
    )
  }
)

PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
