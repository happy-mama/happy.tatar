import React from "react";
import {
  BigText,
  BlockBottomLeft,
  BlockBottomRight,
  BlockTopLeft,
  BlockTopRight,
  Container,
} from "./styled";

export default function Section1() {
  return (
    <Container>
      <BlockTopLeft>
        <BigText $bottom="0" $right="100px">
          Hello, i am Fullstack dev 🤙
        </BigText>
      </BlockTopLeft>
      <BlockTopRight></BlockTopRight>
      <BlockBottomLeft></BlockBottomLeft>
      <BlockBottomRight>
        <BigText>
          My name is Rodion. I am 20 years old, live in Vladivostok (Russia, GMT
          +10). My main language is JS/TS.
        </BigText>
      </BlockBottomRight>
    </Container>
  );
}
