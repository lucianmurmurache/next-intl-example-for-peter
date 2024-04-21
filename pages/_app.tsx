import 'styles/tailwind.css'
import 'styles/globals.css'

import { AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'

export interface SharedPageProps {
  messages?: any
}

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const router = useRouter()

  return (
    <>
      <NextIntlClientProvider
        locale={router?.locale}
        timeZone="Europe/Vienna"
        messages={pageProps.messages}
      >
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </>
  )
}
