import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          name
          age
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>Site title: {title}</h1>
    </div>
  )
}

export default FetchData
