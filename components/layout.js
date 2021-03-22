import Header from "../components/shared/header"
import Footer from "../components/shared/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
