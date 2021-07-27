import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="py-4">
        <div tw="flex items-center justify-between w-full max-w-3xl px-4 pb-4 mx-auto sm:px-6 xl:max-w-4xl xl:px-0">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  {/* <Logo /> */}
                  <span aria-label="astronaut" role="img" className="text-xl">
                    🧑‍🚀
                  </span>
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-xl font-sans sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </header>
      <SectionContainer>
        <main className="mb-auto">{children}</main>
      </SectionContainer>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
