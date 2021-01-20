import foodPic3 from "../components/shared/images/foodPic3.jpg"
import styled from "styled-components"
import Layout from "../components/layout"
import ButtonDate from "../components/selectDateRange"
import { black } from "../components/colors"
import { mediaXs } from "../components/screen"

const firstPage = () => {
  return (
    <Layout>
      <MainWrapper>
        <Wrapper>
          <DateWrapper>
            <ButtonDate />
          </DateWrapper>
          <ImgWrapper>
            <img src={foodPic3} />
          </ImgWrapper>
        </Wrapper>
      </MainWrapper>
    </Layout>
  )
}

export default firstPage
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${mediaXs} {
    flex-direction: column;
  }
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  img {
    min-width: 500px;
    max-height: 500px;
    ${mediaXs} {
      min-width: 300px;
      max-height: 300px;
    }
  }
`

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  /* background-color: ${white}; */
`
const MainWrapper = styled.div`
  background-color: ${black};
  min-height: 700px;
`
