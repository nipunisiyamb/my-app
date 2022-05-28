import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { colorTheme, H2, H3, P, P2, Page } from "../../../theme/Styles";
import { projectData } from "../../projects/projectData";
import Link from "../../ui/link/Link";
import ProjectCard from "../../ui/projectCard/ProjectCard";

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ResumePage = styled(Page)`
  padding-top: 2vw;
  margin-top: 2vw;
  background-color: #f8f8f8;
`;

const Section = styled.div`
  width: 50vw;
  margin: 3vw 0;

  @media ${devices.mobile} {
    width: 80vw;
    margin-bottom: 15vw;
    margin-top: 6vw;
  }

  ${H2} {
    text-transform: uppercase;
    color: ${colorTheme.grey};
    margin: 0;

    @media ${devices.mobile} {
      width: 80vw;
      font-size: 7vw;
      font-weight: 700;
    }
  }

  ul {
    margin: 0.2vw 0;
    display: none;
  }

  li {
    margin: 0.7vw 0;
  }
`;

const Entry = styled.div`
  margin-top: 0.7vw;
  margin-bottom: 2.5vw;

  @media ${devices.mobile} {
    width: 80vw;
    margin-bottom: 6vw;
    margin-top: 3vw;
  }

  ${H3} {
    margin: 0;
  }
`;

const Description = styled.div`
  margin: 0.7vw 0;
`;

export default function Resume() {
  return (
    <section id="resume">
      <ResumePage>
        <Header>
          <H2>Resume</H2>
          {/* <LinkContainer>
            <Link text={"UX Research"}></Link>
            <Link text={"Software"}></Link>
            <Link text={"Hardware"}></Link>
          </LinkContainer> */}
        </Header>

        <Section>
          <Entry>
            <H3>Piyum Fernando, PhD</H3>
            <P>piyum@thexdstudio.com</P>
            <P>+1 480 754 9043</P>
            <a href="https://www.linkedin.com/in/rexpiyum/">
              <P>
                <u>linkedin.com/in/rexpiyum/</u>
              </P>
            </a>
          </Entry>
        </Section>

        <Section>
          <H2>Education</H2>
          <Entry>
            <H3>Doctor of Philosophy (PhD) in Human Computer Interaction</H3>
            <P>
              School of Arts, Media and Engineering, Arizona State University
            </P>
            <P>
              Dissertation Title: “Nurturing Open Design: Challenges and
              Opportunities for HCI to Support Crowd-driven Hardware Design”
            </P>
            <P>Graduated in Dec 2020</P>
          </Entry>

          <Entry>
            <H3>
              Bachelor of Science in Engineering – Computer Science and
              Engineering
            </H3>
            <P>
              Department of Computer Science and Engineering, University of
              Moratuwa, Sri Lanka
            </P>
            <P>Graduated in Dec 2013</P>
          </Entry>
        </Section>

        <Section>
          <H2>WORK EXPERIENCE</H2>

          <Entry>
            <H3>Co-founder and Research Lead</H3>
            <P>XD Studio, Phoenix, AZ </P>
            {/* <a href="thexdstudio.com">
              <Link text="thexdstudio.com"></Link>
            </a> */}
            <P>June 2019 - present</P>
            <Description>
              <P>
                XD Studio is an experience design consultancy which I co-founded
                with another designer while we were in grad school to develop
                our design practice beyond academic work.
              </P>
              <ul>
                <li>
                  <P2>
                    Successfully managed multiple UX consultancy projects while
                    doing my PhD
                  </P2>
                </li>

                <li>
                  <P2>
                    Remotely led engineers, designers and policy makers across
                    time zones to rethink online education and transport policy
                    in Sri Lanka
                  </P2>
                </li>
                <li>
                  <P2>
                    Assisted stakeholders to write proposals and formulate
                    funding strategies
                  </P2>
                </li>
                <li>
                  <P2>
                    Currently working with a free medical equipment lending
                    non-profit in Phoenix to re-strategize their digital
                    presence
                  </P2>
                </li>
              </ul>
            </Description>
          </Entry>

          <Entry>
            <H3>Design Fellow</H3>
            <P>Future Cognition Collaborative, San Francisco</P>
            <P>Jun 2018 – Jul 2018</P>
            <Description>
              {/* <P>
                XD Studio is an experience design consultancy which I co-founded
                with another designer while we were in grad school to develop
                our design practice beyond academic work.
              </P> */}
              <ul>
                <li>
                  <P2>
                    Worked closely with T-Mobile top management to explore their
                    late-payment problem
                  </P2>
                </li>

                <li>
                  <P2>
                    Applied human centered design to discover and define the
                    problem from the ground up
                  </P2>
                </li>
                <li>
                  <P2>
                    Generated and prototyped humanized and empathetic
                    digital-financial solutions to reduce late payments by 50%
                    within the next 5 years
                  </P2>
                </li>
              </ul>
            </Description>
          </Entry>

          <Entry>
            <H3>Graduate Research Assistant</H3>
            <P>Social and Digital Systems Lab, Arizona State University</P>
            <P>Aug 2015 – Nov 2020</P>
            <Description>
              {/* <P>
                XD Studio is an experience design consultancy which I co-founded
                with another designer while we were in grad school to develop
                our design practice beyond academic work.
              </P> */}
              <ul>
                <li>
                  <P2>
                    Practiced participatory design with diverse stakeholders
                    from Asia, Africa, and South America
                  </P2>
                </li>

                <li>
                  <P2>
                    Authored more than 10 research publications at leading HCI
                    conferences
                  </P2>
                </li>
                <li>
                  <P2>
                    Proactively shared my research with the public through
                    non-academic style blog posts and interactive public
                    platforms
                  </P2>
                </li>
                <li>
                  <P2>
                    Served as an ex-co member of graduate students’ association
                    for 2 years
                  </P2>
                </li>
              </ul>
            </Description>
          </Entry>

          <Entry>
            <H3>HCI Research Engineer</H3>
            <P>
              Augmented Human Lab, Singapore University of Technology and
              Design, Singapore
            </P>
            <P>Jan 2014 – July 2015</P>
            <Description>
              {/* <P>
                XD Studio is an experience design consultancy which I co-founded
                with another designer while we were in grad school to develop
                our design practice beyond academic work.
              </P> */}
              <ul>
                <li>
                  <P2>
                    Designed, prototyped and tested novel digital-physical
                    interactions for future smart homes
                  </P2>
                </li>

                <li>
                  <P2>
                    Co-authored 3 research publications at leading HCI
                    conferences
                  </P2>
                </li>
                <li>
                  <P2>
                    Volunteered in managing the online ordering of research
                    materials to help fellow researchers
                  </P2>
                </li>
              </ul>
            </Description>
          </Entry>

          <Entry>
            <H3>Software Engineer</H3>
            <P>WSO2, Colombo</P>
            <P>August 2012 – December 2013 </P>
            <Description>
              {/* <P>
                XD Studio is an experience design consultancy which I co-founded
                with another designer while we were in grad school to develop
                our design practice beyond academic work.
              </P> */}
              <ul>
                <li>
                  <P2>
                    Worked with more than 10 clients around the world to
                    understand and address their software deployment challenges
                  </P2>
                </li>

                <li>
                  <P2>
                    Performed as a guitarist in company recreational events
                  </P2>
                </li>
              </ul>
            </Description>
          </Entry>
        </Section>

        <Section>
          <H2>AWARDS</H2>

          <Entry>
            <H3>Best Design Strategy and Presentation</H3>
            <P>
              Friends of Transit Student Design Competition 2020, Phoenix:
              Designed a strategy to increase transit ridership.
            </P>
          </Entry>

          <Entry>
            <H3>ASU Completion Fellowship</H3>
            <P>
              A merit-based fellowship awarded to outstanding doctoral students
              in their final year of the study based on the significance and
              impact of their research.
            </P>
          </Entry>

          <Entry>
            <H3>Creative Constellation Grant</H3>
            <P>
              A competitive monetary grant of up to 3000 USD awarded to
              exceptional design and arts students towards implementing original
              ideas that use creativity for powerful innovation and community
              impact.
            </P>
          </Entry>
        </Section>

        <Section>
          <H2>Skills</H2>
          <Entry>
            <H3>UX Design/Research Practice</H3>
            <P>
              Human Centered Design, Speculative Design, Design Fiction,
              Participatory Design, Ethnographic Field Studies, Cultural Probes,
              Focus Groups, Qualitative Interviews, Surveys, Collaborative
              Ideation and Rapid Prototyping, Developing Interactive UI mockups
            </P>
          </Entry>
          <Entry>
            <H3>Software and Hardware Development</H3>
            <P>
              Frontend: HTML, CSS, JavaScript/TypeScript, React and React Native
            </P>
            <P>
              Backend: Java, Spring, Node.js, Express, Python, MySQL, MongoDB,
              Amazon AWS and Firebase
            </P>
            <P>
              Hardware: Arduino, EagleCad (PCB Design) and Digital Fabrication
            </P>
          </Entry>

          <Entry>
            <H3>Visual Design Tools</H3>
            <P>Figma, Photoshop, Illustrator, Lightroom and Procreate</P>
          </Entry>

          <Entry>
            <H3>Languages</H3>
            <P>English (Fluent), Sinhala (Native), Tamil (Conversational)</P>
          </Entry>
        </Section>
      </ResumePage>
    </section>
  );
}
