import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { white, green } from "../components/colors"
const StyledButton = styled.button`
  background-color: ${green};
  font-size: 25px;
  color: ${white};
  border: none;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 20px;

  &:focus {
    outline: none;
  }
`
const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>

Button.propTypes = {
  lookLike: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button
