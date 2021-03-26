import styled from "styled-components"
import { black, white } from "../colors"
import { mediaXs } from "../screen"
import MobileMenu from "./MobileMenu"
import Link from "next/link"

const Header = () => {
  return (
    <MainDiv>
      <MenuWrapper>
        <Menu>
          <li>
            <Link href="/chefs">
              <MenuLink>Chefs</MenuLink>
            </Link>
          </li>
          <li>
            <Link href="/">
              <MenuLink>FAQ</MenuLink>
            </Link>
          </li>
          <li>
            <Link href="/restaurants">
              <MenuLink>!!!</MenuLink>
            </Link>
          </li>
        </Menu>
      </MenuWrapper>
      <Logo>
        <li>
          <Link href="/main">
            <LogoLink>Airchef</LogoLink>
          </Link>
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
  display: none;
  ${mediaXs} {
    display: flex;
  }
`

const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  align-items: center;
`
const MenuWrapper = styled.div`
  display: flex;
`

const LogoLink = styled.a`
  margin: 0;
  font-size: 20px;
  text-decoration: none;
  color: ${white};
  &:hover {
    cursor: pointer;
  }
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  background-color: ${black};
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  ${mediaXs} {
    display: none;
  }
`
const MenuLink = styled.a`
  padding: 16px;
  font-size: 15px;
  text-decoration: none;
  color: ${white};
  &:hover {
    cursor: pointer;
  }
`
