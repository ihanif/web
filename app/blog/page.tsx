import { Suspense } from 'react'
import BlogList from '@/components/BlogList'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest blog posts',
}

function LoadingSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"
        />
      ))}
    </div>
  )
}

export default async function BlogPage() {
  const posts = await getAllFilesFrontMatter('blog', 'en')
  
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <BlogList posts={posts} />
      </Suspense>
    </div>
  )
} 