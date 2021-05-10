import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"

/* rendering recipe using GATSBY NODE ==> {ContentfulRecipe.title}.js */
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
    <main className="page">
      <div className="recipe-page">
        <h2>{title}</h2>
      </div>
    </main>
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
