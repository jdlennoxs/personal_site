import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import Title from '@/ui/Title'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import tw, { styled } from 'twin.macro'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }
const Divider = styled.div(() => [tw`divide-y-4 divide-blue-400 dark:divide-gray-700`])
const Header = styled.div(() => [tw`pt-6 pb-8 space-y-2 md:space-y-5`])

const Description = styled.p(() => [tw`text-lg leading-7 text-gray-500 dark:text-gray-400`])

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <Divider>
        <Header>
          <Title>Latest</Title>
          <Description tw="font-serif">{siteMetadata.description}</Description>
        </Header>
        <Divider as="ul">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} tw="py-12">
                <article>
                  <div tw="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt tw="sr-only">Published on</dt>
                      <dd tw="text-base font-sans font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      </dd>
                    </dl>
                    <div tw="space-y-5 xl:col-span-3">
                      <div tw="space-y-6">
                        <div>
                          <h2 tw="text-2xl font-sans leading-8 tracking-tight">
                            <Link href={`/blog/${slug}`} tw="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                          <div tw="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div tw="prose text-gray-500 max-w-none dark:text-gray-400">{summary}</div>
                      </div>
                      <div tw="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          tw="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </Divider>
      </Divider>
      {posts.length > MAX_DISPLAY && (
        <div tw="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            tw="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
