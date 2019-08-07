import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui";
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui";
import merge from "deepmerge";

blogTheme.fonts.heading = '"Roboto Slab", "sans-serif"';

export default merge(blogTheme, wavesTheme);
