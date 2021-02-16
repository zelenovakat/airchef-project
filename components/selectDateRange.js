import { useState } from "react"
import SinglDateRangePicker from "../components/singleDatePicker"
import DateRangePicker from "../components/dateRangePicker"
import styled from "styled-components"
import { black, white } from "../components/colors"
import { GlobalStyle } from "../pages/_app"
import { Button, ChefsTitle } from "../components/styles"
import { mediaXs } from "../components/screen"

const BattonDate = () => {
  const [onClickedDay, setClickedDay] = useState(false)
  const [onClickedWeek, setClickedWeek] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const handleClickDay = () => {
    setClickedDay(!onClickedDay)
    setIsShow(isShow === true)
  }

  const handleClickWeek = () => {
    setClickedWeek(!onClickedWeek)
    setIsShow(isShow === false)
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
<<<<<<< HEAD
              id="radioFirst"
              onChange={handleOneDay}
=======
              id="radio1"
              onClick={handleClickDay}
>>>>>>> some changes to the calendar view
            />
            <label>One day</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input
              type="radio"
              name="checkBox"
              value="oneWeek"
<<<<<<< HEAD
              id="radioSecond"
              onChange={handleOneWeek}
=======
              id="radio2"
<<<<<<< HEAD
              onClick={handleOneDay}
>>>>>>> working calendar
=======
              onClick={handleClickWeek}
>>>>>>> some changes to the calendar view
            />
            <label>One week</label>
          </CheckboxWrapper>
        </WrapperClickedDay>
        {isShow ? (
          <CalendarWrapper>
            <DateRangePicker />
          </CalendarWrapper>
        ) : (
          <CalendarWrapperWeek>
            <SinglDateRangePicker />
          </CalendarWrapperWeek>
        )}
      </Wrapper>
      <Button>FIND A CHEF</Button>
    </MainWrapper>
  )
}

export default BattonDate
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
