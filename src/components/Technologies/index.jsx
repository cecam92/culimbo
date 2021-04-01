import React from "react";
import { Title } from "../../styles";
import {
  Container,
  IconsContainer,
  TechContainer,
  Image,
  Text,
} from "./styles";

import ReactIcon from "../../../static/react.svg";
const Technologies = () => {
  return (
    <Container>
      <Title>Technologies</Title>
      <IconsContainer>
        <TechContainer>
          <Image src={ReactIcon} />
          <Text>React & Native</Text>
        </TechContainer>
        <TechContainer>
          <Image src={ReactIcon} />
          <Text>React & Native</Text>
        </TechContainer>
        <TechContainer>
          <Image src={ReactIcon} />
          <Text>React & Native</Text>
        </TechContainer>
        <TechContainer>
          <Image src={ReactIcon} />
          <Text>React & Native</Text>
        </TechContainer>
      </IconsContainer>
    </Container>
  );
};

export default Technologies;
