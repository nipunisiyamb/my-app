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
import { WizzData } from "./WizzData";

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

export default function Wizz(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={WizzData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{WizzData.title}</Title>
        <ProjectP>
          For more than 90% of Sri Lankans, English is not their first language. Yet, it is a vital skill to progress in many careers. Across the country, there are significant barriers to access affordable and effective English learning.
          In 2020, we helped a young ed-tech startup address this problem and create a mobile learning platform for career-focused English.
        </ProjectP>

        <H3>My Role</H3>
        <ProjectP>
          I primarily led the design research, content strategy and visual strategy processes. Collaborating with a UX researcher,
          language expert, English teachers and a visual designer, we developed a functional prototype of the platform for hand-off.
        </ProjectP>

        <H3>Duration</H3>
        <ProjectP>8 months (Feb 2020 - Oct 2020)</ProjectP>
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

    

      

      <ContentSection>
        <H2>Creating a visual communication system that is culturally familiar and safe </H2>
        <ProjectP>
          Our next challenge was to translate the outcomes of our design
          exploration into a mobile app based learning experience. So we
          conducted multiple wireframe design and paper prototyping sessions and
          iteratively developed them into a refined mobile app design.
        </ProjectP>
      </ContentSection>


      <ContentSection>
        <H2>Developing a functional prototype of the app</H2>
        <ProjectP>
          Then I developed a functional app prototype with a selected set of
          features using React Native and Spring/Java. The goal of this
          prototype was to demonstrate the new app design and lesson strategy
          during investor presentations.
        </ProjectP>
      </ContentSection>
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/h6GLVU2cKWQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>

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
