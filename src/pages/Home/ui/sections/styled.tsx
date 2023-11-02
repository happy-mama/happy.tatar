import styled from "styled-components";

interface BlockProps {
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;

  $width?: string;
}

interface Text {
  $size?: string;
}

export const BigText = styled.h2`
  display: inline-block;

  width: 100%;
  height: 100%;

  margin: 0;

  word-wrap: normal;
  font-size: 38px;
`;

export const BlockText = styled.h3<Text>`
  display: inline-block;

  width: 80vw;
  height: 100%;

  margin: 0;

  word-wrap: normal;
  font-size: ${(props) => (props.$size ? props.$size : "38px")};

  @media (max-width: 700px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
  }
`;

export const Block = styled.div<BlockProps>`
  position: relative;

  top: ${(props) => (props.$top ? props.$top : "")};
  bottom: ${(props) => (props.$bottom ? props.$bottom : "")};
  left: ${(props) => (props.$left ? props.$left : "")};
  right: ${(props) => (props.$right ? props.$right : "")};

  width: ${(props) => (props.$width ? props.$width : "60%")};

  @media (max-width: 700px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
  }
`;

interface MediaSpacer {
  $width?: string;
  $height?: string;
}

export const BlockMediaSpacer = styled.div<MediaSpacer>`
  display: none;

  @media (max-width: 700px) {
    display: block;

    width: ${(props) => (props.$width ? props.$width : "0")};
    height: ${(props) => (props.$height ? props.$height : "0")};
  }
`;

export const BlockImg = styled.img`
  margin: 15px;

  height: 70px;
  width: 70px;
`;
