import { useState } from "react"
import SinglDateRangePicker from "../components/singleDatePicker"
import DateRangePicker from "../components/dateRangePicker"
import styled from "styled-components"
import { GlobalStyle } from "../pages/_app"

import { mediaXs } from "./screen"
import { black, white } from "../components/colors"
import { Button } from "../components/styles"

const BookChef = () => {
  const [onClickedOneDay, setClickedOneDay] = useState(false)
  const handleOneDay = () => {
    setClickedOneDay(!onClickedOneDay)
  }

  return (
    <MainWrapper>
      <Wrapper>
        <GlobalStyle />
        <WrapperClickedDay>
          <CheckboxWrapper>
            <input type="radio" name="checkBox" value="oneDay" id="radio1" onClick={handleOneDay} />
            <label>One day</label>
            <br />
            <PriceWrapper>85 EUR</PriceWrapper>
          </CheckboxWrapper>

          <CheckboxWrapper>
            <input
              type="radio"
              name="checkBox"
              value="oneWeek"
              id="radio2"
              onClick={handleOneDay}
            />
            <label>One week</label>
            <br />
            <PriceWrapper>200 EUR</PriceWrapper>
          </CheckboxWrapper>
        </WrapperClickedDay>
        {onClickedOneDay ? (
          <CalendarWrapper>
            <SinglDateRangePicker />
          </CalendarWrapper>
        ) : (
          <CalendarWrapperWeek>
            <DateRangePicker />
          </CalendarWrapperWeek>
        )}
      </Wrapper>
      <Button>Find a Chef</Button>
    </MainWrapper>
  )
}

export default BookChef
const CalendarWrapper = styled.div``
const CalendarWrapperWeek = styled.div`
  position: absolute;
  top: 106px;
`

// left: 75px;
//     bottom: 75px;

const Wrapper = styled.div`
  margin: 15px;
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
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: 585px;
  ${mediaXs} {
    border-radius: 0px;
  }
`

const CheckboxWrapper = styled.div`
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`
const PriceWrapper = styled.label`
  margin-left: 22px;
`
