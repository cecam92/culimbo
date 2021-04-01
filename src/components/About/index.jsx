import React from "react";
import { Container, Pic, SocialMedia, Icon } from "./styles";

import { Title, Button, Information } from "../../styles";
import Me from "../../../static/me.png";
import Github from "../../../static/github.svg";
import Instagram from "../../../static/instagram.svg";
import Twitter from "../../../static/twitter.svg";
import LinkedIn from "../../../static/linkedin.svg";

const About = () => {
  return (
    <Container>
      <Pic src={Me} />
      <SocialMedia>
        <Icon src={LinkedIn} />
        <Icon src={Instagram} />
        <Icon src={Twitter} />
        <Icon src={Github} />
      </SocialMedia>
      <Title>Who am I?</Title>
      <Information>
        I am Cesar Martinez, I was born and raised in Cali, Colombia. There I
        completed a Bachelor of Engineering (Computer and Network Engineering).
        In 2016, I moved to Perth, Australia, looking forward to an enriching
        overseas experience and studying English. After the English course, I
        undertook a Diploma of Leadership and Management to enhance my
        professional skills. Since 2018, I have been living in Melbourne where I
        accomplished an Advanced Diploma of Information Technology. As a curious
        person, I enjoy learning new technologies which complement my
        engineering degree. I have sharpened my coding skills, beginning with
        Swift for IOS applications, followed by React JS for web development and
        React Native for mobile development. I am always on the lookout for
        cutting edge platforms that streamline the user experience.
      </Information>
      <Button>Resume</Button>
    </Container>
  );
};

export default About;
