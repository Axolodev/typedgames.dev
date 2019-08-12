import merge from "deepmerge";
import defaultThemeStyles from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/styles";

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

// Light colors
// const smokyBlack = "#0C120C";
// const imperialBlue = "#005C69";
// const azureishWhite = "#CDEDF6";
// const indianYellow = "#E0A458";
// const emerald = "#419D78";

export default merge(defaultThemeStyles, {
  // https://coolors.co/419d78-e0a458-0c120c-005c69-cdedf6
  pre: {
    marginBottom: 3
  },
});
