import { Chefs } from "./chefs"
import styled from "styled-components"
import { grey } from "../colors"
import Link from "next/link"

const ChefsMap = () => {
  const mappedChefs = Chefs.map((chef) => {
    return (
      <MainDiv key={chef.id}>
        <Link href={chef.link}>
          <MainLink>
            <Image src={chef.profileImg} alt="A Chef in your kitchen" />
            <div>
              <h3>{chef.name}</h3>
              <p>{chef.titleRestaurant}</p>
              <p>{chef.titleFood}</p>
            </div>
          </MainLink>
        </Link>
      </MainDiv>
    )
  })

  return <MappedDiv>{mappedChefs}</MappedDiv>
}

export default ChefsMap

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
