import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PageLayout'

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : ''
  const authorDetails = await getFileBySlug('ppk-privacy', [`ppk-privacy`], otherLocale)
  return { props: { authorDetails, availableLocales: locales } }
}

export default function About({ authorDetails, availableLocales }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      availableLocales={availableLocales}
    />
  )
}
