import React from "react"
import BookChef from "../components/bookChef"
import Layout from "../components/layout"
import vinceFleming from "../components/shared/images/vinceFleming.jpg"
import foodPic from "../components/shared/images/foodPic.jpg"
import foodPic2 from "../components/shared/images/foodPic2.jpg"
import foodPic3 from "../components/shared/images/foodPic3.jpg"
import mario from "../components/shared/images/mario.jpg"
import { DescriptionWrapper } from "../components/styles"
import { Image } from "../components/styles"
import { SectionLeft } from "../components/styles"
import { SectionCenter } from "../components/styles"
import { MainConteiner } from "../components/styles"
import { ImageFood } from "../components/styles"
import { SectionRight } from "../components/styles"
const VinceFleming = () => {
  return (
    <Layout>
      <MainConteiner>
        <SectionLeft>
          <Image src={vinceFleming} alt="" />
          <DescriptionWrapper>
            <h1>Vince Fleming from Planet beat</h1>
            <p>
              Calle Ramòn Gòmez de la Serna, 23 <br /> 29600 Marbella
            </p>
            <h2>About Vince Fleming</h2>
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
          <ImageFood src={mario} alt="" />
        </SectionCenter>
        <SectionRight>
          <h2>Book Vince Fleming now</h2>
          <BookChef />
        </SectionRight>
      </MainConteiner>
    </Layout>
  )
}

export default VinceFleming
