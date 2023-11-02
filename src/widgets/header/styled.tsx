import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;

  top: 0;

  width: 100%;
  height: 50px;

  animation: 2s ease-in-out 0s 1 Header;

  @keyframes Header {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
