import React from "react";
import styled from "styled-components";
import { devices } from "../../../theme/devices";
import { P } from "../../../theme/Styles";
import { ProjectP } from "../../projects/styles";
import Link from "../link/Link";

const Container = styled.div`
  width: 40vw;
  margin-bottom: 1.5vw;
  @media ${devices.mobile} {
    width: 80vw;
  }
`;

const PublicationDetail = styled(P)`
  display: inline;
`;

const PublicationTitle = styled(P)`
  display: inline;
  font-weight: bold;
`;

const Download = styled.a`
  border-bottom: 1px solid black;

  &:hover {
    border-bottom: 2px solid black;
    font-weight: bold;
  }
`;

export default function Publication(props: {
  authors: string;
  year: string;
  title: string;
  venue: string;
  fileSrc: string;
}) {
  return (
    <Container>
      <PublicationDetail>{props.authors + ". "}</PublicationDetail>
      <PublicationDetail>{props.year + ". "}</PublicationDetail>
      <PublicationTitle>{props.title + ". "}</PublicationTitle>
      <PublicationDetail>{props.venue + ". "}</PublicationDetail>
      <Download href={props.fileSrc} target="_blank" download>
        <P>
          <u>Download PDF</u>
        </P>
      </Download>
    </Container>
  );
}
