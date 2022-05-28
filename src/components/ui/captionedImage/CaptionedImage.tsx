import React from "react";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { P } from "../../../theme/Styles";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 4vw;
  @media ${devices.mobile} {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 10vw;
    margin-top: 5vw;
  }
`;
const CaptionContainer = styled.div`
  width: 20vw;
  @media ${devices.mobile} {
    width: 90vw;
  }
`;

const Caption = styled(P)`
  font-size: 1vw;
  text-align: right;
  /* width: 10vw; */
  margin: 0;
  margin-left: 6vw;
  margin-right: 1vw;
  margin-bottom: 0.5vw;
  line-height: 1.5;

  @media ${devices.mobile} {
    margin: auto;
    font-size: 3vw;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  width: 65vw;
  @media ${devices.mobile} {
    width: 100vw;
  }
`;

const Image = styled.img`
  width: 65vw;
  @media ${devices.mobile} {
    width: 100vw;
  }
`;

export default function CaptionedImage(props: {
  caption: String;
  imageSrc: string;
}) {
  return (
    <Container>
      <CaptionContainer>
        <Caption>{props.caption}</Caption>
      </CaptionContainer>
      <ImageContainer>
        <Image src={props.imageSrc} alt="dfdf"></Image>
      </ImageContainer>
    </Container>
  );
}
