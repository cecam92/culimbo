import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Separator from "../components/Separator";
import Portfolio from "../components/Portfolio";
import { Container } from "./styles";

import "../styles.js";
export default function Home() {
  return (
    <Container>
      <Nav />
      <About />
      <Separator />
      <Portfolio />
    </Container>
  );
}
