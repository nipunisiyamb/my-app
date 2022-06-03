import React from "react";
import styled from "styled-components";
import { colorTheme, H1, H2, H3 } from "../../../theme/Styles";
import CaptionedImage from "../../ui/captionedImage/CaptionedImage";
import {
  ContentSection,
  HeroImage,
  ProjectContainer,
  ProjectP,
  SummerySection,
  VideoContainer,
} from "../styles";
import { SWLCData } from "./SWLCData";
import heromockup from "./assets/hero_mockup.png";
import projectbrief from "./assets/projectbrief.svg";
import interviewguide from "./assets/interview_guide.jpg";
import initialwireframes from "./assets/initial_wireframes.png";
import codesign from "./assets/co_design.png";
import borrow from "./assets/borrow.png";
import exploration from "./assets/exploration.svg";
import usertesting from"./assets/user_testing.png";

import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";
import FullwidthImage from "../../ui/fullwidthImage/FullwidthImage";

const Title = styled(H1)`
  width: 52vw;
  margin-bottom:1.5vw;
  color:#F48149;
  @media ${devices.mobile} {
    width: 75vw;
  }
`;

const Frame = styled.img`
  width: 50vw;
  height: auto;
  margin: auto;
  margin: 5vw 20vw;
  text-align: center;
`;

const FrameContainer = styled.div`
  width: 90vw;
  background-color: ${colorTheme.lightGrey};
  margin: auto;
  margin-bottom: 8vw;
`;


export default function SWLC(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={SWLCData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{SWLCData.title}</Title>
        <ProjectP>
          In the summer of 2021 we helped Southwest Lending Closet, a
          non-profit organization that lends home health equipment for free, rethink how they can better serve the public
          by improving their digital presence. We conducted co-design activities to streamline and visualize their service, c
          reated a strategy for their website by synthesizing stakeholder concerns, and developed a custom website that
          was easy to maintain by volunteers.
        </ProjectP>

        <H3>Team</H3>
        <ProjectP>Our collaborator, Mindflower Studio, redesigned Southwest Lending Closet’s brand and created a brand guideline.
          Piyum Fernando did the UX design of the website, developed the website and created the custom admin portal. </ProjectP>

        <H3>My Role</H3>
        <ProjectP>Juggling the roles of researcher and designer, I conducted stakeholder interviews, created materials for co-design activities,
          translated findings into user interfaces, and ran user tests of the prototype.
          At project hand-off, I created instructional videos that documented how the admin portal would be used.  </ProjectP>

        <H3>Duration</H3>
        <ProjectP>3 months (Apr 2021 - July 2021)</ProjectP>

      </SummerySection>
      <FullwidthImage imageSrc={heromockup}></FullwidthImage>

      <ContentSection>
        <H2>Project Brief</H2>
        <ProjectP>
          Founded in 2000, Southwest Lending Closet is an all volunteer, non-profit organization that provides home health equipment
          at no charge for people in need. They approached us
          to help them elevate their digital presence with the hope of applying for large scale funding opportunities to expand their services.
        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={projectbrief}></CaptionedImage>

      <ContentSection>
        <H2>Conducting stakeholder interviews & creating a web platform strategy</H2>
        <ProjectP>
          At the onset of the project, we interviewed board members and volunteers to deeply understand the nature of their service.
          We used insights from these interviews to create strategic directions for the website.
        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={interviewguide}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={initialwireframes}></CaptionedImage>

      <ContentSection>
        <H2>Co-designing web interfaces </H2>
        <ProjectP>
          To stress test our initial wireframes and to create the next iterations with
          first hand input from the client team, we conducted a co-design activity.
          We provided prints of the wireframes and a custom made card deck that captured key moments of their service to each participant.
          The team cut down service steps,
          streamlined the service and added a ‘How to Borrow’ section to the home page.
        </ProjectP>
      </ContentSection>
     <FullwidthImage imageSrc={codesign}></FullwidthImage>
     
      <ContentSection>
        <H2>Creating an accessible visual system </H2>
        <ProjectP>
        In our initial conversations, we discovered that SWLC’s clientele tended to be older, 
        and often in distress at the time they seek SWLC’s service. 
        Therefore, we wanted to prioritize readability and accessibility of our web interfaces. 
        We tested and implemented best practices in font size and color contrast throughout our visual system. 

        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={exploration}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={usertesting}></CaptionedImage>
    </ProjectContainer>
  );
}
