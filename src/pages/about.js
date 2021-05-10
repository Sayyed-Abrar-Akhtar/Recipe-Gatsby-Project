import React from "react"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>All about Hot & Spicy Foods &#127869; </h2>
            <p>
              How lucky we are today – all delicious food is easily available to
              us! Sometimes, I wonder how life was in the ancient past when our
              ancestors did not have easy access to food which we have today.
            </p>
            <p>
              Want to try out the Chinese food? No need to go to China! Just
              visit any restaurant in the city and get familiar with these hot
              and salty tastes.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>
            Hot and Spicy <span className="entity-pepper">&#127798;</span>
          </h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
