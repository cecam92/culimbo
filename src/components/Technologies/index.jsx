import React from "react";
import { Title } from "../../styles";
import {
  Container,
  IconsContainer,
  TechContainer,
  Image,
  Text,
} from "./styles";

import Techs from "../../technologiesData";

const Technologies = () => {
  const data = Techs;
  return (
    <Container>
      <Title>Technologies</Title>
      <IconsContainer>
        {data.map((tech, index) => {
          const { name, icon } = tech;
          return (
            <TechContainer key={index}>
              <Image src={icon} />
              <Text>{name}</Text>
            </TechContainer>
          );
        })}
      </IconsContainer>
    </Container>
  );
};

export default Technologies;
