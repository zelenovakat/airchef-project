import Layout from "../components/layout"
import ChefsMap from "../components/shared/chefsMap"
import styled from "styled-components"

const chefsPage = () => {
  return (
    <Layout>
      <MainWrapper>
        <h1>Choose your chef</h1>
        <ChefsMap />
      </MainWrapper>
    </Layout>
  )
}

export default chefsPage

const MainWrapper = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }
`
