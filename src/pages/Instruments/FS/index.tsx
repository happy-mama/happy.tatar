import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  Dir,
  DirImg,
  DirName,
  FileWindow,
  Loading,
  Model,
  ModelName,
  PathName,
  PathUrl,
} from "./styled";
import { Spacer } from "../../../assets/WindowParts/styled";
import axios from "axios";
import config from "../../..";

interface apiData {
  name: string;
  type: 0 | 1;
}

export default function FS() {
  const location = useLocation();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState<apiData[]>([]);
  const [curDir, setCurDir] = useState(location.search.slice(5));
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    setCurDir(location.search.slice(5));
  });

  useEffect(() => {
    if (loading) {
      return;
    }

    setLoading(true);

    axios
      .get(`${config.api}/FS2`, {
        params: {
          dir: curDir,
        },
      })
      .then((res) => {
        setApiData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setApiError(e.response.data.error);
      });
  }, [curDir]);

  let Files = apiData.map((file, index) => {
    return (
      <Dir
        to={
          file.type
            ? config.api + curDir + "/" + file.name
            : "?dir=" + curDir + "/" + file.name
        }
        key={index}
        target={file.type ? "_blank" : ""}
      >
        {file.type ? (
          <DirImg src="/svg/file.svg" />
        ) : (
          <DirImg src="/svg/folder.svg" />
        )}
        <DirName>{file.name}</DirName>
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
        {loading ? (
          <Loading>Loading Api Data...</Loading>
        ) : (
          <FileWindow>{apiError ? apiError : Files}</FileWindow>
        )}
        <Spacer $height="2px" />
      </Model>
    </Container>
  );
}
