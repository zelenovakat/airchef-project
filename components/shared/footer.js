import React from "react"
import styled from "styled-components"
import { black, white } from "../colors"

const Footer = () => {
  return (
    <Wrapper>
      <ChefsTitle>Footer</ChefsTitle>
    </Wrapper>
  )
}

export default Footer
const Wrapper = styled.div`
  margin: 0;
  background-color: ${black};
`
const ChefsTitle = styled.h1`
  color: ${white};
`
