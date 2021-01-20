import { useState } from "react"
import SingleDateInput from "../components/singleDatePicker"
import DateRangeInput from "../components/dateRangePicker"
import styled from "styled-components"
import { black, white } from "../components/colors"
import { GlobalStyle } from "../pages/_app"
import { Button } from "../components/styles"
import { mediaXs } from "../components/screen"
const BattonDate = () => {
  const [onClickedOneDay, setClickedOneDay] = useState(false)
  const [onClickedOneWeek, setClickedOneWeek] = useState(false)

  const handleOneDay = () => {
    setClickedOneDay(!onClickedOneDay)
    setClickedOneWeek(onClickedOneDay)
  }
  const handleOneWeek = () => {
    setClickedOneWeek(!onClickedOneWeek)
    setClickedOneDay(onClickedOneWeek)
  }

  return (
    <MainWrapper>
      <Wrapper>
        <h1>Book your chef</h1>
        <GlobalStyle />
        <WrapperClickedDay>
          <label>
            <input type="radio" id="radio1" onClick={handleOneDay} /> One day
            {onClickedOneDay && <SingleDateInput />}
          </label>

          <label>
            <input type="radio" id="radio2" onClick={handleOneWeek} /> One week
            {onClickedOneWeek && <DateRangeInput />}
          </label>
        </WrapperClickedDay>
        <WrapperButton>
          <Button>Find a Chef</Button>
        </WrapperButton>
      </Wrapper>
    </MainWrapper>
  )
}

export default BattonDate
const Wrapper = styled.div`
  margin: 20px;
`
const WrapperClickedDay = styled.div`
  display: flex;

  label {
    color: ${black};
    margin: 5px;
  }
  ${mediaXs} {
  }
`
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  width: 380px;
  border-radius: 15px;
`
const WrapperButton = styled.div`
  margin-top: 380px;
`
