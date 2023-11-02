import { styled } from "styled-components";

export const Container = styled.div`
  border-radius: 4px;

  background-color: var(--color-WindowPart-Background);
  border: 4px solid var(--color-WindowPart-Border);

  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Header = styled.div`
  display: flex;

  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: var(--color-WindowPart-Background);
  }
`;

interface children {
  $open?: boolean;
}

export const Arrow = styled.img<children>`
  rotate: ${(props) => (props.$open ? "0deg" : "90deg")};

  display: inline-block;
`;

export const Name = styled.div`
  font-size: 22px;

  display: inline-block;
`;

export const Surname = styled.div`
  color: #888888;
`;

export const Children = styled.div<children>`
  display: grid;
  grid-template-rows: ${(props) => (props.$open ? "1fr" : "0fr")};
  transition: grid-template-rows 500ms;
`;

export const ChildrenBody = styled.div`
  overflow: hidden;
`;
