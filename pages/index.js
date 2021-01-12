import styled from "styled-components"
// import Head from "next/head"
import Header from "../components/header"
import Link from "next/link"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Container = styled.div`
  font-size: 50px;
`

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Container>
        <Title>My page</Title>
        <Link href="/firstPage">
          <a>Hello, world!</a>
        </Link>
      </Container>
    </>
  )
}
export default Home
