import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { H2, H3, P, Page } from "../../../theme/Styles";
import { projectData } from "../../projects/projectData";
import Link from "../../ui/link/Link";
import ProjectCard from "../../ui/projectCard/ProjectCard";

import handsonImage from "./assets/handson.png";
// import codesignImage from "./assets/codesign.png";
import codesignImage from "./assets/codesign.jpg";

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3vw;
`;

const AboutMePage = styled(Page)`
  padding-top: 2vw;
  margin-top: 2vw;
`;

const MainText = styled(H3)`
  width: 35vw;
  margin: 0;
  margin-bottom: 1vw;
  @media ${devices.mobile} {
    width: 80vw;
    margin-bottom: 3vw;
    margin-top: 6vw;
  }
`;

const Body = styled(P)`
  width: 35vw;
  margin: 0;
  margin-bottom: 2vw;
  @media ${devices.mobile} {
    width: 80vw;
    margin-bottom: 15vw;
    margin-top: 2vw;
  }
`;
const ImageContainer = styled.div`
  width: 38vw;
  overflow: hidden;
  margin-top: 5vw;
  margin-bottom: 1vw;

  @media ${devices.mobile} {
    width: 80vw;
    height: auto;
    margin-top: 10vw;
  }
`;

const Image = styled.img`
  margin: auto;
  width: 38vw;
  @media ${devices.mobile} {
    width: 80vw;
  }
`;

const ImageTextContainer = styled.div`
  display: flex;
  margin: auto;
  @media ${devices.mobile} {
    width: 80vw;
    flex-direction: column;
  }
`;

export default function AboutMe() {
  return (
    <section id="aboutme">
      <AboutMePage>
        <Header>
          <H2>About Me</H2>
        </Header>

        {/* <ImageContainer>
          <Image src={handsonImage}></Image>
        </ImageContainer> */}
        <div>
          <MainText>
            I’m a hands-on person. I love playing with materials and making
            things, both digital and physical.
          </MainText>
          <Body>
            From making provocative experience prototypes to trigger reactions
            from research participants, to building functional digital-physical
            prototypes for user testing, I love materializing ideas, bringing
            them to life and seeing how people react to them.{" "}
          </Body>
        </div>

        {/* <ImageContainer>
          <Image src={codesignImage}></Image>
        </ImageContainer> */}
        <MainText>
          I believe diversity is generative and everyone has a designer in them.
        </MainText>
        <Body>
          My design process has always been shaped by people I met, worked with
          and shared my life together. I’m a huge fan of participatory design
          and always seek inputs from diverse groups of people for my work.
        </Body>

        {/* <ImageContainer>
          <Image src={codesignImage}></Image>
        </ImageContainer> */}
        <MainText>
          I speak both design and engineering fluently. I like to be the glue
          that holds teams together.{" "}
        </MainText>
        <Body>
          I enjoy fuzziness, chaos and craziness as much as I do order and
          logic. I think each of these plays a part in great designs, so do the
          differences of my team members.
        </Body>

        {/* <MainText>My life in a nutshell</MainText>
        <Body>
          I recently finished my PhD in Human Computer Interaction at Arizona
          State University. In my research, through long-term ethnographic work,
          I explored how interaction design can be applied to support
          crowd-driven open hardware designs across the world. My bachelor's
          degree is in Computer Science and Engineering from University of
          Moratuwa, Sri Lanka.
        </Body>

        <Body>
          {" "}
          In between college and grad school, I worked as a software engineer
          for two years. Realizing my passion for interaction design, in 2014, I
          moved on to join the Augmented Human Lab at Singapore University of
          Technology and Design as an HCI research engineer. Since then, my
          roles in the various multidisciplinary teams I work with have been
          fluid. Collaborations throughout my career with designers,
          researchers, marketers, artists, citizen scientists and maker
          communities have shaped me to see complex problems from many angles
          and lead and work on highly multidisciplinary design projects.
        </Body> */}
      </AboutMePage>
    </section>
  );
}
