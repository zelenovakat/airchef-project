import styled from "styled-components"
import { black, white } from "../colors"
import { mediaSmall, mediaXs } from "../screen"
import MobileMenu from "./mobileMenu"

const Header = () => {
  return (
    <MainDiv>
      <MenuWrapper>
        <Menu>
          <li>
            <MenuLink href="/chefsPage">Chefs</MenuLink>
          </li>
          <li>
            <MenuLink href="">FAQ</MenuLink>
          </li>
          <li>
            <MenuLink href="">!!!</MenuLink>
          </li>
        </Menu>
      </MenuWrapper>
      <Logo>
        <li>
          <LogoLink href="/">Airchef</LogoLink>
        </li>
      </Logo>
      <MobileMenuDiv>
        <MobileMenu />
      </MobileMenuDiv>
    </MainDiv>
  )
}

export default Header

const MobileMenuDiv = styled.div`
  display: flex;
  ${mediaSmall} {
    display: none;
  }
`

const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  align-items: center;
  li {
    margin: 0;
  }
`
const MenuWrapper = styled.div`
  display: flex;
`

const LogoLink = styled.a`
  margin: 0;
  font-size: 20px;
  text-decoration: none;
  color: ${white};
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  background-color: ${black};
`
const Menu = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  ${mediaXs} {
    display: flex;
  }
  li {
    margin: 0;
  }
`
const MenuLink = styled.a`
  padding: 16px;
  font-size: 15px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: ${white};
  &:hover {
    cursor: pointer;
    color: #878787;
  }
`
