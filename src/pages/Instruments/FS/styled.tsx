import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  margin-left: 5%;
  width: 90%;
`;

export const Model = styled.div`
  background: var(--color-WindowPart-Background);

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

export const PathName = styled.div`
  display: inline-block;

  margin-left: 10px;
  padding-left: 10px;

  border-radius: 4px 0 0 4px;

  background-color: #2c2c2c;
`;

export const PathUrl = styled.div`
  display: inline-block;
  background-color: #5e5e5e;

  padding-right: 10px;

  border-radius: 0 4px 4px 0;
`;

export const Button = styled.button`
  margin-left: 10px;

  color: var(--color-Text);

  font-size: 20px;

  padding-left: 10px;
  padding-right: 10px;

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
