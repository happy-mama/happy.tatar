import React, { useEffect } from "react";
import { Container, Messages } from "./styled";
import { useMessageStore } from "src/store";

export default function RenderMessage() {
  const { messages, setMessages } = useMessageStore(
    ({ messages, setMessages }) => ({ messages, setMessages })
  );

  let ShowMessages = <></>;

  useEffect(() => {
    messages.forEach((item) => {
      switch (item.state) {
        case "start": {
          break;
        }
        case "middle": {
          break;
        }
        case "end": {
          break;
        }
      }
    });
  }, [messages]);

  return (
    <Container>
      <Messages>{ShowMessages}</Messages>
    </Container>
  );
}
