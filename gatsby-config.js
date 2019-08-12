module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: "/",
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
