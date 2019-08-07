import React from "react";
import { Flex, Box } from "@rebass/grid";
import { Styled, useColorMode, css } from "theme-ui";
import GatsbyLink from "gatsby-link";
import Switch from "gatsby-theme-blog/src/components/switch";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: `none`,
      margin: 4,
    }}
  />
);

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: `none`,
      margin: 4,
    }}
  />
);

function Navbar() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Flex p={3}>
      <Box>
        <Styled.a as={GatsbyLink} to="/">
          Inicio
        </Styled.a>
      </Box>
      <Box ml="auto" mr={2}>
        <Styled.a as={GatsbyLink} to="/blog">
          Blog
        </Styled.a>
      </Box>
      <Box>
        <Switch
          aria-label="Encender o apagar modo oscuro"
          css={css({
            bg: `black`,
          })}
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          checked={colorMode === "dark"}
          onChange={() => setColorMode(m => (m === "dark" ? "light" : "dark"))}
        />
      </Box>
    </Flex>
  );
}

export default Navbar;
