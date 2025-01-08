import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import CustomLink from './Link'

const components = {
  Image,
  a: CustomLink,
  img: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        {...props}
      />
    </div>
  ),
}

interface MDXLayoutProps {
  code: string
}

export function MDXLayout({ code }: MDXLayoutProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}

export default components 