module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: "/",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-145472877-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Typedgames.dev`,
        short_name: `Typed games`,
        start_url: `/`,
        background_color: `#0D0630`,
        theme_color: `#0D0630`,
        display: `standalone`,
        icon: "src/assets/nicrosil.png",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Typedgames`,
    author: `Roberto Ruiz`,
    description: `Blog de desarrollo de videojuegos con Typescript`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/robruizr`,
      },
      {
        name: `github`,
        url: `https://github.com/robruizr`,
      },
    ],
  },
};
