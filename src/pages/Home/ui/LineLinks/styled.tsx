import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;

  bottom: 0;
  width: 100%;

  justify-content: space-between;
`;

export const LineBody = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 15px;

  padding-left: 15px;
  padding-right: 15px;

  margin-left: 20px;
  margin-right: 20px;

  margin-top: auto;

  animation: 2s ease-in-out 0s 1 Lines;

  @keyframes Lines {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Line = styled.div`
  width: 3px;
  height: 8vh;

  border-radius: 4px;
  background-color: #ffffff2f;
`;

export const LineContent = styled.div`
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  font-size: 18px;

  color: #ffffff2f;
`;
