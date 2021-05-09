import React from "react"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

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
              <h1>Recipes Hot</h1>
              <h4>All about hot and spicy food</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}

export default index
