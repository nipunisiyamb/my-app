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
import { PostbitsData } from "./PostbitsData";
import electrnics from "./assets/postbits_electronics.jpg";
import software from "./assets/postbits_system_design.jpg";
import interactions from "./assets/postbits_interactions.jpg";
import scenario from "./assets/postbits_usage.jpg";

import FullwidthImage from "../../ui/fullwidthImage/FullwidthImage";
import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";

const Title = styled(H1)`
  width: 55vw;
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

export default function Postbits(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={PostbitsData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{PostbitsData.title}</Title>
        <ProjectP>
          We developed a fully functional connected display platform, PostBits.
          We used this Postbits system as a research probe to investigate how
          people would integrate digital information into contextually rich
          domestic environments. We conducted a field study with 6 households in
          Singapore, in which participants deployed and used our connected
          display system in their homes. During the research we remotely
          monitored their usage activities through requests coming to the
          backend server. In addition we conducted in-context interviews before,
          during and after the deployment.
        </ProjectP>

        {/* <H3>My Role</H3>
        <ProjectP>
          I led the overall design process from refining the initial design
          brief to user research to prototyping. At the end, I developed a
          functional prototype of the system (a mobile app and web portal) for
          further testing and securing funds for next stages.
        </ProjectP> */}

        <H3>Duration</H3>
        <ProjectP>10 months (Sep 2014 - July 2015)</ProjectP>
      </SummerySection>

      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4si7LvQQOFU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      <CaptionedImage imageSrc={electrnics} caption={""}></CaptionedImage>
      <CaptionedImage imageSrc={software} caption={""}></CaptionedImage>
      <CaptionedImage imageSrc={interactions} caption={""}></CaptionedImage>
      <CaptionedImage imageSrc={scenario} caption={""}></CaptionedImage>
    </ProjectContainer>
  );
}
