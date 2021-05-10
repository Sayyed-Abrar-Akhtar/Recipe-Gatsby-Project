import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const pathToImage = getImage(image)
        return (
          <Link key={id} to={`/node_modules${title}`}>
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | cook: {cookTime}min
            </p>
            <p>Total: {Number(prepTime) + Number(cookTime)}min</p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
