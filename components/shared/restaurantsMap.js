import { Restaurants } from "./restaurants"
import styled from "styled-components"
import { grey } from "../colors"

const RestaurantsMap = () => {
  const mappedRestaurants = Restaurants.map((restaurant) => {
    return (
      <MainDiv key={restaurant.id}>
        <div>
          <MainLink>
            <Image src={restaurant.profileImg} alt="The best restaurants in Italy" />
            <div>
              <h3>{restaurant.linkMenu}</h3>
              <p>{restaurant.name}</p>
              <p>{restaurant.titleFood}</p>
            </div>
          </MainLink>
        </div>
      </MainDiv>
    )
  })

  return <MappedDiv>{mappedRestaurants}</MappedDiv>
}

export default RestaurantsMap

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
