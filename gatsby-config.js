module.exports = {
  siteMetadata: {
    title: `HsOXO`,
    description: `Hs Person site.`,
    author: `@Hs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-antd`,
    'gatsby-plugin-svgr',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HsOXO`,
        short_name: `Hs`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/avatar.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "server",
        analyzerPort: "8011",
        defaultSizes: "gzip"
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
