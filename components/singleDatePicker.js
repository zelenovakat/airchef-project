import { Component } from "react"
import "react-dates/initialize"
import styled from "styled-components"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"

class SingleDateInput extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }

  render() {
    return (
      <MainWrapper>
        <SingleDatePicker
          date={this.state.date}
          onDateChange={(date) => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          isRequired
          numberOfMonths={1}
          noBorder={true}
        />
      </MainWrapper>
    )
  }
}

export default SingleDateInput
const MainWrapper = styled.div``
