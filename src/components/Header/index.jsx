import React from "react";
import { useSpring, animated as a } from "react-spring";

import { Title, SubTitle, Container } from "./styles";
const Header = ({ data }) => {
  const headerProps = useSpring({
    from: {
      transform: "scale(1)",
      opacity: 1,
    },
    opacity: 1 - window.scrollY / 100,
    transform: `scale(${data})`,
  });
  return (
    <header>
      <a.div style={headerProps}>
        <Container>
          <Title>Cesar Martinez</Title>
          <SubTitle>Web & Mobile Developer</SubTitle>
        </Container>
      </a.div>
    </header>
  );
};

export default Header;
