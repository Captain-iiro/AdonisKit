import './css/app.css'
import { type ReactElement } from 'react'
import { client } from './client'
import Layout from '~/layouts/default'
import { type Data } from '@generated/data'
import { createRoot } from 'react-dom/client'
import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react'
import { TuyauProvider } from '@adonisjs/inertia/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { ThemeProvider } from '~/components/theme_provider'
import { TooltipProvider } from '~/components/ui/tooltip'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisKit'

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) => {
    return resolvePageComponent<ResolvedComponent>(
      `./pages/${name}.tsx`,
      import.meta.glob<ResolvedComponent>('./pages/**/*.tsx'),
      (page: ReactElement<Data.SharedProps>) => <Layout children={page} />
    )
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <ThemeProvider>
        <TooltipProvider>
          <TuyauProvider client={client}>
            <App {...props} />
          </TuyauProvider>
        </TooltipProvider>
      </ThemeProvider>
    )
  },
  progress: {
    color: '#4B5563',
  },
})
