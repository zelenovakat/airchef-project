import { green, white, grey } from "./colors"
import styled from "styled-components"
import { mediaXs } from "../components/screen"

export const Button = styled.button`
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
export const ChefsTitle = styled.h1`
  display: flex;
  justify-content: left;
  margin-bottom: 0;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  h2 {
    margin-bottom: 0;
  }
  ${mediaXs} {
    min-width: 300px;
    margin: 15px;
  }
`
export const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  margin: 5px;
  height: 653px;
  ${mediaXs} {
    width: 100%;
    margin: 0;
  }
`
export const SectionLeft = styled.div`
  width: 30%;
  margin: 5px;
  ${mediaXs} {
    width: 100%;
    margin: 0px;
  }
`
export const SectionCenter = styled.div`
  width: 30%;
  margin: 5px;
  height: 100%;
  ${mediaXs} {
    width: 100%;
    display: flex;
    margin: 0px;
  }
`
export const MainConteiner = styled.div`
  display: flex;
  justify-content: center;
  ${mediaXs} {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const ImageFood = styled.img`
  width: 205px;
  height: 320px;
  overflow: hidden;
  object-fit: cover;
  margin: 5px;
`
export const SectionRight = styled.div`
  width: 27%;
  border-radius: 5px;
  box-shadow: ${grey} 2px 3px 3px 3px;
  margin: 10px 5px;
  height: 653px;
  ${mediaXs} {
    width: 100%;
    box-shadow: none;
    margin: 0px;
  }
  h2 {
    margin: 20px 15px 0px 15px;
  }
`
