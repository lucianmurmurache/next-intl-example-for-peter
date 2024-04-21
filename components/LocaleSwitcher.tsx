import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

export default function LocaleSwitcher() {
  const { locale, locales, route, query } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)
  const t = useTranslations('LocaleSwitcher')

  return (
    <div className="w-10">
      <Link
        href={{
          pathname: `${route}`,
          query: query,
        }}
        locale={otherLocale}
        title={t('switchLocale', { locale: otherLocale })}
      >
        <Image
          width={30}
          height={0}
          src={
            locale && locale === 'de'
              ? '/icons/flagDE.svg'
              : '/icons/flagEN.svg'
          }
          className="w-full"
          alt={t('switchLocale', { locale: otherLocale })}
        />
      </Link>
    </div>
  )
}
