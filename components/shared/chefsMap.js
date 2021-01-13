import { Chefs } from "./chefs"
import styled from "styled-components"

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

  return (
    <>
      <MappedDiv>{mappedChefs}</MappedDiv>
    </>
  )
}

export default ChefsMap

const MainDiv = styled.div`
  img {
    width: 300px;
    height: 300px;
    position: relative;
    margin-bottom: 0;
    overflow: hidden;
    object-fit: cover;
  }
`
const MappedDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
