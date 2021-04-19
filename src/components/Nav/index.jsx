import React, { useState } from "react";
import {
  Container,
  ContainerNav,
  Logo,
  MenuIcon,
  Label,
  MenuContainer,
  ContainerCV,
} from "./styles";
import burgerMenu from "../../images/burgerMenu.svg";
import closeIcon from "../../images/closeIcon.svg";
import Menu from "../Menu";
import CV from "../../images/cv.pdf";
import downloadIcon from "../../images/download.svg";

const Nav = ({ desktop }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  console.log("nav", desktop);

  return (
    <>
      {!desktop && (
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
      )}
      {desktop && (
        <Container>
          <ContainerNav>
            <Logo
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Cesar Martinez
            </Logo>
            <MenuContainer>
              <a href="#home">
                <Label>Home</Label>
              </a>
              <a href="#about">
                <Label>About</Label>
              </a>
              <a href="#portfolio">
                <Label>Portfolio</Label>
              </a>
              <a href="#techs">
                <Label>Technologies</Label>
              </a>
              <a href={CV} download>
                <ContainerCV>
                  <MenuIcon src={downloadIcon} alt="download icon" />
                  <Label marginleft="3px">CV</Label>
                </ContainerCV>
              </a>
            </MenuContainer>
          </ContainerNav>
        </Container>
      )}
    </>
  );
};

export default Nav;
