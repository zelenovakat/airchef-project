import { createGlobalStyle, ThemeProvider } from "styled-components"
import { mediaXs } from "../components/screen"
export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
.CalendarDay__selected_span {
  background: #82e0aa;
  color: white;
}
.DateInput.DateInput_1{
  width:100px;
}
.DateRangePicker_picker__directionLeft_2{
  left:-105px !important;
  ${mediaXs} {
  left:-110px !important}
}
.SingleDatePicker_picker_1{
  left: 5px !important;
  ${mediaXs} {
  left:-10px !important}
}

}


`

const theme = {
  colors: {
    primary: "#0df064",
  },
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default App
