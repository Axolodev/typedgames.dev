import React from "react";
import Layout from "gatsby-theme-blog/src/components/layout";
import { Styled } from "theme-ui"
import GatsbyLink from "gatsby-link";

function Page404({ location }) {
  return <Layout location={location} title={"404"}>
    ¡Hola! Parece que estás perdido. 
    <br/>
    <Styled.a to="/" as={GatsbyLink}>Da click aquí para regresar a inicio</Styled.a>
  </Layout>
}

export default Page404;
