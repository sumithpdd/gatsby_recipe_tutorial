/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Sumith's gatsby recipes site",
    author: "@sumithpdd",
    person: { name: "sumith", age: 42 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "sumith", age: 42 },
      { name: "susan", age: 21 },
    ],
  },
  plugins: [`gatsby-plugin-styled-components`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`],
}
