import React from "react";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { colorTheme, H3, P } from "../../../theme/Styles";
import { ProjectP } from "../../projects/styles";

const ImageContainer = styled.div<{ size: number }>`
  width: ${(props) => (props.size == 2 ? 45 : 30)}vw;
  height: 20vw;
  overflow: hidden;

  @media ${devices.mobile} {
    width: 80vw;
    height: auto;
  }
`;

const Image = styled.img<{ size: number }>`
  width: ${(props) => (props.size == 2 ? 45 : 30)}vw;

  /* width: aut0; */
  height: auto;
  transition: transform 0.5s;
  @media ${devices.mobile} {
    width: 80vw;
    height: auto;
  }
`;

const Title = styled(H3)<{ size: number }>`
  margin-top: 1.5vw;
  width: ${(props) => (props.size == 2 ? 33 : 30)}vw;

  @media ${devices.mobile} {
    width: 80vw;
    margin-top: 4vw;
  }
`;

const Container = styled.div<{ size: number }>`
  width: ${(props) => (props.size == 2 ? 45 : 30)}vw;
  // border-bottom: 2px solid ${colorTheme.lightBlue};
  height: 34vw;
  cursor: pointer;
  margin-bottom: 5vw;

  &:hover ${Image} {
    transform: scale(1.1);
  }

  @media ${devices.mobile} {
    width: 80vw;
    height: auto;
    padding-bottom: 6vw;
    margin-bottom: 15vw;
  }
`;

const SkillContainer = styled.div`
  width: 100%;
  max-width: 40vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1vw;

  @media ${devices.mobile} {
    max-width: 100%;
    margin-top: 4vw;
  }
`;

const Skill = styled(P)`
  font-size: 0.8vw;
  font-weight: 500;
  padding: 0.3vw 0.8vw;
  margin-right: 0.8vw;
  margin-top: 0.8vw;
  border-radius:0.5vw;

  background-color: ${colorTheme.lightBlue};

  @media ${devices.mobile} {
    font-size: 3.5vw;
    padding: 0.4vw 0.8vw;
    margin-right: 1.5vw;
    margin-top: 1.5vw;
  }
`;

export default function ProjectCard(props: {
  size: number;
  title: String;
  imageSrc: string;
  skills: string[];
  onClick: () => void;
}) {
  return (
    <Container size={props.size} onClick={() => props.onClick()}>
      <ImageContainer size={props.size}>
        <Image size={props.size} src={props.imageSrc}></Image>
      </ImageContainer>
      <Title size={props.size}>{props.title}</Title>
      <SkillContainer>
        {props.skills.map((skill, index) => {
          return <Skill>{skill}</Skill>;
        })}
      </SkillContainer>
    </Container>
  );
}
