import Image from 'next/image'
import tw, { styled, theme } from 'twin.macro'
import Link from '@/components/Link'

const Container = styled.div(() => [tw`py-6`])

const Border = styled.div(() => [
  tw`h-full border border-gray-700 border-opacity-60 dark:border-gray-700 bg-white`,
  tw`overflow-hidden`,
  //   `
  // &:hover {
  //   box-shadow: inset 0 10px 5px -10px ${theme`colors.red.400`};
  // }
  // `
])
const CardLink = styled(Link)(() => [
  `&:hover {
    ${TextContainer}:before{
    transition-duration: .2s;
    transform: scaleX(1);
    background: ${theme`colors.red.400`};
    }
  }`,
])
const CardImage = styled(Image)(() => [tw`lg:h-48 md:h-36`, tw`object-cover object-center`])
const TextContainer = styled.div(() => [
  `
&:before {
display: block;
content: "";
left: 0;
right: 0;
top: -30px;
height: 2px;
background: ${theme`colors.gray.600`};
transform: scaleX(.25);
transform-origin: 0 0;
transition: all .4s;
}

`,
])

const CoverImage = ({ href, title, imgSrc }) => (
  <div style={{ fontSize: '0' }}>
    {href ? (
      <CardImage alt={title} src={imgSrc} width={544} height={306} />
    ) : (
      <CardImage alt={title} src={imgSrc} width={544} height={306} />
    )}
  </div>
)

const Card = ({ title, description, imgSrc, href }) => (
  <Container>
    <CardLink href={href} aria-label={`Link to ${title}`}>
      {/* <Border> */}
      {imgSrc ? (
        <CoverImage title={title} imgSrc={imgSrc} href={href} style={{ maxWidth: '544px' }} />
      ) : null}
      <TextContainer style={{ maxWidth: '544px' }}>
        <h2 className="text-2xl font-serif leading-8 tracking-tight my-3">
          {/* {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : ( */}
          {title}
          {/* )} */}
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
        {/* {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-red-400 hover:text-red-500 dark:hover:text-blue-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )} */}
      </TextContainer>
      {/* </Border> */}
    </CardLink>
  </Container>
)

export default Card
