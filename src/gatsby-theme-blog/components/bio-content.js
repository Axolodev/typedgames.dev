import React, { Fragment } from "react";
import { Styled } from "theme-ui";

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Escrito por Roberto Ruiz. <br />
    <Styled.a
      href="https://twitter.com/robruizr"
      target="_blank"
      rel="noopener noreferrer"
    >
      ¡Sígueme en twitter!
    </Styled.a>
  </Fragment>
);
