import React from "react";
import { BigText, Block, BlockMediaSpacer } from "./styled";

export default function Section1() {
  return (
    <>
      <Block $top="40%" $left="10%" $width="100%">
        <BigText>Hello, i am Fullstack dev 🤙</BigText>
      </Block>
      <BlockMediaSpacer $height="40px" />
      <Block $top="45%" $left="40%">
        <BigText>
          My name is Rodion. I am 20 years old, live in Vladivostok (Russia, GMT
          +10). My main language is JS/TS.
        </BigText>
      </Block>
    </>
  );
}
