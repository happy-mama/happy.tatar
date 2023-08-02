import React from "react";
import { Container, Label, Text } from "./styled";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      onClick={(e: any) => {
        navigate("/");
      }}
    >
      <Label src="/svg/404.svg"></Label>
      <Text>Ooops... There is nothing here, go back?</Text>
    </Container>
  );
}
