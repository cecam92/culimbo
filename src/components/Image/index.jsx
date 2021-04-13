import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { ProjectoImage } from "../../styles";

const Image = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_PICKLE {
          RickandMorty: file(relativePath: { eq: "pickle.png" }) {
            childImageSharp {
              fluid(maxWidth: 248) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Crypto: file(relativePath: { eq: "crypto.png" }) {
            childImageSharp {
              fluid(maxWidth: 248) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Petgram: file(relativePath: { eq: "petgram.png" }) {
            childImageSharp {
              fluid(maxWidth: 248) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <ProjectoImage
          fluid={data[name].childImageSharp.fluid}
          alt={`${name} thumbnail`}
        />
      )}
    />
  );
};

export default Image;
