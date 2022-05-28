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
import { openScienceData } from "./OpenScienceData";

import incubatorImage from "./assets/inc.jpg";
import incubatorInUseImage from "./assets/osh_bio.jpg";
import chiWorkshopImage from "./assets/incubator.jpg";
import instructablesImage from "./assets/instructables.jpg";
import kitImage from "./assets/kit.jpg";
import singaporeWorkshopImage from "./assets/osh_making.jpg";
import NYWorkshopImage from "./assets/w2.jpg";
import collabImage from "./assets/collab.jpg";

import worksheetImage from "./assets/worksheet.jpg";
import Publication from "../../ui/publication/Publication";
import TopBar from "../../ui/topBar/TopBar";

const Title = styled(H1)`
  width: 47vw;
`;

export default function OpenScienceBody(props: {}) {
  return (
    <ProjectContainer>
      <TopBar></TopBar>
      <HeroImage src={openScienceData.heroImage}></HeroImage>
      <SummerySection>
        <Title>{openScienceData.title}</Title>
        <ProjectP>
          As part of my PhD research, I studied the Open Science Hardware (OScH)
          movement, a global community aimed at reducing barriers for scientific
          experimentation through the production of open-source low-cost science
          equipment.
        </ProjectP>
        <ProjectP>
          Over a period of 4 years, I have conducted a series of hardware design
          and dissemination activities, public workshops, focus group studies
          and remote qualitative interviews with open science practitioners
          around the world.
        </ProjectP>

        <ProjectP>
          My work resulted in several academic publications at major HCI
          conferences including CHI. Open-source hardware designs developed by
          me have been replicated, reused and modified by open scientists around
          the world. Most importantly, my work uncovered several barriers for
          wide-spread adoption of OScH across the globe and proposed multiple
          design solutions for addressing those.
        </ProjectP>

        <H3>Project Type</H3>
        <ProjectP>Academic research</ProjectP>

        <H3>Duration</H3>
        <ProjectP>4 years (August 2015 - August 2019)</ProjectP>

        <H3>Publications</H3>
        <Publication
          authors={"Piyum Fernando, and Stacey Kuznetsov"}
          year={"2020"}
          title={
            "OScH in the Wild:Dissemination of Open Science Hardware and Implications for HCI"
          }
          venue={
            "In CHI Conference on Human Factors in Computing Systems Proceedings (CHI’20), Honolulu, Hawaii, USA. ACM, New York, NY, USA"
          }
          fileSrc="dfdfd"
        ></Publication>
        <ProjectP>
          Piyum Fernando, and Stacey Kuznetsov. 2020. OScH in the Wild:
          Dissemination of Open Science Hardware and Implications for HCI. In
          CHI Conference on Human Factors in Computing Systems Proceedings (CHI
          ’20), Honolulu, Hawaii, USA. ACM, New York, NY, USA.{" "}
          <a href="erere">Download</a>
        </ProjectP>

        <ProjectP>
          Stacey Kuznetsov, Cassandra Barrett, Piyum Fernando, and Kat Fowler.
          2018. Antibiotic-Responsive Bioart: Exploring DIYbio as a Design
          Studio Practice. In Proceedings of the 2018 CHI Conference on Human
          Factors in Computing Systems (CHI '18). ACM, New York, NY, USA.
        </ProjectP>

        <ProjectP>
          Piyum Fernando, Matthew Pandelakis, and Stacey Kuznetsov. 2016.
          Practicing DIYBiology in an HCI Setting. In Proceedings of the 2016
          CHI Conference Extended Abstracts on Human Factors in Computing
          Systems (CHI EA '16). ACM, New York, NY, USA
        </ProjectP>
      </SummerySection>

      <ContentSection>
        <H2>Auto-ethnographic OScH practice</H2>
        <ProjectP>
          From the outset of my research, I wanted to embed myself in the
          broader open science hardware community, not only as an academic
          researcher but as an active open science hardware practitioner. In the
          process, I engaged with DIY Biology practitioners and developed an
          accurate (+/- 0.25C) and low-cost ($75) DIY incubator for their use.
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

      <ContentSection>
        <H2>Self-reflective dissemination of OScH</H2>
        <ProjectP>
          I shared my DIY incubator design (CAD files, source codes and
          electronic schematics) using multiple dissemination mediums including
          Instructables platform, maker workshops and by distributing as a
          complete DIY kit. Through this, I probed into the common practices,
          challenges and barriers pertaining to real-world dissemination of
          OScH.
        </ProjectP>
      </ContentSection>

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

      <CaptionedImage
        caption={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo fermentum tortor vulputate suscipit eu metus, dignissim. Leo fames urna vitae, integer nec semper libero malesuada. "
        }
        imageSrc={collabImage}
      ></CaptionedImage>

      <CaptionedImage
        caption={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo fermentum tortor vulputate suscipit eu metus, dignissim. Leo fames urna vitae, integer nec semper libero malesuada. "
        }
        imageSrc={worksheetImage}
      ></CaptionedImage>
    </ProjectContainer>
  );
}
