import styled from "styled-components"
// import Head from "next/head"

import Link from "next/link"
import Layout from "../components/layout"

const Title = styled.h1`
  margin: 0;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Container = styled.div`
  font-size: 50px;
`

const Home = () => {
  return (
    <Layout>
      <Container>
        <Title>My page</Title>
        <Link href="/">
          <a>Hello, world!</a>
        </Link>
      </Container>
    </Layout>
  )
}
export default Home
