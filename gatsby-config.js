/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `beatx`,
    siteUrl: `TODO`,
  },
  plugins: [
    // "gatsby-plugin-google-gtag",
    // "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/playblk.png',
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
