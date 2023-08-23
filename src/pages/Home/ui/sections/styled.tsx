import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "tl tl tl tr tr" "bl bl br br br";

  height: 100%;
  width: 100%;
`;

export const BlockTopLeft = styled.div`
  position: relative;

  grid-area: tl;
`;

export const BlockTopRight = styled.div`
  position: relative;

  grid-area: tr;
`;

export const BlockBottomRight = styled.div`
  position: relative;

  grid-area: br;
`;

export const BlockBottomLeft = styled.div`
  position: relative;

  grid-area: bl;
`;

interface BigTextProps {
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}

export const BigText = styled.h2<BigTextProps>`
  position: absolute;

  top: ${(props) => (props.$top ? props.$top : "none")};
  bottom: ${(props) => (props.$bottom ? props.$bottom : "none")};
  left: ${(props) => (props.$left ? props.$left : "none")};
  right: ${(props) => (props.$right ? props.$right : "none")};

  word-wrap: normal;

  font-size: 38px;
`;
