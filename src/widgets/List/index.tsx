import React from "react";
import { Container, Li, Name, Ul } from "./styled";

interface input {
  name?: string;
  data: string[];
}

export default function List(input: input) {
  let list = input.data.map((value, index) => {
    return <Li key={index}>{value}</Li>;
  });

  return (
    <Container>
      {input.name ? <Name>{input.name}</Name> : <></>}
      <Ul>{list}</Ul>
    </Container>
  );
}
