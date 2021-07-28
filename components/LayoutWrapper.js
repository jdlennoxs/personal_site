import SectionContainer from './SectionContainer'
import Footer from './Footer'
import NavBar from './NavBar'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <SectionContainer>
        <main className="mb-auto">{children}</main>
      </SectionContainer>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
