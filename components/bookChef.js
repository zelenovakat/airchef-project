import { useState } from "react"
import SinglDateRangePicker from "../components/SinglDateRangePicker"
import DateRangePicker from "./DateRangePicker"
import styled from "styled-components"
import { GlobalStyle } from "../pages/_app"

import { mediaXs } from "./screen"
import { black, white, grey, green } from "../components/colors"
import { Button } from "../components/styles"

const BookChef = () => {
  const [showSingleDayCalendar, setSingleDayCalendar] = useState(false)

  const handleClickSingleDayCalendar = () => {
    setSingleDayCalendar(showSingleDayCalendar === true)
  }

  const handleClickWeek = () => {
    setSingleDayCalendar(showSingleDayCalendar === false)
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
              id="radio1"
              onClick={handleClickSingleDayCalendar}
            />
            <div>
              <label>One day</label>
              <br />
              <PriceWrapper>85 EUR</PriceWrapper>
            </div>
          </CheckboxWrapper>

          <CheckboxWrapper>
            <input
              type="radio"
              name="checkBox"
              value="oneWeek"
              id="radio2"
              onClick={handleClickWeek}
            />
            <div>
              <label>One week</label>
              <br />
              <PriceWrapper>200 EUR</PriceWrapper>
            </div>
          </CheckboxWrapper>
        </WrapperClickedDay>
        {showSingleDayCalendar ? (
          <CalendarWrapper>
            <SinglDateRangePicker />
          </CalendarWrapper>
        ) : (
          <CalendarWrapperWeek>
            <DateRangePicker />
          </CalendarWrapperWeek>
        )}
      </Wrapper>
      <Button>BOOK CHEF</Button>
    </MainWrapper>
  )
}

export default BookChef

const CalendarWrapper = styled.div`
  margin-top: 20px;
`
const CalendarWrapperWeek = styled.div`
  margin-top: 20px;
  position: absolute;
  top: 75px;
`
const Wrapper = styled.div`
  margin: 15px;
  height: 505px;
  h1 {
    justify-content: left;
    margin: 10px;
  }
`
const WrapperClickedDay = styled.div`
  display: flex;
  justify-content: space-around;
  label {
    color: ${black};
    margin: 5px;
  }
  ${mediaXs} {
    justify-content: left;
  }
`
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: 480px;
  ${mediaXs} {
    border-radius: 0px;
  }
`

const CheckboxWrapper = styled.div`
  border: 2px solid ${grey};
  padding: 10px;
  display: flex;
  place-items: center;
  &:hover {
    cursor: pointer;
    border-color: ${green};
  }
  ${mediaXs} {
    margin-right: 10px;
  }
`
const PriceWrapper = styled.label`
  margin-left: 22px;
`
