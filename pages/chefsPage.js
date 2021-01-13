import Layout from "../components/layout"
import ChefsMap from "../components/shared/chefsMap"
import styled from "styled-components"
// import Image from "next/image"

const chefsPage = () => {
  return (
    <Layout>
      <DivWrapper>
        <h1>Choose your chef</h1>
        <ChefsMap />
      </DivWrapper>
    </Layout>
  )
}

export default chefsPage

const DivWrapper = styled.div`
  margin: 0 50px;
  h1 {
    display: flex;
    justify-content: center;
  }
`
