import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { H2, H3, P, Page } from "../../../theme/Styles";
import { projectData } from "../../projects/projectData";
import Link from "../../ui/link/Link";
import ProjectCard from "../../ui/projectCard/ProjectCard";

import handsonImage from "./assets/handson.png";
import graphic from "./assets/graphic.png";
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
  width: 28vw;
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
  width: 65vw;
  overflow: hidden;
  display:flex;
  align-items:center;
  justify-content:center;

  @media ${devices.mobile} {
    width: 80vw;
    height: auto;
    margin-top: 10vw;
  }
`;

const Image = styled.img`
  margin: auto;
  width: 35vw;
  @media ${devices.mobile} {
    width: 80vw;
  }
`;

const Divider = styled.div`
  width:90vw;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

export default function AboutMe() {
  return (
    <section id="aboutme">
      <AboutMePage>
        <Header>
          <H2 color={"#D93690"}>About Me</H2>
        </Header>


        <Divider>

          <div>
            <MainText>
              I am a keen and sensitive observer
              who notices small things in the world

            </MainText>
            <Body>
            From the texture of a flower petal to the tone of a conversation, I use my sensitivity to capture rich amounts of information 
            about the world. I record what I observe using visual methods such as doodles, notes and photos.   {" "}
            </Body>

            <MainText>
              I spend a lot of time listening to people
              and thinking of ways in which everyone can participate in design processes

            </MainText>
            <Body>
              I strongly believe that the best design work happens together with “users”. I regularly facilitate meetings,
              create new materials for co-design sessions and dive into the latest research on participatory design.
            </Body>
            {/* <ImageContainer>
          <Image src={codesignImage}></Image>
        </ImageContainer> */}
            <MainText>
              I am a natural connector of ideas and domains
              and find multidisciplinary teams to be my preffered habitat

            </MainText>
            <Body>
              If you peek into my inbox, you’ll find newsletters of everything from data science to succulent gardening. I draw from
              this multiverse of interests and my training as both a classical singer and a designer to relate to new and disparate domains and people.
            </Body>

            

            {/* <ImageContainer>
          <Image src={codesignImage}></Image>
        </ImageContainer> */}

          </div>

          <ImageContainer>
          <Image src={graphic}></Image>
          </ImageContainer>

        </Divider>

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
