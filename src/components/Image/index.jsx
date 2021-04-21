import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { ProjectoImage } from "../../styles";

const Image = ({ name, large }) => {
  return (
    <StaticQuery
      large={large}
      query={graphql`
        query GET_PICKLE {
          RickandMorty: file(relativePath: { eq: "pickle.png" }) {
            childImageSharp {
              fluid(maxWidth: 248) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          RickandMortyLg: file(relativePath: { eq: "RickLaptop.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
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
          alt={`${large} thumbnail`}
          lg={large}
        />
      )}
    />
  );
};

export default Image;
