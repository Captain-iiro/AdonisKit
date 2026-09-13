import { useRef } from 'react'
import { Form } from '@adonisjs/inertia/react'
import Heading from '@/components/heading'
import InputError from '@/components/input_error'
import { PasswordInput } from '@/components/password_input'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

export function DeleteUser() {
  const passwordInput = useRef<HTMLInputElement>(null)

  return (
    <div className="space-y-6">
      <Heading
        variant="small"
        title="Delete account"
        description="Delete your account and all of its resources"
      />

      <div className="border-red-100 bg-red-50 dark:border-red-200/10 dark:bg-red-700/10 space-y-4 rounded-lg border p-4">
        <div className="text-red-600 dark:text-red-100 relative space-y-0.5">
          <p className="font-medium">Warning</p>
          <p className="text-sm">Please proceed with caution, this cannot be undone.</p>
        </div>

        <Dialog>
          <DialogTrigger render={<Button variant="destructive">Delete account</Button>} />
          <DialogContent>
            <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
            <DialogDescription>
              Once your account is deleted, all of its resources and data will also be permanently
              deleted. Please enter your password to confirm you would like to permanently delete
              your account.
            </DialogDescription>

            <Form
              route="settings.destroy"
              options={{ preserveScroll: true }}
              onError={() => passwordInput.current?.focus()}
              resetOnSuccess
            >
              {({ resetAndClearErrors, processing, errors }) => {
                const passwordsErrors = errors as Record<string, string | undefined>

                return (
                  <div className="space-y-6">
                    <div className="grid gap-2">
                      <Label htmlFor="password" className="sr-only">
                        Password
                      </Label>
                      <PasswordInput
                        id="password"
                        name="password"
                        ref={passwordInput}
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                      <InputError message={passwordsErrors.password} />
                    </div>

                    <DialogFooter className="gap-2">
                      <DialogClose variant="secondary" onClick={() => resetAndClearErrors()}>
                        Cancel
                      </DialogClose>
                      <Button variant="destructive" disabled={processing} type="submit">
                        Delete account
                      </Button>
                    </DialogFooter>
                  </div>
                )
              }}
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
