import { NextResponse } from 'next/server'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get('locale') || ''
  
  const posts = await getAllFilesFrontMatter('blog', locale)
  return NextResponse.json(posts)
} 