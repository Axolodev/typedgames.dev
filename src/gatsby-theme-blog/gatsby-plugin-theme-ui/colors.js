import merge from "deepmerge";
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors";

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

export default merge(defaultThemeColors, {
  // https://coolors.co/419d78-e0a458-0c120c-005c69-cdedf6
  text: "rgb(78, 86, 109)",
  primary: "rgb(85, 108, 214)",
  heading: "#556cd6",
  background: "white",
  modes: {
    dark: {
      // https://coolors.co/0d0630-d33f49-d7c0d0-c20114-6d7275
      background: "#0D0630",
      text: "rgba(255, 255, 255, 0.95)",
      primary: "#D33F49",
      highlight: "#A20104",
    },
  },
});
