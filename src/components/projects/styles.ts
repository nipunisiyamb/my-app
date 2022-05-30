import styled, { ThemeConsumer } from "styled-components";
import { devices } from "../../theme/devices";
import { H2, P } from "../../theme/Styles";

export const SummerySection = styled.div`
    background-color:#F9F9F9;
    margin:0;
    padding:0;
    padding-bottom:4vw;
    padding-top:2vw;
    padding-left:20vw;
    border: 2px solid #F9F9F9;
     @media ${devices.mobile} {
    padding-left:7vw;
    padding-bottom:10vw;
  }
`;

export const ContentSection = styled.div`
    padding-left:20vw;
    padding-top:3vw;
    padding-bottom:1vw;
    @media ${devices.mobile} {
    padding-left:7vw;
    width:80vw;
  }
`;

export const ProjectP = styled(P)`
    width:38vw;
    margin-bottom:1.5vw;
    @media ${devices.mobile} {
    width:80vw;
  }
`;

export const ProjectH2 = styled(H2)<{color?:string}>`
  color:${props=>props.color||"black"};
`;

export const HeroImage = styled.img`
    width:100vw;

     @media ${devices.mobile} {
    margin-top:15vw;
  }
`;

export const ProjectContainer = styled.div`
width:100vw;
margin:0;
padding:0;
`;


export const VideoContainer = styled.div`
position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  margin:auto;

  iframe {
    position: absolute;
  top: 0;
  left: 10%;
  width: 80%;
  height: 90%;
  }
`;