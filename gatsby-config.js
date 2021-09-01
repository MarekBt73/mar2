module.exports = {
  siteMetadata: {
    title: `Blog-Marka`,
    description: `Jeżeli chcesz się czegoś nauczyć powinieneś ćwiczyć - ćwiczyć i jeszcze raz ćwiczyć!`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },

   `gatsby-plugin-fontawesome-css`,
   {
    resolve: 'gatsby-plugin-htaccess',
    options: {
      RewriteBase: '/custom/',
      https: true,
      www: true,
      SymLinksIfOwnerMatch: true,
      host: 'blog.modernb2c.pl', // if 'www' is set to 'false', be sure to also remove it here!
      ErrorDocument: `
        ErrorDocument 401 /error_pages/401.html
        ErrorDocument 404 /error_pages/404.html
        ErrorDocument 500 /error_pages/500.html
      `,
    
    },
  },
  `gatsby-plugin-netlify-cms`,

  ],
}
