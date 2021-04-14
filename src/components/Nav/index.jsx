import React, { useState } from "react";
import { Container, ContainerNav, Logo, MenuIcon } from "./styles";
import burgerMenu from "../../images/burgerMenu.svg";
import closeIcon from "../../images/closeIcon.svg";
import Menu from "../Menu";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <ContainerNav>
        <Logo>Cesar Martinez</Logo>
        <MenuIcon
          src={showMenu ? closeIcon : burgerMenu}
          onClick={handleClick}
        />
      </ContainerNav>
      {showMenu && <Menu />}
    </Container>
  );
};

export default Nav;
