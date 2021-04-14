import React from "react";
import downloadIcon from "../../images/download.svg";
import { Container, ContainerCV, Icon, Label, Shadow } from "./styles";
const Menu = () => {
  return (
    <>
      <div style={{ backgroundColor: "#060708" }}>
        <Container>
          <Label>Home</Label>
          <Label>About</Label>
          <Label>Portfolio</Label>
          <Label>Technologies</Label>
        </Container>
      </div>
      <ContainerCV>
        <Label>CV</Label>
        <Icon src={downloadIcon} />
      </ContainerCV>
      <Shadow />
    </>
  );
};

export default Menu;
