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
  const [isDesktop, setIsDesktop] = useState(false);

  const fadeProps = useSpring({
    position: "absolute",
    top: "20vh",
    paddingTop: 10,
    width: "100%",
    opacity: stick ? 1 : 0,
    backgroundColor: "#060708",
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

  useEffect(() => {
    function setDesktop() {
      if (window.innerWidth >= 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }
    setDesktop();
    window.addEventListener("resize", setDesktop);
    return () => {
      window.removeEventListener("resize", setDesktop);
    };
  }, [isDesktop]);

  return (
    <>
      <Header data={data} />
      <div>
        <a.div style={fadeProps}>
          {stick && (
            <>
              <Container>
                <div style={{ maxWidth: "1000px", margin: "0px auto" }}>
                  <Nav desktop={isDesktop} />
                  <About />
                  <Separator desktop={isDesktop} />
                  <Portfolio desktop={isDesktop} />
                  <Technologies />
                </div>
                <Footer />
              </Container>
            </>
          )}
        </a.div>
      </div>

      {!stick && <div style={{ height: "120vh", width: "100vw" }}></div>}
    </>
  );
}
