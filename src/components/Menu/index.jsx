import React from "react";
import downloadIcon from "../../images/download.svg";
import CV from "../../images/cv.pdf";

import { Container, ContainerCV, Icon, Label, Shadow } from "./styles";
const Menu = ({ show }) => {
  const closeMenu = () => {
    show();
  };
  return (
    <>
      <div style={{ backgroundColor: "#060708" }}>
        <Container>
          <a href="#home">
            <Label onClick={closeMenu}>Home</Label>
          </a>
          <a href="#about">
            <Label onClick={closeMenu}>About</Label>
          </a>
          <a href="#portfolio">
            <Label onClick={closeMenu}>Portfolio</Label>
          </a>
          <a href="#techs">
            <Label onClick={closeMenu}>Technologies</Label>
          </a>
        </Container>
      </div>
      <ContainerCV>
        <Label>CV</Label>
        <a href={CV} download>
          <Icon src={downloadIcon} />
        </a>
      </ContainerCV>
      <Shadow />
    </>
  );
};

export default Menu;
