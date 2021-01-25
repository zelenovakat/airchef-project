import { Component } from "react"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import { DateRangePicker } from "react-dates"
import styled from "styled-components"

class DateRangeInput extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }

  onFocusChange = (focusedInput) => {
    if (!focusedInput) {
      return
    }
    this.setState({ focusedInput })
  }

  render() {
    return (
      <MainWrapper>
        <DateRangePicker
          transitionDuration={0}
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          numberOfMonths={1}
          noBorder={true}
          small={true}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate })
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => {
            this.setState({ focusedInput })
          }}
        />
      </MainWrapper>
    )
  }
}

export default DateRangeInput

const MainWrapper = styled.div``
