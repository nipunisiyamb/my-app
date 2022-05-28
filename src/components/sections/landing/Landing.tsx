import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { H2, P, Page } from "../../../theme/Styles";
import GoToTop from "../../ui/gotoTop/GoToTop";
import Link from "../../ui/link/Link";
import TopBar from "../../ui/topBar/TopBar";
import AboutMe from "../aboutme/AboutMe";
import Portfolio from "../portfolio/Portfolio";
import Resume from "../resume/Resume";
import profileImage from "./assets/piyum.jpg";

const Container = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${devices.mobile} {
    height: auto;
  }
`;

const WelcomeText = styled(H2)`
  width: 32vw;
  margin: 0;
  margin-bottom: 1.2vw;
  @media ${devices.mobile} {
    width: 100vw;
    font-size: 6vw;
    margin-bottom: 3vw;
    margin-top: 3vw;
  }
`;

const Intro = styled(P)`
  width: 30vw;
  margin: 0;
  margin-bottom: 2vw;
  @media ${devices.mobile} {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 33vw;
  height: 20vw;
  overflow: hidden;
  margin-bottom: 3vw;
  @media ${devices.mobile} {
    width: 80vw;
    height: auto;
    margin-top: 10vw;
  }
`;

const Image = styled.img`
  margin: auto;
  width: 35vw;
  @media ${devices.mobile} {
    width: 80vw;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media ${devices.mobile} {
    margin-top: 4vw;
    flex-direction: column;
    width: 32vw;
    height: 30vw;
    justify-content: space-between;
    margin-bottom: 15vw;
  }
`;

export default function Landing(props: RouteComponentProps<any>) {
  const onProjectClick = (projectKey: string) => {
    props.history.push("/project/" + projectKey);
    // alert(projectKey);
  };

  const [showGoToTop, setshowGoToTop] = useState(false);

  useEffect(() => {
    var s = document.getSelection();
    setshowGoToTop(window.pageYOffset > window.innerHeight * 2);
    window.onscroll = () => {
      setshowGoToTop(window.pageYOffset > window.innerHeight * 2);
    };
  }, []);

  return (
    <div>
      <Page>
        {showGoToTop && <GoToTop />}
        <Container>
          <section id="home">
            <ImageContainer>
              <Image src={profileImage} alt="dfdf"></Image>
            </ImageContainer>
            <WelcomeText>Hi, I'm Nipuni Siyambalapitya</WelcomeText>
            <Intro>
              I’m an interaction designer/researcher with a strong background in
              software engineering and digital-physical prototyping. I completed
              my PhD in Human Computer Interaction at Arizona State University
              in December 2020.
            </Intro>
            <LinkContainer>
              <a href="#portfolio">
                <Link text={"See my work"}></Link>
              </a>
              {/* <Link text={"More about me"}></Link>
            <Link text={"View Resume"}></Link> */}

              <a href="#aboutme">
                <Link text={"More about me"}></Link>
              </a>
              <a href="#resume">
                <Link text={"View resume"}></Link>
              </a>
            </LinkContainer>
          </section>
        </Container>
      </Page>
      <Portfolio
        onProjectClick={(key: string) => onProjectClick(key)}
      ></Portfolio>
      <AboutMe></AboutMe>
      <Resume></Resume>
    </div>
  );
}
