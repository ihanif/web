import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import asrData from '@/data/asrData'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import useTranslation from 'next-translate/useTranslation'

const MAX_DISPLAY = 5

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : ''
  const posts = await getAllFilesFrontMatter('blog', otherLocale)

  return { props: { posts, locale, availableLocales: locales } }
}

export default function ASR({ posts, locale, availableLocales }) {
  const { t } = useTranslation()

  return (
    <>
      <PageSEO
        title={asrData[locale]?.title}
        description={asrData[locale]?.description}
        availableLocales={availableLocales}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t(asrData[locale]?.title)}
          </h1>
        </div>
        <div className="divide-y divide-gray-200 py-12 dark:divide-gray-700">
          {
            <p className="pb-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
              {t(asrData[locale]?.description)} <br /> <br />
              {/* <a href="https://ihanif-wav2vec-pashto-asr.hf.space" target="_blank" rel="noreferrer">
                https://ihanif-wav2vec-pashto-asr.hf.space
              </a> */}
              <Link
                href="https://ihanif-wav2vec-pashto-asr.hf.space"
                className="text-lg font-semibold leading-7 text-gray-900  dark:text-gray-100 "
              >
                https://ihanif-wav2vec-pashto-asr.hf.space
              </Link>
            </p>
          }
          <div className="space-y-2  pb-8 md:space-y-5">
            {
              <iframe
                src="https://ihanif-wav2vec-pashto-asr.hf.space"
                allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
                frameBorder="1"
                width="100%"
                height="650"
              ></iframe>
            }
            {/* <gradio-app space="ihanif/wav2vec-pashto-asr"></gradio-app> */}
          </div>
        </div>
      </div>
    </>
  )
}
