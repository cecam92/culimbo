import React from "react";
import { Container, SocialMedia, Icon } from "./styles";

import { Title, Button, Information } from "../../styles";
import Github from "../../images/github.svg";
import Instagram from "../../images/instagram.svg";
import Twitter from "../../images/twitter.svg";
import LinkedIn from "../../images/linkedin.svg";
import CV from "../../images/cv.pdf";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  const descrip = `I am Cesar Martinez, I was born and raised in Cali, Colombia. There I
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
  cutting edge platforms that streamline the user experience.`;
  const socials = [
    {
      name: "LinkedIn",
      icon: LinkedIn,
      url: "http://linkedin.com/in/cecam92",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/cecam92",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "http://twitter.com/cecam92",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "http://github.com/cecam92",
    },
  ];
  return (
    <Container id="about">
      <StaticImage
        src="../../images/me.png"
        placeholder="tracedSVG"
        alt="Cesar Martinez"
        className="rounded"
        width={248}
        height={248}
        quality={100}
      />

      <SocialMedia>
        {socials.map((social, index) => {
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={social.icon} />
            </a>
          );
        })}
      </SocialMedia>
      <Title>Who am I?</Title>
      <Information>{descrip}</Information>
      <Button>
        <a href={CV} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </Button>
    </Container>
  );
};

export default About;
