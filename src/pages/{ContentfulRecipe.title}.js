import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

/* rendering recipe using FILE SYSTEM API ==> {ContentfulRecipe.title}.js */
const RecipeTemplate = ({ data }) => {
  const {
    title,
    description: { description },
    cookTime,
    prepTime,
    servings,
    content,
    image,
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  const { ingredients, instructions, tags, tools } = content
  return (
    <Layout>
      <Seo title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              className="about-img"
              image={pathToImage}
              alt={title}
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>{servings > 1 ? `servings` : `serving`}</h5>
                  <p>{servings} </p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags:{" "}
                {tags.map((tag, index) => {
                  return (
                    <Link to={`/${tag}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* rest of recipe details */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{instruction}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {ingredient}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {tool}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
      servings
      description {
        description
      }
      content {
        ingredients
        instructions
        tags
        tools
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
