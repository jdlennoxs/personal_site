import Link from '@/components/Link'
import tw, { styled } from 'twin.macro'

const CenteredContainer = styled.div(() => [
  tw`flex flex-col items-start justify-start`,
  tw`md:(justify-center items-center flex-row space-x-6 mt-24)`,
])

export default function FourZeroFour() {
  return (
    <CenteredContainer>
      <div tw="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 tw="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
          404
        </h1>
      </div>
      <div tw="max-w-md">
        <p tw="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p tw="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <Link href="/">
          <button tw="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg ring focus:(outline-none) hover:bg-blue-700 dark:hover:bg-blue-500">
            Back to homepage
          </button>
        </Link>
      </div>
    </CenteredContainer>
  )
}
