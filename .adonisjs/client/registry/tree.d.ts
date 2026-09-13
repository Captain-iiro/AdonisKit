/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  password: {
    forgot: {
      show: typeof routes['password.forgot.show']
      store: typeof routes['password.forgot.store']
    }
    reset: {
      show: typeof routes['password.reset.show']
      store: typeof routes['password.reset.store']
    }
  }
  verifyEmail: {
    show: typeof routes['verify_email.show']
    send: typeof routes['verify_email.send']
    confirm: typeof routes['verify_email.confirm']
  }
  confirmPassword: {
    show: typeof routes['confirm_password.show']
    store: typeof routes['confirm_password.store']
  }
  dashboard: {
    index: typeof routes['dashboard.index']
  }
  settings: {
    profile: typeof routes['settings.profile']
    updateProfile: typeof routes['settings.update_profile']
    password: typeof routes['settings.password']
    updatePassword: typeof routes['settings.update_password']
    appearance: typeof routes['settings.appearance']
    destroy: typeof routes['settings.destroy']
  }
}
