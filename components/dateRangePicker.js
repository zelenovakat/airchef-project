import { Component } from "react"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import { DayPickerRangeController } from "react-dates"

class DateRangePicker extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: "startDate",
  }

  handleDateChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate })
  }

  handleFocusChange = (focusedInput) => {
    this.setState({ focusedInput: focusedInput || "startDate" })
  }

  dayClick = (date) => {
    console.log(date)
  }

  render() {
    return (
      <form>
        <DayPickerRangeController
          onDatesChange={this.handleDateChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.handleFocusChange}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          minimumNights={1}
        />
      </form>
    )
  }
}

export default DateRangePicker
