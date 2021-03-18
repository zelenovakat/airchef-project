import { useRouter } from "next/router"
import { ChefsInfo } from "../../components/chefsInfo"
import BookChef from "../../components/bookChef"
import Layout from "../../components/layout"
import { DescriptionWrapper } from "../../components/styles"
import { Image } from "../../components/styles"
import { SectionLeft } from "../../components/styles"
import { SectionCenter } from "../../components/styles"
import { MainConteiner } from "../../components/styles"
import { ImageFood } from "../../components/styles"
import { SectionRight } from "../../components/styles"
import { ChefsTitle } from "../../components/styles"

const ChefId = () => {
  const router = useRouter()
  const { chefId } = router.query
  if (!chefId) {
    return null
  }
  const chef = ChefsInfo.find((singleChef) => singleChef.id === chefId)
  return (
    <Layout>
      <MainConteiner key={chef.id}>
        <SectionLeft>
          <Image src={chef.profileImg} alt="" />
          <DescriptionWrapper>
            <ChefsTitle>
              {chef.name} from {chef.titleRestaurant}
            </ChefsTitle>
            <p>
              {chef.address} <br /> {chef.ind}
            </p>
            <h2>About {chef.name}</h2>
            <p>{chef.description}</p>
          </DescriptionWrapper>
        </SectionLeft>
        <SectionCenter>
          <ImageFood src={chef.picFoodOne} alt="" />
          <ImageFood src={chef.picFoodTwo} alt="" />
          <ImageFood src={chef.picFoodThree} alt="" />
          <ImageFood src={chef.picFoodFour} alt="" />
        </SectionCenter>
        <SectionRight>
          <h2>Book {chef.name} now</h2>
          <BookChef />
        </SectionRight>
      </MainConteiner>
    </Layout>
  )
}
export default ChefId
