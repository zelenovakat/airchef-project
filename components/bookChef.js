import { useState } from "react"
import SingleDateInput from "./singleDatePicker"
import DateRangeInput from "./dateRangePicker"
import styled from "styled-components"
import { GlobalStyle } from "../pages/_app"
import { Button } from "./styles"
import { mediaXs } from "./screen"

const BookChef = () => {
  const [onClickedOneDay, setClickedOneDay] = useState(true)
  const [onClickedOneWeek, setClickedOneWeek] = useState(true)

  const handleOneDay = () => {
    setClickedOneDay(onClickedOneDay)
  }
  const handleOneWeek = () => {
    setClickedOneWeek(onClickedOneWeek)
  }

  return (
    <MainWrapper>
      <Wrapper>
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
            <br />
            <PriceWrapper>85 EUR</PriceWrapper>
            {onClickedOneDay && <SingleDateInput />}
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
            <br />
            <PriceWrapper>200 EUR</PriceWrapper>
            {onClickedOneWeek && <DateRangeInput />}
          </CheckboxWrapper>
        </WrapperClickedDay>
        <Button>Book a Chef</Button>
      </Wrapper>
    </MainWrapper>
  )
}

export default BookChef

const Wrapper = styled.div`
  margin: 10px;
`
const WrapperClickedDay = styled.div`
  display: flex;
  ${mediaXs} {
    justify-content: center;
  }
`
const MainWrapper = styled.div`
  margin: 10px 5px;
  ${mediaXs} {
    width: 100%;
    margin: 0px;
  }
`

const CheckboxWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
const PriceWrapper = styled.label`
  margin-left: 22px;
`
