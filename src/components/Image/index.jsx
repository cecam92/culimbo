import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Pic } from "../About/styles";

const Image = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          me: file(relativePath: { eq: "me.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Pic fluid={data[name].childImageSharp.fluid} />}
    />
  );
};

export default Image;
