import tw, { styled } from 'twin.macro'

const Title = styled.h1(() => [
  tw`text-3xl leading-9 tracking-tight text-gray-700 dark:text-gray-100`,
  tw`md:(text-4xl)`,
])

export default Title
