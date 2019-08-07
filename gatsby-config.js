module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: "/blog",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Rob devs`,
    author: `Roberto Ruiz`,
    description: `Blog de desarrollo web con temas videojuegos, React, entre otros.`,
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
