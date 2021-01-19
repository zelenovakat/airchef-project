// import styled from "styled-components"

// import Head from "next/head"

// import Link from "next/link"
import Layout from "../components/layout"
import FirstPage from "./firstPage"

const Home = () => {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }
  return (
    <Layout>
      <FirstPage />
    </Layout>
  )
}
export default Home
