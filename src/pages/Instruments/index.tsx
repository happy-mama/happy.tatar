import React from "react";
import {
  MainText,
  SilentLink,
  Spacer,
  Text,
} from "../../widgets/WindowParts/styled";
import { Container } from "./styled";

export default function Instruments() {
  return (
    <Container>
      <Spacer $height="100px" />
      <SilentLink to="/i/fs" $padding_left="5%">
        <MainText>FS</MainText>
        <Text>Public folder of server. View and download what you want.</Text>
      </SilentLink>
      <Spacer $height="50px" />
      <SilentLink to="/i/passgen" $padding_left="5%">
        <MainText>PassGen</MainText>
        <Text>Generate a strong password.</Text>
      </SilentLink>
      <Spacer $height="50px" />
      {/* <SilentLink to="/i/linker" $padding_left="5%">
        <MainText>Linker</MainText>
        <Text>Manage redirect links.</Text>
      </SilentLink>
      <Spacer $height="50px" /> */}
      <SilentLink
        to="https://api.happy.tatar"
        $padding_left="5%"
        target="_blank"
      >
        <MainText>API</MainText>
        <Text>Express API link.</Text>
      </SilentLink>
    </Container>
  );
}
