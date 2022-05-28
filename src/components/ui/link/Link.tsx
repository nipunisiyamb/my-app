import React from "react";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { P, H2 } from "../../../theme/Styles";

const Text = styled(P)`
  font-size: 1.2vw;
  margin: 0;
  @media ${devices.mobile} {
    font-size: 4vw;
    font-weight: 700;
  }
`;

const Container = styled.div`
  border-bottom: 1px solid #000000;
  padding: 0.1vw;
  margin-right: 2vw;
  cursor: pointer;
  /* transition: border 0.5s; */
  height: 2vw;
  @media ${devices.mobile} {
    height: 6vw;
    border-bottom: none;
    margin-right: 2vw;
    text-decoration: underline;
  }

  &:hover {
    border-bottom: 2px solid #000000;
    margin-right: 1.8vw;

    @media ${devices.mobile} {
      text-decoration: underline;
      border-bottom: none;
    }
  }
  &:hover ${Text} {
    font-weight: 700;
  }
`;

export default function Link(props: { text: String }) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
}
