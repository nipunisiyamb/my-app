import React from "react";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { P } from "../../../theme/Styles";

const Container = styled.div`
  margin-bottom: 4vw;
  @media ${devices.mobile} {
    margin-bottom: 10vw;
    margin-top: 5vw;
  }
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
  @media ${devices.mobile} {
    width: 100vw;
  }
`;

export default function FullwidthImage(props: { imageSrc: string }) {
  return (
    <Container>
      <Image src={props.imageSrc} alt="dfdf"></Image>
    </Container>
  );
}
