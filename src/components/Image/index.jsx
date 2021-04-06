import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Pic } from "../About/styles";
import { StaticImage } from "gatsby-plugin-image";
const Image = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_PICKLE {
          pickle: file(relativePath: { eq: "pickle.png" }) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          me: file(relativePath: { eq: "me.png" }) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <StaticImage fluid={data[name].childImageSharp.fluid} />}
    />
  );
};

export default Image;
