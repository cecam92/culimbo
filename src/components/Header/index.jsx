import React, { useEffect, useState } from "react";
import { useSpring, animated as a } from "react-spring";

import { Title, SubTitle, Container } from "./styles";

const Header = ({ data }) => {
  const [scroller, setScroller] = useState(0);
  const headerProps = useSpring({
    from: {
      transform: "scale(1)",
      opacity: 1,
    },
    opacity: 1 - scroller / 100 < 0 ? 1 : 1 - scroller / 100,
    transform: `scale(${data})`,
  });
  useEffect(() => {
    setScroller(window.scrollY);
  }, [scroller]);

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
