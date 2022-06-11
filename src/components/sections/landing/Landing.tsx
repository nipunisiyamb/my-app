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
import profileImage from "./assets/nipuni_profile.png";

const Container = styled.div`
  height: 98vh;
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
  font-size:1.8vw;
  color:#D93690;
  @media ${devices.mobile} {
    width: 60vw;
    font-size: 7.2vw;
    margin-bottom: 3vw;
    margin-top: 3vw;
  }
`;

const Intro = styled(P)`
  width: 30vw;
  margin: 0;
  margin-bottom: 2vw;
  @media ${devices.mobile} {
    width:75vw;
  }
`;

const Divider = styled.div`
  width:95vw;
  display:flex;
  align-items:flex-end;
  flex-direction: row-reverse;
  margin-bottom:5vw;

  @media ${devices.mobile} {
    flex-direction:column;
    align-items:center;
    width:90vw;
  }
`;


const ImageContainer = styled.div`
  width: 62vw;
  display:flex;
  justify-content:flex-end;
  // height: 20vw;
  // overflow: hidden;
  @media ${devices.mobile} {
    width: 100vw;
    height: auto;
    margin-top: 10vw;    
    margin-bottom: 10vw;

  }
`;

const Image = styled.img`
  margin: auto;
  margin-right:10vw;
  width: 75vw;
  @media ${devices.mobile} {
    width: 160vw;
    margin-right:-10vw;

  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top:4vw;
  margin-bottom:2vw;
  z-index:1000;
  @media ${devices.mobile} {
    margin-top: 6vw;
    flex-direction: column;
    width: 90vw;
    height: 20vw;
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
            <Divider>
              <ImageContainer>
                <Image src={profileImage} alt="dfdf"></Image>
              </ImageContainer>
              <div>
                <WelcomeText>Hello, I’m Nipuni {">"} nee-poo-nee</WelcomeText>
                <Intro>
                  I’m a designer, researcher, educator and creative problem solver.
                  I love working with multidisciplinary teams to explore complex problems,
                  visualize solutions, and deliver experiences that are inclusive and equitable.


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
                  {/* <a href="#resume">
                <Link text={"View resume"}></Link>
              </a> */}
                </LinkContainer></div>

            </Divider>
          </section>
        </Container>
      </Page>
      <Portfolio
        onProjectClick={(key: string) => onProjectClick(key)}
      ></Portfolio>
      <AboutMe></AboutMe>
      {/* <Resume></Resume> */}
    </div>
  );
}
