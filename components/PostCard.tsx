import Link from 'next/link'
import Image from 'next/image'

interface Post {
  slug: string
  title: string
  summary: string
  date: string
  coverImage?: string
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="group relative flex flex-col space-y-3">
      {post.coverImage && (
        <div className="aspect-video overflow-hidden rounded-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={600}
            height={400}
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          <Link 
            href={`/blog/${post.slug}`}
            className="text-gradient-to-r from-primary to-secondary"
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-muted-foreground line-clamp-2">{post.summary}</p>
        <time className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
    </div>
  )
} 