import styled from "styled-components"
import { grey } from "../components/colors"
import Link from "next/link"
import { ChefsInfo } from "../components/chefsInfo"
import Layout from "../components/layout"

const ChefsPage = () => {
  const mappedChefs = ChefsInfo.map((chef) => {
    return (
      <MainDiv key={`chef-${chef.id}`}>
        <Link href="/chefs/[chefId].js" as={`/chefs/${chef.id}`}>
          <MainLink>
            <Image src={chef.profileImg} alt="A Chef in your kitchen" />
            <div>
              <h3>{chef.name}</h3>
              <p>Restaurant: {chef.titleRestaurant}</p>
              <p>{chef.titleFood}</p>
            </div>
          </MainLink>
        </Link>
      </MainDiv>
    )
  })

  return (
    <Layout>
      <div>
        <ChefsTitle>Choose your chef</ChefsTitle>
        <MappedDiv> {mappedChefs} </MappedDiv>
      </div>
    </Layout>
  )
}

export default ChefsPage

const ChefsTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`

const MainLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  div {
    margin: 10px;
  }
`
const Image = styled.img`
  width: 315px;
  height: 315px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`

const MainDiv = styled.div`
  border-radius: 10px;
  box-shadow: ${grey} 2px 3px 3px 3px;
  margin-bottom: 30px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h3,
  p {
    margin: 0;
  }
`
const MappedDiv = styled.div`
  margin: 30px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
