import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;

  height: 85vh;

  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

export const Label = styled.img`
  width: 500px;
`;

export const Text = styled.div`
  position: absolute;

  color: var(--color-header-font);
  font-weight: bold;
  font-size: 25px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  bottom: 30%;
`;
