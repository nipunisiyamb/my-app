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
import { BlipData } from "./BlipData";

import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";

const Title = styled(H1)`
  width: 47vw;
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

export default function Blip(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={BlipData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{BlipData.title}</Title>
        <ProjectP>
          In this project I explored how running water usage in the home can be visualized effectively in real-time using a system of screen-based smart devices.
          I conceptualized a system that consisted of a backend powered by national & local weather data, a learning flow meter and real- time feedback displays to be installed in homes, and a community that recognizes and rewards high savers

          My goal was to help people monitor their usage patterns, learn better water habits and reduce water consumption.
        </ProjectP>

        <H3>Awards</H3>
        <ProjectP>Fast Company World Changing Ideas 2019: Student Category Honorable Mention </ProjectP>
        <ProjectP>ASU Design Excellence Award 2018</ProjectP>

        <H3>Project Type</H3>
        <ProjectP>Masters Emerging Technology Project </ProjectP>

       

        <H3>Duration</H3>
        <ProjectP>5 months</ProjectP>

      </SummerySection>

      <ContentSection>
        <H2>More coming soon...</H2>
      
      </ContentSection>
    </ProjectContainer>
  );
}
