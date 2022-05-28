import React from "react";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { colorTheme, P } from "../../../theme/Styles";
import Link from "../link/Link";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0.5vw 2vw;
  background-color: white;
  @media ${devices.mobile} {
    padding: 4vw;
    background-color: ${colorTheme.white};
  }
`;

export default function GoToTop() {
  return (
    <Container>
      <a href="/#home">
        <Link text={"Go to Top"}></Link>
      </a>
      {/* <Link text={"Next project >"}></Link> */}
    </Container>
  );
}
