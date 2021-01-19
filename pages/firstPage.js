import foodPic3 from "../components/shared/images/foodPic3.jpg"
import styled from "styled-components"
import Layout from "../components/layout"
import ButtonDate from "../components/selectDateRange"
import { black } from "../components/colors"

const firstPage = () => {
  return (
    <Layout>
      <MainWrapper>
        <DateWrapper>
          <ButtonDate />
        </DateWrapper>
        <ImgWrapper>
          <img src={foodPic3} />
        </ImgWrapper>
      </MainWrapper>
    </Layout>
  )
}

export default firstPage

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    min-width: 500px;
    max-height: 500px;
  }
`

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  /* background-color: ${white}; */
`
const MainWrapper = styled.div`
  min-height: 700px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${black};
`
