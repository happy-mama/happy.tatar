import React from "react";
import { Container, Img, Name } from "./styled";
import { Spacer } from "../WindowParts/styled";

interface input {
  name?: string;
  url: string;
  img?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

export default function EmbedLink(input: input) {
  return (
    <Container to={input.url} target={input.target || ""}>
      <Img src={input.img} />
      {input.img ? <Spacer $width="5px" /> : <></>}
      <Name>{input.name}</Name>
    </Container>
  );
}
