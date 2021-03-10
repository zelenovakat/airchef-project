import React from "react"
import { Component } from "react"
import moment from "moment"
import { DayPickerSingleDateController } from "react-dates"
import "react-dates/lib/css/_datepicker.css"
import "react-dates/initialize"

class SinglDateRangePicker extends Component {
  state = {
    startDate: moment(),
    endDate: moment(),
    focusedInput: null,
    focused: null,
    date: moment(),
  }

  onDateChange = (date) => {
    this.setState({ date })
  }

  onFocusChange = () => {
    this.setState({ focused: true })
  }

  focusedInput = (focusedInput) => {
    this.setState({ focusedInput })
  }

  render() {
    const { focused, date } = this.state
    return (
      <form>
        <DayPickerSingleDateController
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
          focused={focused}
          date={date}
        />
      </form>
    )
  }
}

export default SinglDateRangePicker
