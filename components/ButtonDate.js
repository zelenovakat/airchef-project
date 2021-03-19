import { useState } from "react"
import SingleDateRangePicker from "./SingleDateRangePicker"
import DateRangePicker from "./DateRangePicker"
import styled from "styled-components"
import { black, white } from "./colors"
import { GlobalStyle } from "../pages/_app"
import { Button, ChefsTitle } from "./styles"
import { mediaXs } from "./screen"

const ButtonDate = (props) => {
  console.log("MY PRICE ==========>", props.price)
  const [showSingleDayCalendar, setSingleDayCalendar] = useState(false)
  const handleClickSingleDayCalendar = () => {
    setSingleDayCalendar(true)
  }
  const handleClickWeek = () => {
    setSingleDayCalendar(false)
  }
  // {
  //   props.price.map((item) => {
  //     return (
  //       <>
  //         <label>{item.oneDay}</label>
  //         <label>{item.oneWeek}</label>
  //       </>
  //     )
  //   })
  // }

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
              id="radio1"
              onClick={handleClickSingleDayCalendar}
            />
            <label>One day</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input
              type="radio"
              name="checkBox"
              value="oneWeek"
              id="radio2"
              onClick={handleClickWeek}
            />
            <label>One week</label>
          </CheckboxWrapper>
        </WrapperClickedDay>
        {showSingleDayCalendar ? (
          <CalendarWrapperWeek>
            <SingleDateRangePicker />
          </CalendarWrapperWeek>
        ) : (
          <CalendarWrapper>
            <DateRangePicker />
          </CalendarWrapper>
        )}
      </Wrapper>
      <Button>FIND A CHEF</Button>
    </MainWrapper>
  )
}

export default ButtonDate
const CalendarWrapper = styled.div`
  margin: 10px;
`
const CalendarWrapperWeek = styled.div`
  margin: 10px;
  position: absolute;
  top: 106px;
`

const Wrapper = styled.div`
  margin: 20px;
  h1 {
    justify-content: left;
    margin: 10px;
  }
  ${mediaXs} {
    height: 470px;
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
  height: 505px;
  display: flex;
  flex-direction: column;
  background-color: ${white};
  width: 380px;
  border-radius: 15px;
  position: relative;
  ${mediaXs} {
    border-radius: 0px;
  }
`

const CheckboxWrapper = styled.div`
  margin: 5px;
`
