import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { black, white } from "../colors"
const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleOnOpen = () => {
    setIsVisible(true)
    document.body.classList.add("nav-open")
  }

  const handleOnClose = () => {
    setIsVisible(false)
    document.body.classList.remove("nav-open")
  }

  return (
    <MainDiv>
      <StyledButton onClick={handleOnOpen}>
        <FontAwesomeIcon icon={faBars} />
      </StyledButton>
      <>
        {isVisible && (
          <BodyDiv>
            <StyledButton onClick={handleOnClose}>
              <FontAwesomeIcon icon={faTimes} />
            </StyledButton>
            <ul>
              <li>
                <MenuLink href="/chefsPage">Chefs</MenuLink>
              </li>

              <li>
                <MenuLink href="/chefsPage">FAQ</MenuLink>
              </li>
              <li>
                <MenuLink href="/restaurantsPage">!!!</MenuLink>
              </li>
            </ul>
          </BodyDiv>
        )}
      </>
    </MainDiv>
  )
}
export default MobileMenu

const MenuLink = styled.a`
  display: flex;
  color: #ffffff;
  align-self: center;
  margin-top: 30px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const MainDiv = styled.div`
  display: flex;
`
const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow-y: hidden;
  background-color: ${black};
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
`
const StyledButton = styled.button`
  margin: 5px;
  display: flex;
  justify-content: flex-end;
  border: none;
  background: transparent;
  svg {
    font-size: 20px;
    color: ${white};
  }
`
