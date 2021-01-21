import { useState } from "react"
import SingleDateInput from "../components/singleDatePicker"
import DateRangeInput from "../components/dateRangePicker"
import styled from "styled-components"
import { black, white } from "../components/colors"
import { GlobalStyle } from "../pages/_app"
import { Button, ChefsTitle } from "../components/styles"
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
        <ChefsTitle>Book your chef</ChefsTitle>
        <GlobalStyle />
        <WrapperClickedDay>
          <CheckboxWrapper>
            <input type="radio" name="checkBox" value="oneDay" id="radio1" onClick={handleOneDay} />
            <label>One day</label>
            {onClickedOneDay && <SingleDateInput />}
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input
              type="radio"
              name="checkBox"
              value="oneWeek"
              id="radio2"
              onClick={handleOneWeek}
            />
            <label>One week</label>
            {onClickedOneWeek && <DateRangeInput />}
          </CheckboxWrapper>
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
const WrapperButton = styled.div`
  margin-top: 380px;
`
const CheckboxWrapper = styled.div`
  margin: 5px;
`
