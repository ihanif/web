import { Metadata } from 'next'
import { getFileBySlug, getAllFilesFrontMatter } from '@/lib/mdx'
import type { BlogPageProps } from '@/types/blog'

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getFileBySlug('blog', params.slug || '', params.locale || 'en')
  
  return {
    title: post.frontMatter.title,
    description: post.frontMatter.summary,
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.summary,
      type: 'article',
      authors: [post.frontMatter.author.name],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllFilesFrontMatter('blog', 'en')
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPageProps) {
  const post = await getFileBySlug('blog', params.slug || '', params.locale || 'en')
  
  return (
    <article className="container mx-auto py-12">
      <h1 className="mb-8 text-4xl font-bold">{post.frontMatter.title}</h1>
      <div className="prose dark:prose-dark max-w-none">
        {post.content}
      </div>
    </article>
  )
} 