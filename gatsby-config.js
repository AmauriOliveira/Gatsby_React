module.exports = {
  siteMetadata: {
    title: `Amauri Oliveira`,
    description: `Estudante de Análise e Desenvolvimento de Sistemas,
     formado em Técnico em informática,
      membro da Fellowship of The Game,
       Game Developer,
        apaixonado por tecnologias.`,
    position: `Analysis and Systems Development | NodeJS | Unity |
     JavaScript | React | Fellowship of The Game`,
    author: `Amauri Antonio de Oliveira`,
    siteUrl: `https://www.google.com/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
