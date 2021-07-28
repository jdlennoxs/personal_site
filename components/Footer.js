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
        <div className="flex mb-2 space-x-2 text-xs text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-xs text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Built with Tailwind Nextjs Starter
          </Link>
        </div>
      </FooterContent>
    </FooterContainer>
  )
}
