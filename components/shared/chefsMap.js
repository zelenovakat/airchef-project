import { Chefs } from "./chefs"
import styled from "styled-components"
import { grey } from "../colors"
import Link from "next/link"

const ChefsMap = () => {
  const mappedChefs = Chefs.map((typesOfName, i) => {
    return (
      <MainDiv key={i}>
        <MainLink href={typesOfName.link}>
          <a>
            <img src={typesOfName.profileImg} alt="" />
            <div>
              <h3>{typesOfName.name}</h3>
              <p>{typesOfName.titleRestaurant}</p>
              <p>{typesOfName.titleFood}</p>
            </div>
          </a>
        </MainLink>
      </MainDiv>
    )
  })

  return <MappedDiv>{mappedChefs}</MappedDiv>
}

export default ChefsMap

const MainLink = styled(Link)`
  a {
    text-decoration: none;
  }
`

const MainDiv = styled.div`
  border-radius: 10px;
  box-shadow: ${grey} 0.2em 0.3em 0.3em 0.3em;
  margin-bottom: 30px;
  img {
    width: 315px;
    height: 315px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
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
