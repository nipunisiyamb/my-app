import React from "react";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { P } from "../../../theme/Styles";
import Link from "../link/Link";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0.5vw 2vw;
  background-color: white;
  z-index: 200;
  @media ${devices.mobile} {
    padding: 5vw 2vw;
  }
`;

export default function TopBar(props: {
  onBackClick?: () => void;
  onNextClick?: () => void;
}) {
  return (
    <Container>
      <a href="/#portfolio">
        <Link text={"Back to Portfolio"}></Link>
      </a>
      {/* <Link text={"Next project >"}></Link> */}
    </Container>
  );
}
