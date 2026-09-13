import vine from '@vinejs/vine'

/**
 * Shared rules for email and password.
 */
const email = () => vine.string().email().maxLength(254)
const password = () => vine.string().minLength(8).maxLength(32)

/**
 * Validator to use when performing self-signup.
 *
 * The "passwordConfirmation" field is declared explicitly, so that it is part
 * of the request body type shared with the frontend. Otherwise the signup form
 * has no way to know about the errors reported for this field.
 */
export const signupValidator = vine.create({
  fullName: vine.string().nullable(),
  email: email().unique({ table: 'users', column: 'email' }),
  password: password().confirmed({
    confirmationField: 'passwordConfirmation',
  }),
  passwordConfirmation: vine.string(),
})

/**
 * Validator to use when logging in an existing user
 */
export const loginValidator = vine.create({
  email: email(),
  password: vine.string(),
})

/**
 * Validator to use when updating the profile of the authenticated user.
 * The current user id is passed through the validation "meta" to exclude
 * himself from the email uniqueness check.
 */
export const updateProfileValidator = vine.create({
  fullName: vine.string().nullable(),
  email: vine
    .string()
    .email()
    .maxLength(254)
    .unique({
      table: 'users',
      column: 'email',
      filter: (query, _value, field) => {
        const userId = field.meta?.userId as number | undefined
        if (userId) {
          query.whereNot('id', userId)
        }
      },
    }),
})

/**
 * Validator to use when changing the password of the authenticated user.
 */
export const changePasswordValidator = vine.create({
  currentPassword: vine.string(),
  newPassword: password().confirmed({
    confirmationField: 'newPasswordConfirmation',
  }),
  newPasswordConfirmation: vine.string(),
})

/**
 * Validator to use when requesting a password reset link.
 */
export const forgotPasswordValidator = vine.create({
  email: email(),
})

/**
 * Validator to use when resetting the password with a token.
 */
export const resetPasswordValidator = vine.create({
  token: vine.string(),
  password: password().confirmed({
    confirmationField: 'passwordConfirmation',
  }),
  passwordConfirmation: vine.string(),
})

/**
 * Validator to use when confirming the current password
 * to access a sensitive route.
 */
export const confirmPasswordValidator = vine.create({
  password: vine.string(),
})
