import { configApp } from '@adonisjs/eslint-config'
import { react } from '@adonisjs/eslint-config/react'

export default configApp(
  {
    name: 'shadcn-generated/ignores',
    ignores: [
      'database/schema.ts',
      'inertia/components/ui/**',
      'inertia/hooks/use-mobile.ts',
      'inertia/lib/utils.ts',
    ],
  },
  ...react
)
