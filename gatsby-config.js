module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-48930470-1'
      }
    }
  ]
};
