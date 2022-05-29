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
import { PhoenixTransitData } from "./PhoenixTransitData";

import affinityImage from "./assets/affinity.png";
import fiveminImage from "./assets/5min.png";
import observationImage from "./assets/n_observation.jpg";
import presentationImage from "./assets/presentation.jpg";
import backlogImage from "./assets/backlog.png";
import roadsideImage from "./assets/roadside.jpg";

import collegeImage from "./assets/college.jpg";
import moveInImage from "./assets/move.jpg";
import cardsImage from "./assets/cards.jpg";

import rapidImage from "./assets/rapid.jpg";
import experience from "./assets/experience_transit.jpg";
import expertinterview from "./assets/expert_interview.jpeg"; 
import rapidinterview from "./assets/n_rapid_interview.jpeg";


// import slideDeckFile from "./assets/TeamShift.pdf";

import FullwidthImage from "../../ui/fullwidthImage/FullwidthImage";
import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";

const Title = styled(H1)`
  width: 47vw;
  @media ${devices.mobile} {
    width: 75vw;
  }
`;

export default function PhoenixTransitBody(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={PhoenixTransitData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{PhoenixTransitData.title}</Title>
        <ProjectP>
          The population of Phoenix, Arizona is booming. The city welcomes new
          residents each year at a rate higher than any other city in the US.
          How can we make Phoenix public transport attractive to its current and
          future residents? Through a 3-week long design sprint, we developed
          strategic directions to unify the payment experience, introduce
          commuter friendly services and implement effective communication
          campaigns.
        </ProjectP>

        <H3>Project Type</H3>
        <ProjectP>Student Design Competition</ProjectP>

        <H3>Awards</H3>
        <ProjectP>Best Design Strategy and Presentation, Awarded by Valley Metro Phoenix </ProjectP>

        <H3>Team</H3>
        <ProjectP>
          I worked with Piyum Fernando a PhD student from the
          School of Arts, Media and Engineering at Arizona State University.{" "}
        </ProjectP>

        <H3>My Role</H3>
        <ProjectP>
         I conducted design research including scanning popular media for public transit trends, analysing reports by Valley Metro, conducting interviews with transport experts, and
         conducting rapid interviews with transit users and non-users. After creating a strategy targeting daily commuters, I designed visualizations of 
         all the proposed user touchpoints.  


        </ProjectP>

        <H3>Duration</H3>
        <ProjectP>3 weeks (January 2020)</ProjectP>
      </SummerySection>

      <ContentSection>
        <H2>Week 1: Getting to know the Phoenix Transit system</H2>
        <ProjectP>
          We started the design sprint by travelling around the city by light
          rail and public buses to have a first-hand experience of the current
          system. In parallel, we conducted secondary research by referring
          annual reports, surveys and various other publications related to
          Phoenix public transit.
        </ProjectP>
      </ContentSection>
      <FullwidthImage imageSrc={observationImage}></FullwidthImage>

      <ContentSection>
        <H2>Week 2: Expert Interviews & “Five minutes for Transit” Rapid Interviews</H2>
        <ProjectP>
          In the second week, we conducted interviews with transit managers to understand the growing transport needs of Phoenix metropolitan residents. 
          Afterwards, we held rapid interview series with 20
          participants including both public transit users and non-users. We
          used a set of conversation starters printed on card stock to elicit
          quick responses from the participants. We named this interview “Five
          minutes for Transit”. Each participant was rewarded with a Starbucks
          gift card attached to their prompt. These interviews were held at car
          parks, transit stations and within our university.
        </ProjectP>
      </ContentSection>

      <CaptionedImage caption={"Expert interview with Eric Iwersen, Transit Manager, City of Tempe"} imageSrc={expertinterview}></CaptionedImage>
      <CaptionedImage caption={
          "Conversation starters with $5 gift cards which were used during the interviews to elicit quick responses"
        }
        imageSrc={fiveminImage}
      ></CaptionedImage>

      <CaptionedImage
        caption={"Conducting a rapid interview at a parking lot"}
        imageSrc={rapidinterview}
      ></CaptionedImage>

      <ContentSection>
        <H2>Week 3: Synthesizing and Ideating</H2>
        <ProjectP>
          Coming into the last week of the sprint, we had a bunch of personal
          notes collected from rapid user interviews, observations and secondary
          research. We synthesized these data by affinity diagramming and
          extracted four “how might we” questions to base our concept ideation.
        </ProjectP>
      </ContentSection>
      <FullwidthImage imageSrc={affinityImage}></FullwidthImage>

      <ContentSection>
        <H2>Presentation of Concepts</H2>
        <ProjectP>
          We selected 6 directional concepts generated from our ideation session
          and visually refined them for the presentation. We structured our
          concepts based on BJ Fogg's behavior change model. Our presentation
          won first place at the Friends of Transit 2020 student design
          competition :)
        </ProjectP>

        {/* <ProjectP>
          <a href="./assets/TeamShift.pdf" download>
            <u>
              <strong>Download the slide deck</strong>
            </u>
          </a>
        </ProjectP> */}
      </ContentSection>
      <CaptionedImage caption={"We conceptualized a unified payment card 'Cactus' that would reduce effort to onboard to the transit system"} imageSrc={cardsImage}></CaptionedImage>
      <CaptionedImage caption={"Students would get pre-charged Cactus cards with college branding during college orientation. By providing a limited but significant number of free rides, we encourage students to form the habit of riding transit"} imageSrc={collegeImage}></CaptionedImage>
      <CaptionedImage caption={"We would reach new Phoenix residents through realtors and companies"} imageSrc={moveInImage}></CaptionedImage>
      <CaptionedImage caption={"The Valley Metro system would upgrade to include amenities attractive to people commuting to work. Messaging across digital platforms would reflect this audience "} imageSrc={backlogImage}></CaptionedImage>

      <CaptionedImage caption={"Valley Metro would invest in messaging placed at key locations - such as digital displays along the freeway during rush hour"} imageSrc={roadsideImage}></CaptionedImage>

      <CaptionedImage
        caption={"During our winning presentation"}
        imageSrc={presentationImage}
      ></CaptionedImage>

      <SummerySection>
        {/* <H2>Reflections</H2> */}
        <H3>What is the most important lesson I learned from this project?</H3>
        <ProjectP>
          You can learn a lot by talking to people, even for just 5mins. If you
          don’t have much time for research, improvise.
        </ProjectP>

        <H3>What was the most challenging?</H3>
        <ProjectP>
          Finding time for side projects in the middle of doing a PhD. A bit of
          compartmentalized thinking always helped.
        </ProjectP>

        <H3>What would I do differently if I were to do this project again?</H3>
        <ProjectP>
          Nothing, given the time constraints we had. However, I’d have loved to
          run our initial concepts through some transport professionals to
          understand their business viability.
        </ProjectP>
      </SummerySection>
    </ProjectContainer>
  );
}
