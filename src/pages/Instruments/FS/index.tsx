import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  Dir,
  DirImg,
  DirName,
  FileWindow,
  Model,
  ModelName,
  PathName,
  PathUrl,
} from "./styled";
import { Spacer } from "../../../assets/WindowParts/styled";
import axios from "axios";
import config from "../../..";

interface apiData {
  dir: string;
  file: string;
}

export default function FS() {
  const [apiData, setApiData] = useState<apiData[]>([]);
  const [curDir, setCurDir] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurDir(location.search.slice(5));
  });

  useEffect(() => {
    axios
      .get(`${config.api}/FS`, {
        params: {
          dir: curDir,
        },
      })
      .then((res) => {
        setApiData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [curDir]);

  let Files = apiData.map((file, index) => {
    file.dir = file.dir.replace("instruments", "i");

    return (
      <Dir
        to={file.dir}
        key={index}
        target={file.dir.startsWith("https") ? "_blank" : ""}
      >
        {file.dir.startsWith("https") ? (
          <DirImg src="/svg/file.svg" />
        ) : (
          <DirImg src="/svg/folder.svg" />
        )}
        <DirName>{file.file}</DirName>
      </Dir>
    );
  });

  const handleBack = () => {
    navigate("?dir=" + curDir.split("/").slice(0, -1).join("/"));
  };

  const handleRoot = () => {
    navigate("?dir=");
  };

  return (
    <Container>
      <Model>
        <ModelName>FS</ModelName>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleRoot}>Root</Button>
        <PathName>...</PathName>
        <PathUrl>{"/public" + curDir}</PathUrl>
        <FileWindow>{Files}</FileWindow>
        <Spacer $height="2px" />
      </Model>
    </Container>
  );
}
