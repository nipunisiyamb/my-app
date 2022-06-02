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

export default function SWLC(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={SWLCData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{SWLCData.title}</Title>
        <ProjectP>
          Today’s fast paced product design cycles give designers and
          technologists very little time to think about the potential
          consequences of new technology products before they hit the market and
          are consumed by millions.
        </ProjectP>
        
        <H3>Project Type</H3>
        <ProjectP>PhD Research (Dissertation Chapter) </ProjectP>

        <H3>Duration</H3>
        <ProjectP>2 years (Dec 2018 - December 2020)</ProjectP>

      </SummerySection>

      <ContentSection>
        <H2>Thinking beyond technological optimism</H2>
        <ProjectP>
          Today’s fast paced product design cycles give designers and
          technologists very little time to think about the potential
          consequences of new technology products before they hit the market and
          are consumed by millions.
        </ProjectP>
      </ContentSection>
    </ProjectContainer>
  );
}
