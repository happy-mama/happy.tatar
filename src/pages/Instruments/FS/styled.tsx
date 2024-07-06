import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 100px;
  padding-left: 5%;
  width: 90%;
`;

export const Model = styled.div`
  background: var(--color-WindowPart-Background);

  padding-bottom: 2px;

  width: 100%;
  max-width: 1000px;

  border-radius: 4px;
`;

export const ModelName = styled.div`
  background-color: var(--color-WindowPart-Background);
  border-radius: 4px 4px 0 0;

  margin-bottom: 10px;

  font-size: 22px;
  padding: 10px;
`;

export const PathUrl = styled.div`
  display: inline-block;
  background-color: #2c2c2c;

  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;

  border-radius: 0 4px 4px 0;
`;

export const Button = styled.button`
  color: var(--color-Text);

  font-size: 20px;

  background: var(--color-WindowPart-Background);

  border: 1px solid var(--color-WindowPart-Border);
  border-radius: 4px;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const FileWindow = styled.div`
  display: grid;

  margin: 10px;
  padding: 10px;

  border: 1px dashed #f5f5f5;
`;

export const Dir = styled(Link)`
  display: flex;

  align-content: center;

  color: var(--color-Text);
  text-decoration: none;

  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px;

  background-color: #00000000;
  transition-duration: 1s;

  &:hover {
    background-color: var(--color-WindowPart-Background);
    transition-duration: 1s;
  }
`;

export const DirName = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
`;

export const DirImg = styled.img`
  margin-top: auto;
  margin-bottom: auto;

  height: 25px;
`;

export const Loading = styled.div`
  padding: 10px;
`;

export const FilesButtons = styled.div`
  display: flex;

  padding-left: 10px;
  padding-bottom: 10px;

  gap: 10px;
`;

export const UploadWindow = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;

  align-items: center;
  border: 1px dashed #f5f5f5;

  margin: 10px;
  padding: 10px;
`;

export const UploadInputText = styled.input`
  height: 25px;
  line-height: 28px;
  font-size: 16px;

  padding-left: 4px;

  background-color: var(--color-FS-BG-InputText);
  color: var(--color-Text);

  margin: 2px;
  border-radius: 4px;
  border: none;

  &::placeholder {
    color: var(--color-Placeholder);
    opacity: 1;
  }
`;

export const UploadFileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-WindowPart-Background);
  border-radius: 4px;
  border: 2px solid var(--color-WindowPart-Border);

  width: auto;
  height: 23px;

  margin: 2px;
  margin-right: 10px;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const FileDataContainer = styled.div`
  display: flex;

  align-items: center;

  margin-left: 2px;

  height: 27px;
`;

export const FileDataName = styled.div`
  display: inline-block;

  margin-right: 10px;

  height: 24px;
`;

export const FileDataSize = styled.div`
  display: inline-block;

  margin-right: 2px;

  height: 24px;
`;

export const FileDataLabel = styled.div`
  display: inline-block;

  height: 24px;
`;

export const UploadStatusContainer = styled.div<{ $type: "error" | "success" | "message" }>`
  display: inline-block;

  color: var(--color-${(props) => props.$type});
`;
