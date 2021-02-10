import { useState } from "react"
import SinglDateRangePicker from "../components/singleDatePicker"
import DateRangePicker from "../components/dateRangePicker"
import styled from "styled-components"
import { black, white } from "../components/colors"
import { GlobalStyle } from "../pages/_app"
import { Button, ChefsTitle } from "../components/styles"
import { mediaXs } from "../components/screen"

const BattonDate = () => {
  const [onClickedOneDay, setClickedOneDay] = useState(true)
  const [onClickedOneWeek, setClickedOneWeek] = useState(false)

  const handleOneDay = () => {
    setClickedOneDay(!onClickedOneDay)
  }
  const handleOneWeek = () => {
    setClickedOneWeek(!onClickedOneWeek)
  }

  return (
    <MainWrapper>
      <Wrapper>
        <ChefsTitle>Book your chef</ChefsTitle>
        <GlobalStyle />
        <WrapperClickedDay>
          <CheckboxWrapper>
            <input
              type="radio"
              name="checkBox"
              value="oneDay"
              id="radioFirst"
              onChange={handleOneDay}
            />
            <label>One day</label>
            {onClickedOneDay && <SinglDateRangePicker />}
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input
              type="radio"
              name="checkBox"
              value="oneWeek"
              id="radioSecond"
              onChange={handleOneWeek}
            />
            <label>One week</label>
            {onClickedOneWeek && <DateRangePicker />}
          </CheckboxWrapper>
        </WrapperClickedDay>

        <Button>Find a Chef</Button>
      </Wrapper>
    </MainWrapper>
  )
}

export default BattonDate

const Wrapper = styled.div`
  margin: 20px;
  h1 {
    justify-content: left;
    margin: 10px;
  }
`
const WrapperClickedDay = styled.div`
  display: flex;
  label {
    color: ${black};
    margin: 5px;
  }
`
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  width: 380px;
  border-radius: 15px;
  ${mediaXs} {
    border-radius: 0px;
  }
`

const CheckboxWrapper = styled.div`
  margin: 5px;
`
