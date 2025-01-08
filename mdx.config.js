import { remarkGfm } from 'remark-gfm'
import { rehypeSlug } from 'rehype-slug'
import { rehypeAutolinkHeadings } from 'rehype-autolink-headings'
import { rehypePrism } from 'rehype-prism-plus'

const mdxConfig = {
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      [rehypePrism, { ignoreMissing: true }],
    ],
    format: 'mdx',
  },
}

export default mdxConfig 