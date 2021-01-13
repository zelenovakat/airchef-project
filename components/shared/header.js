import styled from "styled-components"
import { black, white } from "../colors"
import { mediaSmall, mediaXs } from "../screen"
import MobileMenu from "./mobileMenu"
import Link from "next/link"

const Header = () => {
  return (
    <MainDiv>
      <MenuWrapper>
        <Menu>
          <li>
            <Link href="/chefsPage">
              <MenuLink>Chefs</MenuLink>
            </Link>
          </li>
          <li>
            <Link href="/">
              <MenuLink>FAQ</MenuLink>
            </Link>
          </li>
          <li>
            <Link href="/">
              <MenuLink>!!!</MenuLink>
            </Link>
          </li>
        </Menu>
      </MenuWrapper>
      <Logo>
        <li>
          <Link href="/">
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
`
const MenuWrapper = styled.div`
  display: flex;
`

const LogoLink = styled(Link)`
  a {
    margin: 0;
    font-size: 20px;
    text-decoration: none;
    color: ${white};
  }
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
`
const MenuLink = styled(Link)`
  a {
    padding: 16px;
    font-size: 15px;
    text-decoration: none;
    color: ${white};
    &:hover {
      cursor: pointer;
      color: #878787;
    }
  }
`
