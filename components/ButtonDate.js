import { useState } from "react"
import SingleDateRangePicker from "./SingleDateRangePicker"
import DateRangePicker from "./DateRangePicker"
import styled from "styled-components"
import { black, white } from "./colors"
import { GlobalStyle } from "../pages/_app"
import { Button, ChefsTitle } from "./styles"
import { mediaXs } from "./screen"

const ButtonDate = (props) => {
  const title = props.title
  const button = props.button
  const priceOfWeek = props.priceOfWeek
  const priceOfDay = props.priceOfDay

  const [showSingleDayCalendar, setSingleDayCalendar] = useState(false)
  const handleClickSingleDayCalendar = () => {
    setSingleDayCalendar(true)
  }
  const handleClickWeek = () => {
    setSingleDayCalendar(false)
  }

  return (
    <MainWrapper>
      <Wrapper>
        <ChefsTitle>{title}</ChefsTitle>
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
            <ForLable>
              <label htmlFor="radio1">One day</label>
              <label htmlFor="radio1">{priceOfDay}</label>
            </ForLable>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input
              type="radio"
              name="checkBox"
              value="oneWeek"
              id="radio2"
              onClick={handleClickWeek}
            />
            <ForLable>
              <label htmlFor="radio2">One week</label>
              <label htmlFor="radio2">{priceOfWeek}</label>
            </ForLable>
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
      <Button>{button}</Button>
    </MainWrapper>
  )
}

export default ButtonDate
const CalendarWrapper = styled.div`
  margin: 10px;
  position: absolute;
  top: 100px;
`
const CalendarWrapperWeek = styled.div`
  margin: 10px;
  position: absolute;
  top: 100px;
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
  display: flex;
`
const ForLable = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`
