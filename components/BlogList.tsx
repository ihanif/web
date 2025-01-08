import { Suspense } from 'react'
import PostCard from './PostCard'
import { Post } from '../types/blog' // Adjusted import path

interface BlogListProps {
  posts: Post[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Suspense 
        fallback={
          <div className="w-full animate-pulse space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 rounded-lg bg-gray-200 dark:bg-gray-800" />
            ))}
          </div>
        }
      >
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Suspense>
    </div>
  )
} 