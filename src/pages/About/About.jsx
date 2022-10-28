import React from "react";
import StyledAbout, {
  AboutBox,
  AboutContent,
  AboutHeader,
  AboutIcon,
  HeaderName,
} from "../../Styles/About.styled";

const About = () => {
  return (
    <StyledAbout>
      <AboutIcon src="./assets/coding.svg" alt="" />
      <AboutBox>
        <AboutHeader>
          About Full-Stack Developer <HeaderName>Osman</HeaderName>
        </AboutHeader>
        <AboutContent>
          <HeaderName>I'm Osman</HeaderName>
          <p>I'm currently learning Full-Stack Development Languages.</p>
          <p>
            I've already known JS, ReactJS, NodeJS, Python, Django, MongoDB,
            SQL.
          </p>
        </AboutContent>
      </AboutBox>
    </StyledAbout>
  );
};

export default About;
