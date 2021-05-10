import React from "react"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"

const index = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpg"
            alt="flowers and egg"
            className="hero-img"
            layout="fullWidth"
            placeholder="tracedSVG"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Recipes Hot&#127798;</h1>
              <h4>All about hot and spicy food</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default index
