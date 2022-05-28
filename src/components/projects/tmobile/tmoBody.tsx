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
import { tmoData } from "./tmoData";

import problemImage from "./assets/problem.svg";
import graphImage from "./assets/graph.svg";
import recoveryImage from "./assets/recovery.svg";

import ideationImage from "./assets/tmobile_team_design.jpg";
import sacrificalConceptsImage from "./assets/concepts.png";
import ideationContentImage from "./assets/tmobile_ideation.jpg";
import piyumIntvwImage from "./assets/piyum_intvw.jpg";
import intvwImage from "./assets/mobile_interviews.jpg";

import keepImage from "./assets/keepthechange.jpg";

import synthesisImage from "./assets/synthesis.jpg";

import personasImage from "./assets/personas.jpg";
import frameworkImage from "./assets/framework.jpg";

import strategiesImage from "./assets/stratergies.jpg";

import wireframesImage from "./assets/wireframes.jpg";
import storyboardsImage from "./assets/storyboards.jpg";
import groupImage from "./assets/group_FCC.jpg";
import tsystemImage from "./assets/tsystem.svg";

import UIImage from "./assets/UI.jpg";
import finalImage from "./assets/mobile_loyalt.png";
import FullwidthImage from "../../ui/fullwidthImage/FullwidthImage";
import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";

const Title = styled(H1)`
  width: 45vw;
  @media ${devices.mobile} {
    width: 75vw;
  }
`;

export default function TMOBody(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={tmoData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{tmoData.title}</Title>
        <ProjectP>
          During the summer of 2018 in San Francisco, I worked with T-Mobile
          USA, a leading mobile service provider, to explore their late-payment
          problem. Here we incorporated a human centered design approach and
          conducted a series of interviews, ideation sessions and co-creation
          sessions with multiple stakeholders including late payers, on-time
          payers and T-mobile top management. In the end we came up with 6
          long-term strategic directions for T-mobile to reduce their
          late-payments by 50% within the next 5 years.
        </ProjectP>
        <H3>Team</H3>
        <ProjectP>
          I worked with two interaction designers (Tiffany Eaton and Xuan Song),
          a design researcher (Maher Kelifi), an innovation consultant(Prof.
          Haakon Faste) and a behavioral economist (Dr. David Fetherstonhaugh).
        </ProjectP>

        <H3>My Role</H3>
        <ProjectP>
          From the outset, I was involved in research planning and conducting
          user interviews and co-design activities with my teammates. In the
          latter part of the process, I led the prototyping of design concepts
          generated within our ideation sessions.
        </ProjectP>
        <H3>Duration</H3>
        <ProjectP>2 months (June 2018 - July 2018)</ProjectP>
      </SummerySection>

      <ContentSection>
        <H2> The Design Challenge</H2>
        <ProjectP>
          T-Mobile has a bill payment problem: every month, nearly 40% of its
          nearly 75 million customers are late on their bill.
        </ProjectP>
      </ContentSection>
      <CaptionedImage imageSrc={problemImage} caption={""}></CaptionedImage>

      <ContentSection>
        <H2>Understanding the T-mobile Ecosystem</H2>
        <ProjectP>
          We spent the first two weeks of the project to understand the T-mobile
          business ecosystem. We had multiple conversations with T-mobile from
          VPs to outlet managers. We took note of their service offerings,
          billing process, payment channels, reward systems and existing
          customer outreach programs.
        </ProjectP>
      </ContentSection>

      <ContentSection>
        <H2>Exploring Designing for Behavior Change</H2>
        <ProjectP>
          In parallel, we drew from David’s expertise in Behavioral Economy and
          studied several book chapters and inspiring design campaigns such as
          IDEO’s “Keep the Change” for Bank of America.
        </ProjectP>
      </ContentSection>
      <CaptionedImage
        imageSrc={keepImage}
        caption={
          "We studied several book chapters and IDEO's Keep the Change campaign to draw inspirations for our work"
        }
      ></CaptionedImage>

      <ContentSection>
        <H2>Generating Sacrificial Concepts</H2>
        <ProjectP>
          In the next step, we collaboratively generated a set of sacrificial
          concepts. We planned to use these concepts throughout the design
          process to trigger reactions from diverse stakeholders.
        </ProjectP>
      </ContentSection>

      <FullwidthImage imageSrc={sacrificalConceptsImage}></FullwidthImage>

      <ContentSection>
        <H2>Conducting Qualitative Interviews</H2>
        <ProjectP>
          We conducted in-person interviews with both late and on-time payers,
          13 participants in total. We used our “sacrificial concepts” to
          provoke reactions from interviewees and trigger insightful
          conversations.
        </ProjectP>
      </ContentSection>

      <CaptionedImage caption={""} imageSrc={piyumIntvwImage}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={intvwImage}></CaptionedImage>

      <ContentSection>
        <H2>Key Findings from the Interviews</H2>
        <ProjectP>
          We analyzed the interview transcripts both individually and
          collaboratively. From our interviews, we learnt key reasons for
          late-payments. Most importantly, we realized that not all late-payers
          are created equal; by classifying them and giving tailored offers,
          T-Mobile can increase on-time payments.
        </ProjectP>
      </ContentSection>

      {/* <CaptionedImage caption={""} imageSrc={synthesisImage}></CaptionedImage> */}

      <FullwidthImage imageSrc={graphImage}></FullwidthImage>
      <FullwidthImage imageSrc={recoveryImage}></FullwidthImage>
      <FullwidthImage imageSrc={personasImage}></FullwidthImage>
      <CaptionedImage caption={""} imageSrc={frameworkImage}></CaptionedImage>

      <ContentSection>
        <H2>Research Insights to Strategic Directions</H2>
        <ProjectP>
          We then conducted multiple collaborative ideations sessions to
          generate strategic directions for T-mobile.{" "}
          <strong>
            (To respect the rights of the client, I only sharing the outcome of
            these sessions in my portfolio).
          </strong>
        </ProjectP>
      </ContentSection>
      <FullwidthImage imageSrc={ideationImage}></FullwidthImage>

      <FullwidthImage imageSrc={ideationContentImage}></FullwidthImage>

      <FullwidthImage imageSrc={strategiesImage}></FullwidthImage>

      <ContentSection>
        <H2>Prototyping, Evaluating and Prioritizing Strategic Directions</H2>
        <ProjectP>
          We filtered out several interesting and potentially impactful ideas
          and prototyped them using storyboards, wireframes and imaginary
          marketing materials. We evaluated the business viability of these
          prototypes by conducting a co-design session with the top-management
          of T mobile.
        </ProjectP>
      </ContentSection>

      <FullwidthImage imageSrc={wireframesImage}></FullwidthImage>
      <FullwidthImage imageSrc={storyboardsImage}></FullwidthImage>

      <ContentSection>
        <H2>Final Deliverables</H2>
        <ProjectP>
          At the end we provided a strategy deck consisting of 6 refined
          strategic proposals including mobile app mockups, storyboards and
          marketing materials to generate the internal excitement within
          T-mobile.{" "}
          <strong>
            (To respect the rights of the client, I'm not sharing the final
            deliverables in detail here).
          </strong>
        </ProjectP>

        <ProjectP>
          Please note, the final slide deck was mostly prepared by Xuan, Haakon,
          David and their team. I wasn’t involved in this last bit of the
          project because I returned to Arizona to continue my PhD.
        </ProjectP>
      </ContentSection>
      <FullwidthImage imageSrc={tsystemImage}></FullwidthImage>

      <CaptionedImage caption={""} imageSrc={UIImage}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={finalImage}></CaptionedImage>
      <CaptionedImage
        caption={"The team!. I'm the one holding the soccer ball."}
        imageSrc={groupImage}
      ></CaptionedImage>

      <SummerySection>
        {/* <H2>Reflections</H2> */}
        <H3>What is the most important lesson I learned from this project?</H3>
        <ProjectP>
          This is the first project where I had the chance to work closely with
          a behavioral economist. Everything I learnt from David about behavior
          change principles was really important.
        </ProjectP>

        <H3>What was the most challenging?</H3>
        <ProjectP>
          Most challenging part was to properly evaluate the business viability
          of the ideas we generated. Co-design activities with T-mobile top
          management definitely helped in this aspect.
        </ProjectP>

        <H3>What would I do differently if I were to do this project again?</H3>
        <ProjectP>
          I would try to organize more co-design activities with T-mobile.
        </ProjectP>
      </SummerySection>
    </ProjectContainer>
  );
}
