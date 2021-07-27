import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import Link from '@/components/Link'

const Container = styled.div(() => [tw`p-4 md:w-1/2`])
const Border = styled.div(() => [
  tw`h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md`,
  tw`overflow-hidden`,
])
const CardImage = styled(Image)(() => [tw`lg:h-48 md:h-36`, tw`object-cover object-center`])
const TextContainer = styled.div(() => [tw`p-6`])

const Card = ({ title, description, imgSrc, href }) => (
  <Container style={{ maxWidth: '544px' }}>
    <Border>
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <CardImage alt={title} src={imgSrc} width={544} height={306} />
        </Link>
      ) : (
        <CardImage alt={title} src={imgSrc} width={544} height={306} />
      )}
      <TextContainer>
        <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </TextContainer>
    </Border>
  </Container>
)

export default Card
