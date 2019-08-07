import React from "react";
import { css, Styled } from "theme-ui";

import SEO from "gatsby-theme-blog/src/components/seo";
import Navbar from "./Navbar";

export default ({ children, title }) => (
  <Styled.root>
    <div>
      <SEO title={title} lang="es" />
      <Navbar />
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          py: 4,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
);
