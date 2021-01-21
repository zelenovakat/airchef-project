import { Component } from "react"
import "react-dates/initialize"
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
      <div>
        <SingleDatePicker
          date={this.state.date}
          onDateChange={(date) => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          numberOfMonths={1}
          noBorder={true}
          small="true"
        />
      </div>
    )
  }
}

export default SingleDateInput

// onFocusChange(focusedInput) {
//   if (!focusedInput) return;
//   this.setState({ focusedInput });
// }
