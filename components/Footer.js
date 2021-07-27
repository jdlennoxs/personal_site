import tw, { styled } from 'twin.macro'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const FooterContainer = styled.footer(() => [tw`bg-gray-50 w-full border-t border-gray-200`])
const FooterContent = styled.div(() => [tw`flex flex-col items-center mt-10`])

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div tw="flex mb-3 space-x-4">
          {/* <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" /> */}
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" /> */}
          {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" /> */}
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" /> */}
        </div>
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
