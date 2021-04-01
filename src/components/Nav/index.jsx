import React from "react";
import { Container, Logo, Menu } from "./styles";
import burgerMenu from "../../images/burgerMenu.svg";

const Nav = () => {
  return (
    <Container>
      <Logo>Cesar Martinez</Logo>
      <Menu src={burgerMenu} />
    </Container>
  );
};

export default Nav;
