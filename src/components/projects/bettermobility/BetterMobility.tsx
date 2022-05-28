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
} from "../styles";
import { BetterMobilityData } from "./BetterMobilityData";

import affinityImage from "./assets/affinity.png";
import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";

const Title = styled(H1)`
  width: 47vw;
  @media ${devices.mobile} {
    width: 75vw;
  }
`;

export default function BetterMobilityBody(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={BetterMobilityData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{BetterMobilityData.title}</Title>
        <ProjectP>
          In this ongoing project, I'm remotely working with a group of
          transport experts in Sri Lanka to strategize an open platform to
          proactively engage the pulic in Transport policy making.
        </ProjectP>
        <ProjectP>More coming soon...</ProjectP>
        {/* <ProjectP>
          Over a period of 4 years, I have conducted a series of hardware design
          and dissemination activities, public workshops, focus group studies
          and remote qualitative interviews with open science practitioners
          around the world.
        </ProjectP>

        <ProjectP>
          My work resulted in several academic publications at major HCI
          conferences including CHI. Open-source hardware designs developed by
          me have been replicated, reused and modified by open scientists around
          the world. Most importantly, my work uncovered several barriers for
          wide-spread adoption of OScH across the globe and proposed multiple
          design solutions for addressing those.
        </ProjectP>

        <H3>Project Type</H3>
        <ProjectP>Academic research</ProjectP>

        <H3>Duration</H3>
        <ProjectP>4 years (August 2015 - August 2019)</ProjectP> */}
      </SummerySection>
    </ProjectContainer>
  );
}
