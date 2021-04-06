import React from "react";
import { Button, Information } from "../../../styles";
import Separator from "../../Separator";
import {
  Container,
  Title,
  Image,
  ButtonContainer,
  IconsContainer,
  Icon,
} from "./styles";
import Pickle from "../../../images/pickle.png";
import ReactIcon from "../../../images/react.svg";
const Project = () => {
  return (
    <Container>
      <Title>Rick and Morty</Title>
      <Image name="pickle" />
      <Information>
        I decided to create this website where you can find every character from
        the TV show Rick and Morty. All the data presented in this project is
        from the open source Rick and Morty API. I realized an infinite scroll
        single page application on React JS. The SPA fetches data from the
        RESTful API and manages the requested data with Redux. Using React
        Router allows me to redirect the user to any character by typing its ID,
        and from the GraphQL API I request the information of the selected
        character.
      </Information>
      <ButtonContainer>
        <Button>Demo</Button>
        <Button>GitHub</Button>
      </ButtonContainer>
      <Separator>
        <IconsContainer>
          <Icon src={ReactIcon} />
          <Icon />
          <Icon />
          <Icon />
        </IconsContainer>
      </Separator>
    </Container>
  );
};

export default Project;
