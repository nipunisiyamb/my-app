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
  VideoContainer,
} from "../styles";
import { HardwarePrototypingData } from "./HardwarePrototypingData";

import walkieGIF from "./assets/swan.gif";
import walkieConceptImage from "./assets/walkie.jpg";
import walkieSystemImage from "./assets/gait.png";

import blipImage from "./assets/blip_lofi.jpg";

import decibleScenarioImage from "./assets/scenario.jpg";
import decible1Image from "./assets/decible_im1.jpg";
import decible2Image from "./assets/decible_im2.jpg";

import decible3Image from "./assets/decible_im5.jpg";
import decible4Image from "./assets/decible_.jpg";

import p1Image from "./assets/p1.jpg";
import p2Image from "./assets/p2.jpg";
import p3Image from "./assets/p3.jpg";
import p4Image from "./assets/p4.jpg";
import p5Image from "./assets/p5.jpg";
import p6Image from "./assets/p6.jpg";

import incubatorImage from "./assets/inc.jpg";
import incubatorInUseImage from "./assets/osh_bio.jpg";
import chiWorkshopImage from "./assets/incubator.jpg";
import instructablesImage from "./assets/instructables.jpg";
import kitImage from "./assets/kit.jpg";
import singaporeWorkshopImage from "./assets/osh_making.jpg";
import NYWorkshopImage from "./assets/w2.jpg";
import collabImage from "./assets/collab.jpg";

import worksheetImage from "./assets/worksheet.jpg";

import heroImage from "./assets/decibleHero.jpg";
import Link from "../../ui/link/Link";
import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";
import SmallImage from "../../ui/smallImage/SmallImage";

const Title = styled(H1)`
  width: 47vw;
  @media ${devices.mobile} {
    width: 70vw;
  }
`;

export default function HardwarePrototyping(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={HardwarePrototypingData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{HardwarePrototypingData.title}</Title>
        {/* <ProjectP>
          During my time at ASU I had the opportunity to collaborate with
          students from Industrial Design masters program to help them bring
          their product concepts to life. These collaborations provide me the
          chance to further sharpen my electronics and hardware prototyping
          skills.
        </ProjectP> */}
      </SummerySection>

      <ContentSection>
        <H2>Building, Sharing and Studying Open Science Hardware</H2>
        <ProjectP>
          As part of my PhD research, I studied the Open Science Hardware (OScH)
          movement, a global community aimed at reducing barriers for scientific
          experimentation through the production of open-source low-cost science
          equipment. Over a period of 4 years, I have conducted a series of
          hardware design and dissemination activities, public workshops, focus
          group studies and remote qualitative interviews with open science
          practitioners around the world.
        </ProjectP>
      </ContentSection>

      <CaptionedImage
        caption={
          "Low-cost and accurate DIYbio Incubator developed as part of my auto-ethnographic research practice"
        }
        imageSrc={incubatorImage}
      ></CaptionedImage>
      <CaptionedImage
        caption={
          "The DIYBio incubator develped by me being used by a participant during a DIYBiology workshop at CHI 2017 Denver, Colorado"
        }
        imageSrc={chiWorkshopImage}
      ></CaptionedImage>

      <CaptionedImage
        caption={
          "Sharing my design through the Instructables platform gave me the chance to remotely engage with OScH from different parts of the world."
        }
        imageSrc={instructablesImage}
      ></CaptionedImage>

      <CaptionedImage
        caption={
          "Components of the DIY incubator kit including the custom made PCB and 3D printed safety enclosure designed by me"
        }
        imageSrc={kitImage}
      ></CaptionedImage>

      <CaptionedImage
        caption={
          "During the hands-on maker workshop conducted by me at popular makerspace in Singapore. 2016 July."
        }
        imageSrc={singaporeWorkshopImage}
      ></CaptionedImage>

      <CaptionedImage
        caption={
          "During a maker session conducted me at Genspace, a popular communuty-driven biology lab in New York City. 2017 October."
        }
        imageSrc={NYWorkshopImage}
      ></CaptionedImage>

      <CaptionedImage caption={""} imageSrc={collabImage}></CaptionedImage>

      {/* <CaptionedImage caption={""} imageSrc={worksheetImage}></CaptionedImage> */}

      <ContentSection>
        <H2>Walkie with SWAN Rehab Phoenix</H2>
        <ProjectP>
          The SWAN rehabilitation center in Phoenix, Arizona is one of the
          leading occupational therapy institutes in the region where they
          perform a number of gait recovery therapies. Their current gait
          training procedure requires a great amount of physical work from
          therapists and poses several safety issues for patients such as
          tripping. During Fall 16' semester, I collaborated with two industrial
          design students and a physical therapist to conceptualize and
          prototype a new gait training system for SWAN.
        </ProjectP>
      </ContentSection>
      <SmallImage imageSrc={walkieGIF} caption={""}></SmallImage>
      <SmallImage imageSrc={walkieConceptImage} caption={""}></SmallImage>
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pL8-kCDxCK8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      <CaptionedImage
        imageSrc={walkieSystemImage}
        caption={""}
      ></CaptionedImage>

      <ContentSection>
        <H2>Mush Lamp: Towards a Circular Economy</H2>
        <ProjectP>
          In this experimental work I collaborated with Nipuni, an industrial
          designer, to explore the possibilities and challenges of using organic
          materials to produce everyday electronic products. We built a night
          lamp using the Ecovative Grow-It-Yourself Mycelium kit by embedding
          surface mount LEDs into the material and letting it grow snuggly
          around the LEDs. We speculated on future possibilities of producing
          biodegradable, everyday electronic products using a biomaterial.
        </ProjectP>
      </ContentSection>
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://vimeo.com/251688435"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://player.vimeo.com/video/251688435"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      <ContentSection>
        <H2>Blip : Water Conservation through Real Time Nudges</H2>
        <ProjectP>
          Blip is a home IOT platform conceptualized by Nipuni Siyambalapitiya
          to nudge people to conserve water through real-time feedback. I built
          3 experience prototypes of her concept to help her explore how people
          would react to such a system.
        </ProjectP>
        <a target="_blank" href={"https://www.nipunidesign.com/blip"}>
          <strong>
            <u> Visit Nipuni's portfolio</u>
          </strong>
        </a>
      </ContentSection>

      <CaptionedImage
        caption={"A low-fidelity prototype of the system built by Nipuni"}
        imageSrc={blipImage}
      ></CaptionedImage>

      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IHC9IfN1Uq8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      <ContentSection>
        <H2>Decibel 360</H2>
        <ProjectP>
          Decibel 130 is a discrete, zero-contact and non-lethal self defense
          concept developed by industrial designer Kevin Chapanian. Decibel 130
          relies on the element of surprise while drawing the attention of
          people in the surroundings through emitting an acute sound alarm to
          deter aggressors. I designed the electronic circuit and custom PCB of
          the miniaturized acute sound emitting capsuled from scratch to realize
          Kevin's product concept.
        </ProjectP>
        <a
          target="_blank"
          href={"http://kevinchapanian.com/index.php/portfolio/decibel-2-2/"}
        >
          <strong>
            <u> Visit Kevin's portfolio</u>
          </strong>
        </a>
      </ContentSection>

      <CaptionedImage
        caption={"Decible-130 concept by Kevin Chapanian"}
        imageSrc={decibleScenarioImage}
      ></CaptionedImage>

      <CaptionedImage caption={""} imageSrc={decible3Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={heroImage}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={decible1Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={decible2Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={decible4Image}></CaptionedImage>

      <ContentSection>
        <H2>Prototyping 2050 : Guest Lecture Series</H2>
      </ContentSection>

      <CaptionedImage caption={""} imageSrc={p5Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={p6Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={p4Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={p1Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={p2Image}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={p3Image}></CaptionedImage>
    </ProjectContainer>
  );
}

// <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/pL8-kCDxCK8"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;

//https://vimeo.com/251688435
