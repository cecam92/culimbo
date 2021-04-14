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
        <a href="#home">
          <Logo
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Cesar Martinez
          </Logo>
        </a>
        <MenuIcon
          src={showMenu ? closeIcon : burgerMenu}
          onClick={handleClick}
        />
      </ContainerNav>
      {showMenu && <Menu show={handleClick} />}
    </Container>
  );
};

export default Nav;
