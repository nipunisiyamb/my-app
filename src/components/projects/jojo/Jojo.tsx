import React from "react";
import styled from "styled-components";
import { H1, H2, H3 } from "../../../theme/Styles";
import CaptionedImage from "../../ui/captionedImage/CaptionedImage";
import {
  ContentSection,
  HeroImage,
  ProjectContainer,
  ProjectP,
  SummerySection,
  ProjectH2
} from "../styles";

import { devices } from "../../../theme/devices";
import TopBar from "../../ui/topBar/TopBar";
import { JojoData } from "./JojoData";

const projectColorTheme = {
  primary: "#CB1B1B",
  secondary: "#3B6E88"
}

const Title = styled(H1)`
  width: 45vw;
  color:${projectColorTheme.primary};
  @media ${devices.mobile} {
    width: 70vw;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  margin: auto;

  iframe {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 90%;
  }
`;

export default function Jojo(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={JojoData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{JojoData.title}</Title>
        <ProjectP>
        Learning to express and manage emotions is a key part of early childhood development. Open-ended play allows kids to creatively explore the world around them in their own unique ways. In this project I explored how open-ended play can support social emotional learning of preschoolers through the iterative design of an open-ended toy named “JOJO”.
        </ProjectP>

        <H3>Project type</H3>
        <ProjectP>
          Masters studio final project (individual)
        </ProjectP>

        <H3>Duration</H3>
        <ProjectP>6 months (Jan 2020 - June 2020)</ProjectP>
      </SummerySection>





      {/* <FullwidthImage imageSrc={refinedvisualsImage}></FullwidthImage> */}
      <ContentSection>
        <H2>Creating a visual communication system that is culturally familiar and safe </H2>
        <ProjectP>
          Collaborating with our UX designer, I created user interfaces for the different lesson segments. Illustration content and color palettes were carefully chosen 
          to provide a culturally familiar landscape to the user. I also developed icons to identify different lesson segments in lieu 
          of using direct terminology such as 'grammar' - words which had stigma associated with them from previous learning attempts. 
        </ProjectP>
      </ContentSection>

    

      <SummerySection>
        {/* <H2>Reflections</H2> */}
        <H3>What is the most important lesson I learned from this project?</H3>
        <ProjectP>
          Most of my team members did not have prior experience in human
          centered design. I learnt how to lead people from non-design
          backgrounds in the HCD process.
        </ProjectP>

        <H3>What was the most challenging?</H3>
        <ProjectP>
          Leading and managing a team remotely during COVID-19 and especially
          while preparing for my PhD defense.
        </ProjectP>

        <H3>What would I do differently if I were to do this project again?</H3>
        <ProjectP>
          I would plan out remote design sessions more thoughtfully. I would
          love to try out Figma Jam.{" "}
        </ProjectP>
      </SummerySection>
    </ProjectContainer>
  );
}
