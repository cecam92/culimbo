import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Separator from "../components/Separator";
import Portfolio from "../components/Portfolio";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import { useSpring, animated as a } from "react-spring";

import { Container } from "../styles";

export default function Home() {
  const [data, setData] = useState(1);
  const [stick, setStick] = useState(false);

  const fadeProps = useSpring({
    position: "absolute",
    top: "20vh",
    paddingTop: 10,
    opacity: stick ? 1 : 0,
    backgroundColor: stick ? "#121212" : "#121212",
  });
  function cutNumber(num) {
    const MIN = 1;
    const MAX = 96;
    const parsed = parseInt(num);
    return Math.min(Math.max(parsed, MIN), MAX);
  }

  useEffect(() => {
    function scrolling() {
      setData(cutNumber(window.scrollY));
    }
    window.addEventListener("scroll", scrolling);
    function getStick() {
      if (data >= 96) {
        setStick(true);
      } else {
        setStick(false);
      }
    }
    getStick();

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, [data]);

  return (
    <>
      <Header data={data} />
      <a.div style={fadeProps}>
        {stick && (
          <>
            <Nav />
          </>
        )}
        <Container>
          <About />
          <Separator />
          <Portfolio />
          <Technologies />
          <Footer />
        </Container>
      </a.div>
    </>
  );
}
