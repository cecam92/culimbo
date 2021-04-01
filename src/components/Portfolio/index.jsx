import React from "react";
import { Container } from "./styles";
import Project from "./Project";

import { Title, Information } from "../../styles";

const Portfolio = () => {
  return (
    <Container>
      <Title>Portfolio</Title>
      <Information>
        Here you can find some of my projects as a frontend developer. I have
        developed cross-platform Single Pages Aplication (SPA), using current
        techonlogies like CSS preprocessors, CSS frameworks, Hooks, Routering
        and version control that you can check for each project.
      </Information>
      <Project />
    </Container>
  );
};

export default Portfolio;
