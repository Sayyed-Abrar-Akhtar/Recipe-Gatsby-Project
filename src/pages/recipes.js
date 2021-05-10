import React from "react"
import AllRecipes from "../components/AllRecipes"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Recipes = () => {
  return (
    <Layout>
      <Seo title="Recipes" description="Hot and spicy recipes for the day" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
