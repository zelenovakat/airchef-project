import Layout from "../components/layout"
import ChefsMap from "../components/shared/chefsMap"
import styled from "styled-components"

const chefsPage = () => {
  return (
    <Layout>
      <div>
        <ChefsTitle>Choose your chef</ChefsTitle>
        <ChefsMap />
      </div>
    </Layout>
  )
}

export default chefsPage

const ChefsTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`
