/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router
  .get('/', ({ auth, inertia, response }) => {
    if (auth.user) {
      return response.redirect().toRoute('dashboard.index')
    }
    return inertia.render('home', {})
  })
  .as('home')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())

/*
|--------------------------------------------------------------------------
| Password reset routes
|--------------------------------------------------------------------------
*/
router
  .group(() => {
    router.get('forgot-password', [controllers.Auth, 'forgotPassword']).as('password.forgot.show')
    router
      .post('forgot-password', [controllers.Auth, 'sendPasswordResetLink'])
      .as('password.forgot.store')

    router.get('reset-password', [controllers.Auth, 'resetPassword']).as('password.reset.show')
    router.post('reset-password', [controllers.Auth, 'updatePassword']).as('password.reset.store')
  })
  .use(middleware.guest())

/*
|--------------------------------------------------------------------------
| Email verification routes
|--------------------------------------------------------------------------
*/
router
  .group(() => {
    router.get('verify-email', [controllers.Auth, 'verifyEmail']).as('verify_email.show')
    router
      .post('verify-email/notification', [controllers.Auth, 'resendVerificationEmail'])
      .as('verify_email.send')
  })
  .use(middleware.auth())

// The confirmation link is also reachable when the user is signed out.
router.get('verify-email/confirm', [controllers.Auth, 'confirmEmail']).as('verify_email.confirm')

/*
|--------------------------------------------------------------------------
| Confirm password routes
|--------------------------------------------------------------------------
| Require the user to re-enter their password before accessing
| sensitive routes.
*/
router
  .group(() => {
    router
      .get('confirm-password', [controllers.ConfirmPassword, 'show'])
      .as('confirm_password.show')
    router
      .post('confirm-password', [controllers.ConfirmPassword, 'store'])
      .as('confirm_password.store')
  })
  .use(middleware.auth())

/*
|--------------------------------------------------------------------------
| Dashboard routes
|--------------------------------------------------------------------------
| Only available to authenticated users with a verified email address.
*/
router
  .group(() => {
    router.get('dashboard', [controllers.Dashboard, 'index'])
  })
  .use(middleware.auth())
  .use(middleware.verified())

/*
|--------------------------------------------------------------------------
| Settings routes
|--------------------------------------------------------------------------
| Only available to authenticated users with a verified email address.
*/
router
  .group(() => {
    router.get('settings/profile', [controllers.Settings, 'profile'])
    router.patch('settings/profile', [controllers.Settings, 'updateProfile'])

    router.get('settings/password', [controllers.Settings, 'password'])
    router.patch('settings/password', [controllers.Settings, 'updatePassword'])

    router.get('settings/appearance', [controllers.Settings, 'appearance'])

    router
      .post('settings/account/delete', [controllers.Settings, 'destroy'])
      .use(middleware.confirmPassword())
  })
  .use(middleware.auth())
  .use(middleware.verified())
