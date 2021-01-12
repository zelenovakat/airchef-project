import styled from "styled-components"
import { mediaXs } from "./screen"
import Link from "next/link"

const Header = () => {
  return (
    <MainDiv>
      <Menu>
        <li>
          <MenuLink href="">Chefs</MenuLink>
        </li>
        <li>
          <MenuLink href="">FAQ</MenuLink>
        </li>
        <li>
          <MenuLink href="">!!!</MenuLink>
        </li>
        <Logo>
          <li>
            <LogoLink href="">Airchef</LogoLink>
          </li>
        </Logo>
      </Menu>
    </MainDiv>
  )
}

export default Header

const Logo = styled.div`
  display: flex;
  justify-content: center;
`

const LogoLink = styled(Link)`
  a {
    height: 100px;
    width: auto;
    margin: 0;
  }
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`
const Menu = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  margin: 0;

  ${mediaXs} {
    display: flex;
  }

  li {
    margin: 0;
  }

  a {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      color: #878787;
    }
  }
`
const MenuLink = styled(Link)`
  padding: 16px;
  color: #000000;
`
