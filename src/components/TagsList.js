import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  setupTags(recipes)
  return (
    <div>
      <h4>This is tags list</h4>
    </div>
  )
}

export default TagsList
