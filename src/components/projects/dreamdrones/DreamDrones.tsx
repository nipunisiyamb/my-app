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
import { DreamDroneData } from "./DreamDronesData";

import crowddrivenImage from "./assets/crowddriven.svg";
import designfictionImage from "./assets/designfiction.jpeg";
import likebuttonImage from "./assets/likebutton.svg";
import socialDilemmaImage from "./assets/socialdilemma.svg";
import introImage from "./assets/intro.jpeg";

import activityImage from "./assets/droneThumbnail.jpg";
import activity2Image from "./assets/activity2.jpg";
import activity3Image from "./assets/activity3.jpg";

import q1Image from "./assets/q1.svg";
import q2Image from "./assets/q2.svg";
import q3Image from "./assets/q3.svg";

import s1Image from "./assets/storyboard/Drone-1.jpg";
import s2Image from "./assets/storyboard/Drone-2.jpg";
import s3Image from "./assets/storyboard/Drone-3.jpg";
import s4Image from "./assets/storyboard/Drone-4.jpg";
import s5Image from "./assets/storyboard/Drone-5.jpg";
import s6Image from "./assets/storyboard/Drone-6.jpg";
import s7Image from "./assets/storyboard/Drone-7.jpg";
import s8Image from "./assets/storyboard/Drone-8.jpg";

import Publication from "../../ui/publication/Publication";
import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";
import Carousel from "react-bootstrap/esm/Carousel";

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

export default function DreamDronesBody(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={DreamDroneData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{DreamDroneData.title}</Title>
        <ProjectP>
          Today’s fast paced product design cycles give designers and
          technologists very little time to think about the potential
          consequences of new technology products before they hit the market and
          are consumed by millions.
        </ProjectP>
        <ProjectP>
          What if we use our collective wisdom and creativity to envision the
          potential futures created by new technologies? Can we use such crowd
          inputs to predict, avoid and prepare for potential adverse
          consequences before they get real?
        </ProjectP>

        <ProjectP>
          In my Phd, I explored above problems by conducting multiple public
          envisioning activities and developing and studying an online design
          fiction platform named “Dream Drones”.
        </ProjectP>

        <H3>Project Type</H3>
        <ProjectP>PhD Research (Dissertation Chapter) </ProjectP>

        <H3>Duration</H3>
        <ProjectP>2 years (Dec 2018 - December 2020)</ProjectP>

        <H3>Publications</H3>
        <Publication
          authors={"Piyum Fernando"}
          year={"2020"}
          title={
            "Nurturing Open Design: Challenges and Opportunities for HCI to Support Crowd-Driven Hardware Design "
          }
          venue={"Doctoral dissertation, Arizona State University"}
          fileSrc="https://repository.asu.edu/attachments/236426/content/Fernando_asu_0010E_20545.pdf"
        ></Publication>
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
      <CaptionedImage
        caption={""}
        imageSrc={socialDilemmaImage}
      ></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={likebuttonImage}></CaptionedImage>

      <ContentSection>
        <H2>Bringing hindsight into foresight, together! </H2>
        <ProjectP>
          What if we use our collective wisdom and creativity to envision the
          potential futures created by new technologies? Can we use such crowd
          inputs to predict, avoid and prepare for potential adverse
          consequences before they get real?
        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={crowddrivenImage}></CaptionedImage>

      {/* <video
        width="100%"
        height="auto"
        src="https://r6---sn-a5mekney.c.drive.google.com/videoplayback?expire=1618998116&ei=JLt_YPP2DtnsrvIPyfSWsAo&ip=98.168.37.102&cp=QVRGWkpfV1FPR1hPOkEtMkxJUGE1R3hKQlhTOE13SHk5NkR0elBmQUVwZG9INEpSbnl0eFhGa0Y&id=b0c45ba709625145&itag=18&source=webdrive&requiressl=yes&mh=iy&mm=32&mn=sn-a5mekney&ms=su&mv=m&mvi=6&pl=18&ttl=transient&susc=dr&driveid=1ftRj-kBkYtmf7hfdQV-7fQea6qFiF5t-&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=159.126&lmt=1607114025756014&mt=1618983382&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAK53wCdnQ7vYu0ppO0WtQnet0q2fqAvhrAPgTX-zF1wWAiEAoDSYg-XcmayXyE2CBTHYYkPr3iBxWxWZKGEUJDiCels=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAMbRbILqj5PKjEwEFeh4ozkuQwH6TGrzqT7c4kX8795QAiBD6FnaGBsw3023XVH6T3LBjbWoBzXugSRydrxkIuHIKw==&cpn=1HfZERg83D2JkQsO&c=WEB_EMBEDDED_PLAYER&cver=1.20210419.1.0"
        controls
      ></video> */}
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9G8XEIVAX0M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      <CaptionedImage caption={""} imageSrc={activityImage}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={activity2Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={activity3Image}></CaptionedImage>

      <ContentSection>
        <H2>How can crowd inputs impact practitioners?</H2>
        <ProjectP></ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={q1Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={q2Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={q3Image}></CaptionedImage>

      <ContentSection>
        <H2> Towards Crowd-driven Speculative AI</H2>
        {/* <ProjectP>
          From the outset of my research, I wanted to embed myself in the
          broader open science hardware community, not only as an academic
          researcher but as an active open science hardware practitioner. In the
          process, I engaged with DIY Biology practitioners and developed an
          accurate (+/- 0.25C) and low-cost ($75) DIY incubator for their use.
        </ProjectP> */}
      </ContentSection>

      <FrameContainer>
        <Carousel>
          <Carousel.Item>
            <Frame src={s1Image}></Frame>
          </Carousel.Item>
          <Carousel.Item>
            <Frame src={s2Image}></Frame>
          </Carousel.Item>
          <Carousel.Item>
            <Frame src={s3Image}></Frame>
          </Carousel.Item>
          <Carousel.Item>
            <Frame src={s4Image}></Frame>
          </Carousel.Item>
          <Carousel.Item>
            <Frame src={s5Image}></Frame>
          </Carousel.Item>
          <Carousel.Item>
            <Frame src={s6Image}></Frame>
          </Carousel.Item>
          <Carousel.Item>
            <Frame src={s7Image}></Frame>
          </Carousel.Item>
          <Carousel.Item>
            <Frame src={s8Image}></Frame>
          </Carousel.Item>
        </Carousel>
      </FrameContainer>

      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BXShPIn9QDE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </ProjectContainer>
  );
}
