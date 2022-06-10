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
import { WizzData } from "./WizzData";

import initialBriefImage from "./assets/initial_brief.svg";
import papersImage from "./assets/papers.jpg";

import barriersImage from "./assets/barriers.svg";
import redefinedBriefImage from "./assets/redefined_brief.svg";
import quotesImage from "./assets/quotes.svg";
import frameworkImage from "./assets/framework.svg";

import industryImage from "./assets/industry.jpg";
import industry2Image from "./assets/industry2.jpg";

import elementsImage from "./assets/elements.png";
import spaceImage from "./assets/space.svg";

import visualsImage from "./assets/visuals.jpg";
import refinedvisualsImage from "./assets/refinedvisuals.jpg";
import digitalSketchingImage from "./assets/digital.jpg";

import lowfiImage from "./assets/lowfi.jpg";
import midfiImage from "./assets/midfi.jpg";
import iconImage from "./assets/icon.jpg";
import paperImage from "./assets/paper.jpg";
import mockupImage from "./assets/mockup.jpg";

import teamImage from "./assets/team.svg";

import FullwidthImage from "../../ui/fullwidthImage/FullwidthImage";
import TopBar from "../../ui/topBar/TopBar";
import { devices } from "../../../theme/devices";

import wizzIconsImage from "./assets/wizz_icons.jpg";
import startingbrief from "./assets/n_starting_brief.svg";
import guirillacards from "./assets/g_cards.jpg";
import barriers from "./assets/n_barriers.svg";
import interviewquotes from "./assets/n_quotes.svg";
import wizzsystem from "./assets/wizz_system.png";
import spacedrep from "./assets/spaced_rep_new.svg";
import visualc from "./assets/visuals.svg";

import userinterfaces from "./assets/UI_sketches.jpg";
import iconsevolution from "./assets/icon_evolution_3.svg";
import scenariodev from "./assets/scenario_dev.svg";
import micro_int_1_video from "./assets/micro_int_1.mp4";
import CaptionedVideo from "../../ui/video/CaptionedVideo";
import micro_int_2_video from  "./assets/micro_2.mp4";
import wizzplan from "./assets/Wizz_project_plan.svg";
import insights from "./assets/insights.svg";
import interviews from "./assets/industry_interviews.png";
import { Caption } from "react-bootstrap/lib/Carousel";
import designprinciples from "./assets/design_principles.svg";
import UserProfile from "./assets/user_profiles.svg";





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
          I primarily led the design research, content strategy and visual strategy processes. Collaborating with a
          language expert, an interaction designer, a developer and English teachers we developed a functional prototype of the platform for hand-off.
        </ProjectP>

        <H3>Duration</H3>
        <ProjectP>8 months (Feb 2020 - Oct 2020)</ProjectP>
      </SummerySection>

      <FullwidthImage imageSrc={mockupImage}></FullwidthImage>

      <ContentSection>
        <ProjectH2>Context and Starting Brief</ProjectH2>
        <ProjectP>
          A young Sri Lankan startup which entered the English e-learning market a few years ago wanted to rethink the user experience of
          their existing mobile app as they were failing to retain users and completion rates were very low.
        </ProjectP>
      </ContentSection>
      <CaptionedImage
        caption={""}
        imageSrc={startingbrief}
      ></CaptionedImage>
      <ContentSection>
        <ProjectH2>Project Planning</ProjectH2>
        <ProjectP>
          Since this was a complex project with many moving parts and team members across the US and Sri Lanka, we created a 
          rough visual map of our project plan and shared it with our team and our client. 
        </ProjectP>
      </ContentSection>
      <CaptionedImage
        caption={""}
        imageSrc={wizzplan}
      ></CaptionedImage>

      <ContentSection>
        <ProjectH2>Conducting secondary research and qualitative interviews </ProjectH2>
        <ProjectP>
          We started by exploring the motivations of the Sri Lankans for learning English and the barriers they are facing. We reviewed a large body of previous research
          findings, remotely interviewed 6 existing users, and conducted rapid guerrilla interviews with 6 participants selected through convenience sampling.
        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={"A snapshot from our secondary research review"} imageSrc={papersImage}></CaptionedImage>
      <CaptionedImage caption={"Conversation starters that we used in guerrilla interviews"} imageSrc={guirillacards}></CaptionedImage>
      <CaptionedImage caption={"Four of our key insights, simply illustrated to share with our team"} imageSrc={insights}></CaptionedImage>
   

      <ContentSection>
        <H2>Reframing the problem</H2>
        <ProjectP>
          Our overarching insight was that peoples’ motivations to learn English significantly
          relate to their aspirations to excel in their careers; from finding a
          good job to getting promoted frequently. With this insight, we
          redefined the brief to focus on building a learning platform that
          helps people to learn career-focused English skills.
        </ProjectP>
      </ContentSection>
      <CaptionedImage
        caption={""}
        imageSrc={redefinedBriefImage}
      ></CaptionedImage>
      <ContentSection>
        <H2>Exploring the reframed problem with a multidisciplinary team</H2>
        <ProjectP>
          Our team explored the many facets of the design problem using the following subproblems. I led qualitative interviews with industry segments, explored English learning essentials with teachers,
          structured new content, and developed a new visual style.
        </ProjectP>
      </ContentSection>
      <FullwidthImage imageSrc={frameworkImage}></FullwidthImage>
      <CaptionedImage caption={"Finding commanalities between English requirements of different industries"} imageSrc={interviews}></CaptionedImage>
      <CaptionedImage caption={"Finding patterns in key technical components of English learning through online whiteboarding sessions"} imageSrc={elementsImage}></CaptionedImage>
      <CaptionedImage caption={"To distill our findings at this stage into actionable directions, we created 6 Design Principles. These were the foundation of our subsequent explorations"} imageSrc={designprinciples}></CaptionedImage>
      {/* <CaptionedImage caption={"Through our auto-ethnographic study with existing language learning apps, we realized that spaced repition is a great way to help learners get better gradually"} imageSrc={spacedrep}></CaptionedImage> */}

      <ContentSection>
        <H2>Identifying early adapters</H2>
        <ProjectP>
         Qualitative interviews with existing users and the guerrilla interviews conducted helped us understand 
         the motivations and needs of people who might adapt the new English learning platform. Using this data, I illustrated 4 user profiles to present our key users' 
         dreams, hopes, fears and needs. They were in the room with us as we conceptualized app features, lesson content and lesson progressions. 
        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={UserProfile}></CaptionedImage>



      {/* <FullwidthImage imageSrc={refinedvisualsImage}></FullwidthImage> */}
      <ContentSection>
        <H2>Creating a visual communication system that is culturally familiar and safe </H2>
        <ProjectP>
          We wanted to create a visual communication system that supported a joyful learning experience. In order to achieve this
          it was important that the elements and styles we used provided a comfortable and familiar visual landscape. We also developed an icon system that denoted
          the different lesson segments - grammar, vocabulary etc - in lieu of written terms, as these terms often have prior stigma associated with them.
        </ProjectP>
      </ContentSection>


      <CaptionedImage caption={""} imageSrc={visualc}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={digitalSketchingImage}></CaptionedImage>
      <CaptionedImage caption={"Developing culturally familiar situations, attire, faces and names"} imageSrc={scenariodev}></CaptionedImage>
      <CaptionedImage caption={""} imageSrc={iconImage}></CaptionedImage>
      <CaptionedImage caption={"The exploration of icons to break away from the stigma of written terms"} imageSrc={iconsevolution}></CaptionedImage>

      <ContentSection>
        <H2>Developing mobile interfaces</H2>
        <ProjectP>
          Our next challenge was to translate the outcomes of our design
          exploration into a mobile app based learning experience. So we
          conducted multiple wireframe design and paper prototyping sessions and
          iteratively developed them into a refined mobile app design.
        </ProjectP>
      </ContentSection>

      <CaptionedImage caption={""} imageSrc={lowfiImage}></CaptionedImage>
      <FullwidthImage imageSrc={userinterfaces}></FullwidthImage>
      <CaptionedImage caption={""} imageSrc={paperImage}></CaptionedImage>


      <ContentSection>
        <H2>Designing a microinteraction for translation</H2>
        <ProjectP>
          Our next challenge was to make sure that learners got meaningful translation support.
          We wanted to find the sweet spot where they would understand the content in their native language, and yet be pushed to read and comprehend in English.
          For this we explored what a microinteraction for translation might look and work like.
        </ProjectP>
      </ContentSection>
      <CaptionedVideo videoSrc={micro_int_1_video}></CaptionedVideo>
      <CaptionedVideo videoSrc={micro_int_2_video}></CaptionedVideo>





      <ContentSection>
        <H2>Developing a functional prototype of the app</H2>
        <ProjectP>
          Finally I handed off the Figma workspace to the developer to create a  \functional prototype to present to the client. 
          The goal of this prototype was to demonstrate the new app design and lesson strategy during investor presentations.
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
        <H2>Reflections</H2>
        <H3>What is the most important lesson I learned from this project?</H3>
        <ProjectP>
        I learnt how to translate research findings into a business strategy and then translate that into visual and content strategies. This process helped me understand the different mindsets I need to have when switching between roles. 

        </ProjectP>

        <H3>What was the most challenging?</H3>
        <ProjectP>
        Conducting remote interviews across time zones while doing my full-time masters.

        </ProjectP>

        <H3>What would I do differently if I were to do this project again?</H3>
        <ProjectP>
        I would explore more visual styles at the beginning of the project and test them out with the target user group. 

        </ProjectP>
      </SummerySection>
    </ProjectContainer>
  );
}
