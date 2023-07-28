/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `beatx`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        // "gatsby-plugin-google-gtag",
        // "gatsby-plugin-sitemap",
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        }]
};
