import React from "react";
import styled from "styled-components";
import { H1, H2, H3, Page } from "../../../theme/Styles";
import CaptionedImage from "../../ui/captionedImage/CaptionedImage";
import {
  ContentSection,
  HeroImage,
  ProjectContainer,
  ProjectP,
  SummerySection,
} from "../styles";
import { sparkData } from "./SparkData";

import researchPlanImage from "./assets/research_plan.svg";
import interviewPlanImage from "./assets/intervw_plan.svg";
import interviewQuestionsImage from "./assets/interview_questions.jpg";
import surveyImage from "./assets/survey.png";
import toolImage from "./assets/tool.png";

import synSurveyImage from "./assets/syn_survey.jpg";
import synCardSortingImage from "./assets/syn_cardsorting.jpg";

import personasImage from "./assets/personas.png";
import personasSecondaryImage from "./assets/personas_secondary.png";

import insightsImage from "./assets/insights.png";

import { devices } from "../../../theme/devices";
import FullwidthImage from "../../ui/fullwidthImage/FullwidthImage";
import TopBar from "../../ui/topBar/TopBar";

const Title = styled(H1)`
  width: 57vw;
  @media ${devices.mobile} {
    width: 70vw;
  }
`;

export default function SparkBody(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={sparkData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{sparkData.title}</Title>
        <ProjectP>
          Sri Lanka has a world renowned IT industry. It continues to provide
          high quality software applications and IT services to clients across
          the world. To support the steady growth of the industry, Sri Lanka
          needs to increase the production of high quality fresh IT
          professionals. During the summer of 2020, I remotely worked with a Sri
          Lankan startup to formulate a business around this need.
        </ProjectP>
        <H3>Team</H3>
        <ProjectP>
          I worked with a team of educators, software engineers, visual
          designers, marketers and a branding agency.
        </ProjectP>

        <H3>My Role</H3>
        <ProjectP>
          My main responsibility was to plan and conduct user research to deeply
          understand the needs, aspirations and perceptions of the key user
          group (17-28 year olds with career aspirations in the IT field) and
          communicate actionable insights to strategize the business.
        </ProjectP>
        <H3>Duration</H3>
        <ProjectP>4 months (May 2020 - August 2020)</ProjectP>
      </SummerySection>

      <ContentSection>
        <H2>Reserch Planning</H2>
        <ProjectP>
          From the onset of the project, I planned my work around four research
          questions formulated based on the initial business proposition given
          to me.
        </ProjectP>
      </ContentSection>
      <FullwidthImage imageSrc={researchPlanImage}></FullwidthImage>

      <ContentSection>
        <H2>Conducting Remote Qualitative Interviews</H2>
        <ProjectP>
          I started my research by conducting a series of qualitative
          interviews. Here, I ran three rounds of remote video interviews
          (approx. 45-90 mins) with a total of 15 participants (17-28 year olds
          with career aspirations in the IT field) which allowed me to listen to
          personal stories of our target audience, understand their subjective
          perceptions as well as to collect anecdotal insights.
        </ProjectP>
      </ContentSection>
      <FullwidthImage imageSrc={interviewPlanImage}></FullwidthImage>
      <CaptionedImage
        imageSrc={interviewQuestionsImage}
        caption={
          "I prepared a semi-structured interview script with several questions to be used during the interviews"
        }
      ></CaptionedImage>

      <ContentSection>
        <H2>Conducting an Online Survey</H2>
        <ProjectP>
          Secondly, I designed and conducted an online survey to validate the
          qualitative insights gained from the interviews against a bigger
          sample. I collected 120 responses from young IT career aspirants
          across Sri Lanka. The survey results helped me decide which
          qualitative insights should be prioritized over others in the initial
          business strategy.
        </ProjectP>
      </ContentSection>
      <CaptionedImage
        imageSrc={surveyImage}
        caption={
          "Two likert-scale based questions included in the online survey. These questions were mainly based on qualitative insights from the interviews"
        }
      ></CaptionedImage>

      <ContentSection>
        <H2>Custom-designed Online Card Sorting Activity</H2>
        <ProjectP>
          In parallel to the online survey, I also implemented a custom-designed
          online card sorting activity. The goal of this activity was to better
          understand what skills are prioritized by Sri Lankan IT companies when
          they hire fresh IT professionals.
        </ProjectP>
        <ProjectP>
          <a href="https://research.thexdstudio.com/">
            <strong>Try card sorting tool</strong>
          </a>
        </ProjectP>
      </ContentSection>
      <CaptionedImage
        imageSrc={toolImage}
        caption={
          "A screenshot of the custom-designed online card sorting activity"
        }
      ></CaptionedImage>

      <ContentSection>
        <H2>Synthesizing Research Data</H2>
        <ProjectP>
          I started the data synthesis by thematically clustering key quotes and
          my personal notes from the interviews. Then, I cross-validated these
          thematic insights against the quantitative data from the surveys. The
          quantitative data from the online card sorting activity was quite
          straightforward. However, it also opened up several areas to be
          qualitatively explored in the future. Overall, I looked to uncover
          actionable opportunities from the research data which can impact the
          strategy of the business.
        </ProjectP>
      </ContentSection>
      <FullwidthImage imageSrc={synSurveyImage}></FullwidthImage>
      <FullwidthImage imageSrc={synCardSortingImage}></FullwidthImage>

      <ContentSection>
        <H2>Research to Strategy: Presenting Insights</H2>
        <ProjectP>
          In presenting the research findings, my goal was to provide a
          framework to be used by the team for strategizing different aspects of
          the business, especially after I leave the project. Therefore, I
          created a set of personas that logically represent key stakeholders
          and several visualizations to present the research insights in
          interesting and meaningful ways.
        </ProjectP>
      </ContentSection>
      <CaptionedImage caption={""} imageSrc={personasImage}></CaptionedImage>
      <CaptionedImage
        caption={""}
        imageSrc={personasSecondaryImage}
      ></CaptionedImage>

      <CaptionedImage caption={""} imageSrc={insightsImage}></CaptionedImage>

      <SummerySection>
        <H3>What is the most important lesson I learned from this project?</H3>
        <ProjectP>
          It is always good to cross-validate your qualitative findings against
          a larger population through a survey. It helps you to present your
          findings with more confidence.
        </ProjectP>

        <H3>What was the most challenging?</H3>
        <ProjectP>
          For most of the project, I felt that the team operated on hunches and
          preconceived beliefs without waiting for the research activities
          finish. It was extremely challenging to get them to slow down and
          critically think and act based on research insights, before they make
          costly decisions.
        </ProjectP>

        <H3>What would I do differently if I were to do this project again?</H3>
        <ProjectP>
          I would have loved to do some training sessions with the team to
          introduce concepts such as the double-diamond design process,
          human-centered design and lean startup principles at the very
          begining.
        </ProjectP>
      </SummerySection>
    </ProjectContainer>
  );
}
