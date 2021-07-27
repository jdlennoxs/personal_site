import SocialIcon from './social-icons'
import siteMetadata from '@/data/siteMetadata'

const SocialIcons = () => (
  <div tw="flex m-3 space-x-4">
    <SocialIcon kind="github" href={siteMetadata.github} size="6" />
    <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
  </div>
)

export default SocialIcons
