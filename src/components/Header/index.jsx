import React from "react";
import { useSpring, animated as a } from "react-spring";

import { Title, SubTitle, Container } from "./styles";

const Header = ({ data }) => {
  const headerProps = useSpring({
    from: {
      transform: "scale(1)",
      opacity: 1,
    },
    opacity: data === 96 ? 0 : 1 - data / 100,
    transform: `scale(${data})`,
  });
  return (
    <header id="home">
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
