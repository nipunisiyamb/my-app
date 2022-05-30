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
import { JojoData } from "./JojoData";

import observingPlayImage from "./assets/observation.jpg";
import FullwidthImage from "../../ui/fullwidthImage/FullwidthImage";
import secondaryResearch from "./assets/emotion_map_animated.gif"
import toyMarketImage from "./assets/market.png"
import bookeletRenderImage from "./assets/bookled_render.png"
import initialSketchesImage from "./assets/initial-sketches.jpg"
import expertImage from "./assets/expert_interview.jpg"
import toyDimensionImage from "./assets/toy_dimension.jpg"
import prototypeOneImage from "./assets/prototype_1.jpg"
import prototypeTwoImage from "./assets/prototype_2.jpg"
import prototypeThreeImage from "./assets/prototype_3.jpg"
import museumPrototype from "./assets/musuem_prototypes.jpg"
import kidsImage from "./assets/museum_photos.jpg"
import finalSketches from "./assets/final_sketches.jpg"
import partsRendering from "./assets/jojo_parts.jpg"
import storyImage from "./assets/story.jpg"



const projectColorTheme = {
    primary: "#8D498A",
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

export default function Jojo(props: {}) {
    return (
        <ProjectContainer>
            <TopBar></TopBar>
            <HeroImage src={JojoData.heroImage}></HeroImage>
            <SummerySection>
                <Title>{JojoData.title}</Title>
                <ProjectP>
                    In this project I explored how emotional competence can be developed in children through open-ended play. I iteratively developed a play-kit that facilitates building characters with emotions, expressing emotions through storytelling and playing with parents,care-givers or older siblings. The play-kit was tested during the family day at i.d.e.a museum, Mesa AZ. It is now a part of an ongoing collaboration with Arizona State University, University of Southern California, Arizona local public schools and community colleges and several nonprofits.
                </ProjectP>

                <H3>Project type</H3>
                <ProjectP>
                    Masters studio final project (individual)
                </ProjectP>

                <H3>Duration</H3>
                <ProjectP>6 months (Jan 2020 - June 2020)</ProjectP>
            </SummerySection>

            <FullwidthImage imageSrc={bookeletRenderImage}></FullwidthImage>
            <ContentSection>
                <H2>The design challenge</H2>
                <ProjectP>Learning to express and manage emotions is a key part of early childhood development. On the other hand, open-ended play allows kids to creatively explore the world around them in their own unique ways.
                    “How might we design a toy to encourage creative emotional expression in 2 to 5 year olds through open-ended play?”
                </ProjectP>
            </ContentSection>

            <ContentSection>
                <H2>Starting with secondary research on social emotional learning </H2>
                <ProjectP>
                    From the onset of this project, I was curious to learn about the fundamentals of early childhood development and previous work on emotional competence of kids. During the first 2 weeks, I conducted secondary research on social emotional learning of preschoolers and created a visual summary of my learnings.
                </ProjectP>
            </ContentSection>
            <FullwidthImage imageSrc={secondaryResearch}></FullwidthImage>

            <ContentSection>
                <H2>Exploring open ended play through naturalistic observations</H2>
                <ProjectP>
                    In parallel to conducting secondary research, I visited ASU Child Development Lab, a dedicated research facility and a day-care space for early childhood development to observe children during their outdoor open play time. Through courtroom style sketches, I documented my observations highlighting key elements of open-ended play.
                </ProjectP>
            </ContentSection>
            <FullwidthImage imageSrc={observingPlayImage}></FullwidthImage>

            <ContentSection>
                <H2>Understanding the current toy market</H2>
                <ProjectP>
                    In addition to design research activities, I also conduct a brief market research to understand the current toy market and identify the market gap I want to address through this project.
                </ProjectP>
            </ContentSection>
            <FullwidthImage imageSrc={toyMarketImage}></FullwidthImage>

            <ContentSection>
                <H2>
                    Visual brainstorming of forms </H2>
                <ProjectP>
                    Now with a strong understanding of the design challenge, I started to brainstorm forms that my toy can take. Being a visual thinker, I made a number of sketches as my mind wandered free.
                </ProjectP>
            </ContentSection>
            <FullwidthImage imageSrc={initialSketchesImage}></FullwidthImage>


            <ContentSection>
                <H2>Getting expert feedback on practical concerns of designing toys</H2>
                <ProjectP>
                    I showed my initial sketches to Dena Milliron, the Education Curator of i.d.e.a museum, a major children’s museum in Arizona. Her feedback highlighted key concerns to be aware of when designing for preschoolers such as minimum dimensions to prevent choking.
                </ProjectP>
            </ContentSection>
            <CaptionedImage caption={""} imageSrc={expertImage}></CaptionedImage>
            <CaptionedImage caption={""} imageSrc={toyDimensionImage}></CaptionedImage>

            <ContentSection>
                <H2>
                    Building physical prototypes
                </H2>
                <ProjectP>
                    Then I started building physical prototypes of my initial ideas of the toy in our design studio using foam, wood, play-doh and custom 3-D printed parts.
                </ProjectP>
            </ContentSection>
            <CaptionedImage caption={""} imageSrc={prototypeOneImage}></CaptionedImage>
            <CaptionedImage caption={""} imageSrc={prototypeThreeImage}></CaptionedImage>



            <ContentSection>
                <H2>
                    Testing with kids, parents and caregivers at a play session
                </H2>
                <ProjectP>
                    After multiple rounds of prototyping, I organized a testing session at i.d.e.a museum with the help of colleagues.  I named my toy “Jojo”. We set up a table saying 'Come play with Jojo'. Children, parents and caretakers were given the opportunity to freely explore the material provided which include 3-D printed parts with magnets embedded, different sets of 'eyes' painted on turned wood shapes, wheel sets repurposed from old toys and Play Doh.
                </ProjectP>
            </ContentSection>
            <CaptionedImage caption={""} imageSrc={museumPrototype}></CaptionedImage>
            <CaptionedImage caption={""} imageSrc={kidsImage}></CaptionedImage>



            <ContentSection>
                <H2>
                    Iteratively refining the final form
                </H2>
                <ProjectP>
                    By incorporating the learnings from the play session at the museum, I continued to iterate on the form of the toy. I developed the final digital models and renderings showcasing the finished look and feel of the toy.
                </ProjectP>
            </ContentSection>
            <CaptionedImage caption={""} imageSrc={finalSketches}></CaptionedImage>
            <CaptionedImage caption={""} imageSrc={prototypeTwoImage}></CaptionedImage>
            <CaptionedImage caption={""} imageSrc={partsRendering}></CaptionedImage>



            <ContentSection>
                <H2>
                    Designing a storytelling guide book to scaffold emotional expression
                </H2>
                <ProjectP>
                    Throughout my exploration, I noted storytelling as an integral part of open-ended play. I observed kids and caretakers always bond around imaginary stories they share about the Jojo character they made.
                    Identifying storytelling as an opportunity to scaffold creative expression using Jojo, I designed a booklet with a story about different emotions of Jojo.
                </ProjectP>
            </ContentSection>
            <FullwidthImage imageSrc={storyImage}></FullwidthImage>

            <ContentSection>
                <H2>
                    Next steps
                </H2>
                <ProjectP>
                    My work with Jojo expanded into an ongoing collaboration with Arizona State University, University of Southern California, Arizona local public schools and community colleges and several nonprofits to implement child-care centers for homeless families and children to heal through play.
                </ProjectP>
            </ContentSection>


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
