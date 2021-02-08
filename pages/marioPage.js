import React from "react"
import BookChef from "../components/bookChef"
import Layout from "../components/layout"
import mario from "../components/shared/images/mario.jpg"
import restaurantDish2 from "../components/shared/images/restaurantDish2.jpg"
import foodPic from "../components/shared/images/foodPic.jpg"
import foodPic2 from "../components/shared/images/foodPic2.jpg"
import foodPic3 from "../components/shared/images/foodPic3.jpg"
import { ChefsTitle } from "../components/styles"
import { DescriptionWrapper } from "../components/styles"
import { Image } from "../components/styles"
import { SectionLeft } from "../components/styles"
import { SectionCenter } from "../components/styles"
import { MainConteiner } from "../components/styles"
import { ImageFood } from "../components/styles"
import { SectionRight } from "../components/styles"
const MarioPage = () => {
  return (
    <Layout>
      <MainConteiner>
        <SectionLeft>
          <Image src={mario} alt="" />
          <DescriptionWrapper>
            <ChefsTitle>Mario from Planet beat</ChefsTitle>
            <p>
              Calle Ramòn Gòmez de la Serna, 23 <br /> 29600 Marbella
            </p>
            <h2>About Mario</h2>
            <p>
              some description,some description,some description,some description,some
              description,some description,some description,some description,some description,some
              description,some description,some description,some description,some description,some
              description,some description,some description,some description,some description,some
              description,some description,some description,some description,some description,some
              description,some description,some description,some description,some description,some
              description
            </p>
          </DescriptionWrapper>
        </SectionLeft>

        <SectionCenter>
          <ImageFood src={foodPic} alt="" />
          <ImageFood src={foodPic2} alt="" />
          <ImageFood src={foodPic3} alt="" />
          <ImageFood src={restaurantDish2} alt="" />
        </SectionCenter>
        <SectionRight>
          <h2>Book Mario now</h2>
          <BookChef />
        </SectionRight>
      </MainConteiner>
    </Layout>
  )
}

export default MarioPage
