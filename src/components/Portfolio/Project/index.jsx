import React from "react";
import { Button, Information } from "../../../styles";
import Separator from "../../Separator";
import Image from "../../Image";
import {
  Container,
  Title,
  ButtonContainer,
  IconsContainer,
  Icon,
} from "./styles";

const Project = ({ data }) => {
  return (
    <>
      {data.map((project, index) => {
        const {
          title,
          description,
          techs,
          pictureSm,
          //  pictureLg,
          url,
          repository,
        } = project;
        return (
          <Container key={index}>
            <Title>{title}</Title>
            <Image name={pictureSm} />
            {description.map((info, index) => {
              return <Information key={index}>{info.paragraph}</Information>;
            })}
            <ButtonContainer>
              {url && (
                <Button>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
              )}
              <Button git>
                <a href={repository} target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </Button>
            </ButtonContainer>
            <Separator>
              <IconsContainer>
                {techs.map((info, index) => {
                  return <Icon key={index} src={info.icon} />;
                })}
              </IconsContainer>
            </Separator>
          </Container>
        );
      })}
    </>
  );
};

export default Project;
