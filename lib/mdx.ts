import { unstable_cache } from 'next/cache'
import { compileMDX } from 'next-mdx-remote/rsc'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

export const getFileBySlug = unstable_cache(
  async (type: string, slug: string, locale: string) => {
    const source = readFileSync(
      join(process.cwd(), 'data', type, `${slug}.${locale}.mdx`),
      'utf8'
    )
    const { data: frontMatter, content } = matter(source, {})
    const { content: mdxContent } = await compileMDX({
      source: content,
      components: {},
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug]
        }
      }
    })

    return {
      frontMatter: {
        ...frontMatter,
        slug,
      },
      content: mdxContent,
    }
  },
  ['mdx-file'],
  {
    revalidate: 3600,
  }
)

export const getAllFilesFrontMatter = unstable_cache(
  async (type: string, locale: string = 'en') => {
    // Implementation with proper caching
    const files = readdirSync(join(process.cwd(), 'data', type))
    
    const posts = files
      .filter((file) => file.endsWith(`.${locale}.mdx`))
      .map((file) => {
        const source = readFileSync(join(process.cwd(), 'data', type, file), 'utf8')
        const { data: frontMatter } = matter(source, {})
        return {
          ...frontMatter,
          slug: file.replace(`.${locale}.mdx`, ''),
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  },
  ['mdx-files'],
  {
    revalidate: 3600,
  }
) 