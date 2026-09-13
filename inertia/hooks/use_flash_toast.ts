import { usePage } from '@inertiajs/react'
import { useEffect } from 'react'
import { toast } from 'sonner'

type Flash = {
  error?: string
  success?: string
}

export function useFlashToast() {
  const flash = usePage().flash as Flash | undefined

  useEffect(() => {
    toast.dismiss()

    if (flash?.error) {
      toast.error(flash.error)
    }
    if (flash?.success) {
      toast.success(flash.success)
    }
  }, [flash])
}
