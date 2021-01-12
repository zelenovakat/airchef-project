import React from "react"
import styled from "styled-components"
import { black, white } from "../colors"

const Footer = () => {
  return (
    <Wrapper>
      <h1>Footer</h1>
    </Wrapper>
  )
}

export default Footer
const Wrapper = styled.div`
  margin: 0;
  background-color: ${black};
  h1 {
    color: ${white};
  }
`
