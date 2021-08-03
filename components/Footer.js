import tw, { styled } from 'twin.macro'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcons from '@/components/SocialIcons'

const FooterContainer = styled.footer(() => [tw`bg-dark w-full border-gray-200`])
const FooterContent = styled.div(() => [tw`flex flex-col items-center mt-10`])

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons />
        <div tw="flex mb-2 space-x-2 text-xs text-gray-200 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div tw="text-red-400">{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div tw="text-red-400">{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div tw="mb-8 text-xs text-gray-200 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Built with Tailwind Nextjs Starter
          </Link>
        </div>
      </FooterContent>
    </FooterContainer>
  )
}
