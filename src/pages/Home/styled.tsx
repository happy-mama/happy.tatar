import { styled } from "styled-components";

export const Body = styled.article``;

export const Section = styled.section`
  height: 80vh;
  max-height: 80vh;
  width: 80%;
  max-width: 80%;

  padding-left: 10%;
  padding-right: 10%;
  padding-top: 10vh;
  padding-bottom: 10vh;

  scroll-snap-align: start;

  animation: 2s ease-in-out 0s 1 Section;

  @keyframes Section {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
