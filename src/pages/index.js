import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Separator from "../components/Separator";
import Portfolio from "../components/Portfolio";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

import { Container } from "./styles";

import "../styles.js";
export default function Home() {
  return (
    <Container>
      <Nav />
      <About />
      <Separator />
      <Portfolio />
      <Technologies />
      <Footer />
    </Container>
  );
}
