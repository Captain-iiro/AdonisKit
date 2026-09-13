import { usePage } from '@inertiajs/react'
import type { InertiaLinkProps } from '@inertiajs/react'

export function toUrl(href: string | URL): string {
  const urlString = href.toString()

  if (!urlString.startsWith('http')) {
    return urlString
  }

  try {
    return new URL(urlString).pathname
  } catch {
    return urlString
  }
}

export function useCurrentUrl() {
  const { url: currentUrl } = usePage()
  const currentUrlPath = new URL(
    currentUrl,
    typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
  ).pathname

  const isCurrentUrl = (
    urlToCheck: NonNullable<InertiaLinkProps['href']>,
    currentUrlArg?: string,
    startsWith = false
  ): boolean => {
    const urlToCompare = currentUrlArg ?? currentUrlPath
    const path = toUrl(urlToCheck.toString())

    return startsWith ? urlToCompare.startsWith(path) : path === urlToCompare
  }

  const isCurrentOrParentUrl = (
    urlToCheck: NonNullable<InertiaLinkProps['href']>,
    currentUrlArg?: string
  ): boolean => {
    return isCurrentUrl(urlToCheck, currentUrlArg, true)
  }

  const whenCurrentUrl = <TIfTrue, TIfFalse = null>(
    urlToCheck: NonNullable<InertiaLinkProps['href']>,
    ifTrue: TIfTrue,
    ifFalse: TIfFalse = null as TIfFalse
  ): TIfTrue | TIfFalse => {
    return isCurrentUrl(urlToCheck) ? ifTrue : ifFalse
  }

  return {
    currentUrl: currentUrlPath,
    isCurrentUrl,
    isCurrentOrParentUrl,
    whenCurrentUrl,
  }
}
