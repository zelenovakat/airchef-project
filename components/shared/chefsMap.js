import { Chefs } from "./chefs"
import styled from "styled-components"
import { grey } from "../colors"

const ChefsMap = () => {
  const mappedChefs = Chefs.map((typesOfName, i) => {
    return (
      <MainDiv key={i}>
        <img src={typesOfName.profileImg} alt="" />
        <div>
          <h3>{typesOfName.name}</h3>
          <h5>{typesOfName.title}</h5>
        </div>
      </MainDiv>
    )
  })

  return <MappedDiv>{mappedChefs}</MappedDiv>
}

export default ChefsMap

const MainDiv = styled.div`
  border-radius: 10px;
  box-shadow: ${grey} 0.2em 0.3em 0.3em 0.3em;
  margin-bottom: 30px;
  img {
    width: 315px;
    height: 315px;
    position: relative;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`
const MappedDiv = styled.div`
  margin: 30px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
