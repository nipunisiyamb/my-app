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
import { DesignStudioData } from "./DesignStudioData";

import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";

import humanFactorsImage from "./assets/human_factors.jpg"
import learningAbilitiesImage from "./assets/learning_abilities.jpg"
import collaborationImage from "./assets/collaboration.jpg"
import playStationImage from "./assets/play_station_artwork.jpg"

const Title = styled(H1)`
  width: 51vw;
  margin-bottom:1.1vw;
  color:#ce813d;
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

export default function DesignStudio(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={DesignStudioData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{DesignStudioData.title}</Title>
        <ProjectP>
          Having dabbled in mentoring and coaching choirs in the past, I joined the faculty of Arizona State University during the pandemic to further explore my role as an educator.
        
          During this time, I designed curricula for Human Factors in Design and Design for Ecology & Equity. I also taught industrial design studios at the undergraduate and graduate levels. These courses were all adapted to suit a hybrid (in-person and remote) model of teaching.
        </ProjectP>

        <H3>Duration</H3>
        <ProjectP>2 years (August 2020 - June 2022)</ProjectP>
      </SummerySection>

      <ContentSection>
        <H2>Facilitating hands-on reflections for Human Factors fundamentals</H2>
        <ProjectP>
          While teaching Human Factors, a core module in ASU’s industrial design curriculum, I put great emphasis on learners having a solid understanding of the fundamentals of the subject. To make this learning experience effective and enjoyable, I designed activities where students were asked to rethink everyday objects, such as a TV remote, using paper and PlayDoh.
          Through semi-structured instructions on activity sheets, I prompted them to critically reflect on the usability of their objects and the cognitive load imposed on the users.
        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={humanFactorsImage}></CaptionedImage>

      <ContentSection>
        <H2>Fitting classroom activities to diverse learning abilities</H2>
        <ProjectP>
          The industrial design studio classes I taught consisted
          of students with diverse learning abilities. I explored how traditional design methods can be adapted to suit their needs. For example, during group discussions key points were first written down on sticky notes. This was to make sure that students who are hard of hearing had an equal opportunity to actively engage in the discussion.
        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={learningAbilitiesImage}></CaptionedImage>

      <ContentSection>
        <H2>Easing students back to in-person learning through ‘Play Dates’</H2>
        <ProjectP>
          After major pandemic restrictions were lifted, I took initiative to organize fun and playful activities to help students to break away from zoom-fatigue and ease into in-person collaborations. As part of this initiative, we hosted cross- studio meetups called ‘Play Dates’ where students were encouraged to freely experiment or ‘play test’ each other’s prototypes and share feedback.
        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={collaborationImage}></CaptionedImage>

      <ContentSection>
        <H2>Reducing the stigma surrounding industrial design prototyping</H2>
        <ProjectP>
          Industrial design prototyping is often associated with hard materials and high-skill processes such as foam modeling, CNC milling and 3D printing. After having lost access to these facilities and knowledge during the pandemic, I noticed that students were struggling to give their ideas a physical form. Furthermore, students refrained from prototyping until their ideas were finalized, due to fear of failure.
          Therefore, I wanted to re-introduce prototyping as
          an act of experimentation; something you can fail at with very little consequences. </ProjectP>
        <ProjectP>
          The first step was to make Lego bricks, PlayDoh, craft paper, origami sheets - simple materials you’d play with in kindergarten - readily available in the studio. For this we prototyped
          a ‘Play Station,’ a space where students could easily access these materials and also share their prototypes for asynchronous feedback.
        </ProjectP>
        <ProjectP>
          Second, I used extracts from Doug Stowe’s work,
          the Wisdom of the Hands, and Stuart Brown’s Play: How it Shapes the Brain, Opens the Imagination, and Invigorates the Soul to discuss the benefits of playful prototyping with the students.        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={playStationImage}></CaptionedImage>

    </ProjectContainer>
  );
}
