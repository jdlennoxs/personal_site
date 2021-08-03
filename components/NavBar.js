import { useRouter } from 'next/router'
import search from '@iconify/icons-la/search'
import { Icon } from '@iconify/react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import tw, { styled, theme } from 'twin.macro'

const TabLink = styled(Link)(({ isActive }) => [
  tw`p-1 text-gray-600 sm:p-2 dark:text-gray-100 tracking-wide transition-all duration-300`,
  tw`font-serif`,
  tw`hover:(text-red-400)`,
  // tw`bg-gradient-to-r from-red-600 to-red-400`,
  isActive && tw`text-black`,

  // `
  // background-size: 200%;
  // -webkit-background-clip: text;
  // -moz-background-clip: text;
  // &:hover {
  // animation: rainbow 2s ease-in-out infinite;
  // -webkit-text-fill-color: transparent;
  // -moz-text-fill-color: transparent;
  // }
  // @keyframes rainbow {
  //   0%{background-position:left}
  //   50%{background-position:right}
  //   100%{background-position:left}
  // }
  // `,
])

const StyledSpan = styled.span(() => [tw`last:(hidden)`, tw`inline text-red-400`])

const NavBar = () => {
  const router = useRouter()
  return (
    <header tw="py-4 border-gray-200">
      <SectionContainer>
        <div tw="flex items-center justify-between">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div tw="flex items-center justify-between">
                {/* <div tw="mr-3">
                  <span aria-label="astronaut" role="img" tw="text-xl">
                    🧑‍🚀
                  </span>
                </div> */}
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div tw="hidden h-6 text-xl italic text-red-400 font-serif sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div tw="flex items-center text-base leading-5">
            <div tw="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div tw="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <>
                    <TabLink
                      key={link.title}
                      href={link.href}
                      isActive={router.pathname === link.href}
                    >
                      {link.title}
                    </TabLink>

                    <StyledSpan tw="text-red-400">{` • `}</StyledSpan>
                  </>
                ))}
              </div>
            </div>
            <div tw="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button tw="p-1 mr-1 rounded-full text-gray-700 hover:text-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span tw="sr-only">Search</span>
                <Icon icon={search} height="1em" />
              </button>
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </SectionContainer>
    </header>
  )
}

export default NavBar
