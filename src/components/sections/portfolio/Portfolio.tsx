import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { H2, Page } from "../../../theme/Styles";
import { projectData } from "../../projects/projectData";
import Link from "../../ui/link/Link";
import ProjectCard from "../../ui/projectCard/ProjectCard";

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 4vw;
  @media ${devices.mobile} {
    display: none;
  }
`;

const PortfolioPage = styled(Page)`
  padding-top: 2vw;
  margin-top: 2vw;
  background-color: #f8f8f8;
`;

const ProjectContainer = styled.div`
  width: 80vw;
  margin-top: 2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Portfolio(props: {
  onProjectClick: (key: string) => void;
}) {
  return (
    <section id="portfolio">
      <PortfolioPage>
        <Header>
          <H2>Portfolio</H2>
          {/* <LinkContainer>
            <Link text={"UX Research"}></Link>
            <Link text={"Software"}></Link>
            <Link text={"Hardware"}></Link>
          </LinkContainer> */}
        </Header>

        <ProjectContainer>
          {Object.values(projectData).map((project, i) => (
            <ProjectCard
              size={project.size}
              title={project.data.title}
              imageSrc={
                project.data.thumbnailImage
                  ? project.data.thumbnailImage
                  : project.data.heroImage
              }
              skills={project.skills}
              onClick={() => {
                window.scrollTo(0, 0);
                props.onProjectClick(project.key);
              }}
            ></ProjectCard>
          ))}
        </ProjectContainer>
      </PortfolioPage>
    </section>
  );
}
