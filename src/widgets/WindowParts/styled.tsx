import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HomeWindow = styled.div`
  /* width: 80%; */
  margin-left: 5%;
  margin-top: 100px;
`;

interface SpacerI {
  $width?: string;
  $height?: string;
}

export const Spacer = styled.div<SpacerI>`
  display: flex;

  width: ${(props) => props.$width || "0px"};
  height: ${(props) => props.$height || "0px"};
`;

export const MainText = styled.div`
  color: var(--color-MainText);
  font-size: 25px;
  border-bottom: 4px solid;

  width: fit-content;
`;

interface TextI {
  $width?: string;
}

export const Text = styled.div<TextI>`
  color: var(--color-Text);

  width: ${(props) => props.$width || "fit-content"};

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ListBox = styled.div`
  display: grid;

  grid-template-columns: 20% 20% 20% 20%;

  gap: 20px 0px;
  width: 80%;

  @media (max-width: 1000px) {
    grid-template-columns: 40% 40%;
  }

  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;

export const EmbedText = styled.div`
  display: inline-block;
  background-color: var(--color-body-light);

  padding-left: 5px;
  padding-right: 5px;

  border-radius: 4px;
`;

export const InlineElements = styled.div`
  display: flex;

  gap: 10px;
  width: fit-content;

  @media (max-width: 700px) {
    flex-flow: column;
  }
`;

export const SilentLink = styled(Link)<{ $padding_left?: string }>`
  display: block;
  text-decoration: none;

  padding-left: ${(props) => props.$padding_left || "0px"};

  border: 4px solid #00000000;
  border-radius: 8px;

  transition-duration: 1s;

  &:hover {
    border: 4px solid var(--color-WindowPart-Background);
    background-color: var(--color-WindowPart-Border);

    transition-duration: 1s;
  }
`;

export const Middle = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextLink = styled(Link)`
  color: var(--color-TextLink-Text);

  display: inline-block;

  background-color: var(--color-TextLink-Background);
  padding-left: 3px;
  padding-right: 3px;

  border-radius: 4px;
`;
