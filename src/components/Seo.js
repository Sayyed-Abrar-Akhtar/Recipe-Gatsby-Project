import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle, siteDesc } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description || siteDesc} />
    </Helmet>
  )
}

export default Seo
