module.exports = {
  siteMetadata: {},
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-48930470-1'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts`,
      }
    },
    `gatsby-transformer-remark`,
  ]
};
