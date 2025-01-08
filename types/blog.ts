export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  coverImage?: string
  content: string
  author: {
    name: string
    avatar: string
  }
  tags?: string[]
}

export interface BlogPageProps {
  params: {
    slug?: string
    locale?: string
  }
} 