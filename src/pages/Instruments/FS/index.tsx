/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  Dir,
  DirImg,
  DirName,
  FileDataContainer,
  FileDataLabel,
  FileDataName,
  FileDataSize,
  FileWindow,
  FilesButtons,
  Loading,
  Model,
  ModelName,
  PathUrl,
  UploadFileLabel,
  UploadInputText,
  UploadWindow,
  UploadStatusContainer,
} from "./styled";
import axios, { AxiosProgressEvent } from "axios";
import config from "../../../index";

interface apiData {
  name: string;
  type: 0 | 1;
}

interface uploadStatus {
  msg: string;
  type: "error" | "success" | "message";
}

export default function FS() {
  const location = useLocation();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState<apiData[]>([]);
  const [curDir, setCurDir] = useState(location.search.slice(5));
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [upload, setUpload] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadKey, setUploadKey] = useState("");
  const [uploadPath, setUploadPath] = useState("");
  const [uploadProgress, setUploadProgress] = useState<AxiosProgressEvent | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<uploadStatus>({
    msg: "",
    type: "success",
  });

  useEffect(() => {
    setCurDir(location.search.slice(5));
  }, [location]);

  useEffect(() => {
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

  const ButtonsJSX = useMemo(() => {
    const handleBack = () => {
      navigate("?dir=" + curDir.split("/").slice(0, -1).join("/"));
    };

    const handleRoot = () => {
      navigate("?dir=");
    };

    const handleUpload = () => {
      setUpload((v) => {
        return !v;
      });
    };

    return (
      <>
        <FilesButtons>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleRoot}>Root</Button>
          <Button onClick={handleUpload}>{upload ? "Hide upload" : "Show upload"}</Button>
        </FilesButtons>
        <PathUrl>{".../public" + curDir}</PathUrl>
      </>
    );
  }, [upload, curDir]);

  const FilesJSX = useMemo(() => {
    const Files = apiData.map((file, i) => {
      return (
        <Dir
          to={
            file.type ? config.api + curDir + "/" + file.name : "?dir=" + curDir + "/" + file.name
          }
          key={i}
          target={file.type ? "_blank" : ""}
        >
          {file.type ? <DirImg src="/svg/file.svg" /> : <DirImg src="/svg/folder.svg" />}
          <DirName>{file.name}</DirName>
        </Dir>
      );
    });

    return <FileWindow>{apiError ? apiError : Files}</FileWindow>;
  }, [apiData]);

  const UploadJSX = useMemo(() => {
    if (!upload) {
      return <></>;
    } else {
      const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) {
          return;
        }

        setUploadFile(e.target.files[0]);
        setUploadStatus({ type: "success", msg: "" });
      };

      const handleUploadFile = () => {
        if (!uploadFile || isUploading) {
          return;
        }

        setUploadStatus({ msg: "", type: "success" });
        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", uploadFile);
        // formData.append("key", uploadKey);
        // formData.append("path", uploadPath || curDir);

        axios
          .post(`${config.api}/uf/`, formData, {
            headers: {
              Uf_key: uploadKey,
              Uf_path: uploadPath || curDir,
            },
            onUploadProgress: (e) => {
              // console.log(e);
              setUploadProgress(e);
            },
          })
          .then((data) => {
            console.log(data);
            setUploadStatus({ type: "success", msg: "Uploaded" });
            setUploadProgress(null);
            setIsUploading(false);
          })
          .catch((e) => {
            console.log(e);
            if (e.responce) {
              setUploadStatus({ type: "error", msg: e.response.data.error });
            } else {
              setUploadStatus({ type: "error", msg: "Unknown error" });
            }

            setUploadProgress(null);
            setIsUploading(false);
          });
      };

      const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, mode: "key" | "path") => {
        console.log(uploadKey, e.target.value);

        if (mode === "key") {
          setUploadKey(e.target.value);
        } else {
          setUploadPath(e.target.value);
        }
      };

      const FileData = () => {
        if (!uploadFile) {
          return <div></div>;
        }

        let labels = ["Bytes", "KB", "MB", "GB", "PB", "YB"];
        let key = 0;
        let fileSize = uploadFile.size;

        while (fileSize > 1024) {
          fileSize = fileSize / 1024;
          key++;
        }

        let fileSizeStr = fileSize.toFixed(2).replace(".00", "");

        return (
          <FileDataContainer>
            <FileDataName>{uploadFile.name}</FileDataName>
            <FileDataSize>{fileSizeStr}</FileDataSize>
            <FileDataLabel>{labels[key]}</FileDataLabel>
          </FileDataContainer>
        );
      };

      const UploadData = () => {
        if (!isUploading) {
          return (
            <UploadStatusContainer $type={uploadStatus.type}>
              {uploadStatus.msg}
            </UploadStatusContainer>
          );
        }

        let procents = uploadProgress?.progress
          ? `${(uploadProgress?.progress! * 100).toFixed(0)}%`
          : "0%";

        let time = uploadProgress?.estimated
          ? `${uploadProgress.estimated.toFixed(0)} seconds`
          : "...";

        return (
          <FileDataContainer>
            {procents} {time}
          </FileDataContainer>
        );
      };

      return (
        <UploadWindow>
          <div>Upload key:</div>
          <UploadInputText
            type="text"
            placeholder=""
            onChange={(e) => {
              handleChangeInput(e, "key");
            }}
          />
          <div>File path:</div>
          <UploadInputText
            type="text"
            placeholder="current path by default"
            onChange={(e) => {
              handleChangeInput(e, "path");
            }}
          />
          <UploadFileLabel>
            Select file
            <input style={{ display: "none" }} type="file" onChange={handleSelectFile} />
          </UploadFileLabel>
          {FileData()}
          <UploadFileLabel>
            Upload
            <Button style={{ display: "none" }} onClick={handleUploadFile} />
          </UploadFileLabel>
          {UploadData()}
        </UploadWindow>
      );
    }
  }, [upload, uploadFile, uploadKey, uploadPath, uploadProgress, isUploading, uploadStatus]);

  const RenderJSX = () => {
    if (loading) {
      return <Loading>Api data loading...</Loading>;
    } else {
      return (
        <>
          {ButtonsJSX}
          {FilesJSX}
          {UploadJSX}
        </>
      );
    }
  };

  return (
    <Container>
      <Model>
        <ModelName>FS</ModelName>
        {RenderJSX()}
      </Model>
    </Container>
  );
}
