const author = 'Tim Seckinger';

module.exports = {
  pathPrefix: '/cv',
  siteMetadata: {
    author,
    dateOfBirth: '1997-09-06',

    email: 'seckinger.tim@gmail.com',
    github: `jeysal`,
    twitter: `_jeysal_`,

    title: `${author}'s resume`,
    description: `${author}'s resume`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cv`,
        short_name: `cv`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
