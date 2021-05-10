import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)

  return (
    <div>
      <div className="tag-container">
        <h4>
          Recipes<span className="entity-cutlery">&#127869;</span>
        </h4>
        <div className="tags-list">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/${text}`} key={index}>
                {text} ({value})
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TagsList
