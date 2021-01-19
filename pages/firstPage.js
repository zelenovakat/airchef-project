import foodPic3 from "../components/shared/images/foodPic3.jpg"
import styled from "styled-components"
import Layout from "../components/layout"
import ButtonDate from "../components/selectDateRange"

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
    max-width: 500px;
    max-height: 500px;
  }
`

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`
const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: black;
`
