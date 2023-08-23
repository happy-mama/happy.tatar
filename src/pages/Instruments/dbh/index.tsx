import React, { useEffect, useState } from "react";
import BlockFile from "../../../widgets/BlockFile";
import { Container } from "./styled";
import EmbedLink from "../../../widgets/EmbedLink";
import { InlineElements, Spacer } from "../../../widgets/WindowParts/styled";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import axios from "axios";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import { dbhChildrens } from "./childrens";

export default function DBH() {
  const [gitMD, setGitMD] = useState("Loading...");

  SyntaxHighlighter.registerLanguage("typescript", javascript);

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/happy-mama/DBH/main/README.md")
      .then((res) => {
        setGitMD(res.data);
      });
  }, []);

  return (
    <Container>
      <ReactMarkdown children={gitMD} />
      <InlineElements>
        <EmbedLink
          url="https://github.com/happy-mama/DBH"
          name="DBH"
          img="/svg/github.svg"
          target="_blank"
        />
        <Spacer $width="10px" />
        <EmbedLink
          url="https://github.com/happy-mama/"
          name="Github"
          img="/svg/github.svg"
          target="_blank"
        />
      </InlineElements>
      <BlockFile name="DBH" surname="class" children={dbhChildrens.classes} />
      <BlockFile name="options" children={<></>} />
    </Container>
  );
}
