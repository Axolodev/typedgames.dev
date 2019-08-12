module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    "gatsby-plugin-netlify-cache",
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
