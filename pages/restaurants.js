import React from "react"
import RestaurantsMap from "../components/shared/restaurantsMap"
import Layout from "../components/layout"
const restaurants = () => {
  return (
    <Layout>
      <div>
        <RestaurantsMap />
      </div>
    </Layout>
  )
}

export default restaurants
