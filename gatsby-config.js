/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Recipes Hot",
    description: "Modern and clean recipe website design",
    author: "@sayyedabrar",
    person: { name: "sayyed", age: 25 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "sayyed", age: 25 },
      { name: "nisha", age: 21 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
