import { allPosts } from 'contentlayer/generated'
import { MDXLayout } from '@/components/MDXComponents'
import { GetStaticProps } from 'next'

export default function RoadmapPage({ code }: { code: string }) {
  return (
    <article className="prose dark:prose-dark mx-auto">
      <MDXLayout code={code} />
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = allPosts.find((p) => p.slug === 'roadmap')
  
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      code: post.body.code,
    },
  }
} 