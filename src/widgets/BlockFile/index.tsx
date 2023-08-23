import React, { useState } from "react";
import {
  Arrow,
  Children,
  ChildrenBody,
  Container,
  Header,
  Name,
  Surname,
} from "./styled";
import { Spacer } from "../WindowParts/styled";

interface input {
  name: string;
  surname?: string;
  open?: boolean;
  children: JSX.Element;
}

export default function BlockFile(input: input) {
  const [open, setOpen] = useState(input.open ? input.open : false);

  return (
    <Container>
      <Header onClick={() => setOpen(!open)}>
        <Arrow $open={open} src="/svg/chevron.svg" />
        <Name>{input.name}</Name>
        <Spacer $width="10px" />
        <Surname>{input.surname}</Surname>
      </Header>
      <Children $open={open}>
        <ChildrenBody>{input.children}</ChildrenBody>
      </Children>
    </Container>
  );
}
