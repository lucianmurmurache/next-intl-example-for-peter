import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { LocaleSwitcher } from 'components'
import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('Home')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center p-5 md:p-10 lg:p-24">
        <div className="z-10 flex w-full max-w-3xl items-center justify-end">
          <LocaleSwitcher />
        </div>
        <section className="flex w-full max-w-3xl flex-col gap-y-5">
          <h1>{t('title')}</h1>
          <h2>{t('ts_shows_error')}</h2>
          <h3>
            {t('hint')},{' '}
            <a
              href="https://github.com/lucianmurmurache/next-intl-example-for-peter/blob/main/pages/index.tsx#L31"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github link
            </a>
          </h3>
          {/* <h3>{t('title_2')}</h3> */}
          {/* ☝️ Uncomment the above line to see it in action or add another element with a non existent translation */}
        </section>
      </main>
    </>
  )
}

export interface SharedPageProps {
  messages?: any
}

interface Query {
  [key: string]: string
}

export const getServerSideProps: GetServerSideProps<Query> = async (ctx) => {
  const { locale } = ctx

  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  }
}
