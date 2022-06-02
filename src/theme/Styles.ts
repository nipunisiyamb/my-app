
import styled from "styled-components";
import { devices } from "./devices";

export const colorTheme = {
  lightGrey: "#EEEEEE",
  grey:"#D7D7D7",
  white:"#ffffff",
  lightBlue:"#D5DEE2"
}

export const Main = styled.div`
    min-height:100vh;
    max-width:100vw;
    overflow:hidden; 
`;  


export const Page = styled.div`
    min-height:100vh;
    padding-left:10vw;
    max-width:100vw;
    overflow:hidden; 

    a,
a:link,
a:visited,
a:hover,
a:active {
  color: black;
  text-decoration: none; /* no underline */
}
`;

export const H1 = styled.h1`
    font-family: 'Red Hat Display', sans-serif;
    font-weight:800;
    text-align: left;
    font-size:3.6vw;
     line-height:1.3;
     @media ${devices.mobile} {
    font-size:7vw;
     max-width:80vw;
  }
`;


export const H2 = styled.h2<{color?:string}>`
    font-family: 'Red Hat Display', sans-serif;
    font-weight:800;
    text-align: left;
    font-size:1.5vw;
    max-width:36vw;
    line-height:1.4;
    color:${props=>props.color||"black"};


    @media ${devices.mobile} {
    font-size:6vw;
    max-width:100vw;
  }
`;

export const H3 = styled.h3`
font-family: 'Red Hat Display', sans-serif;
    font-weight:700;
    text-align: left;
    font-size:1.3vw;
    margin:0;
    line-height:1.5;
    margin-top:3vw;

    @media ${devices.mobile} {
    font-size:5vw;
    max-width:100vw;
    margin-top:8vw;
  }
`;

export const P = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight:400;
    text-align: left;  
    font-size:1vw;
    line-height:1.7;
    margin:0;

    @media ${devices.mobile} {
    font-size:4.5vw;
    max-width:100vw;
    line-height:1.5;
  }
`;

export const P2 = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight:400;
    text-align: left;  
    font-size:1.1vw;
    line-height:1.4;
    margin:0;

    @media ${devices.mobile} {
    font-size:4vw;
    max-width:100vw;
    line-height:1.3;
  }
`;



