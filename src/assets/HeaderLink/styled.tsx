import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  height: 100%;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Text = styled.div`
  color: var(--color-Header-Text);

  text-transform: uppercase;
  font-size: 18px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const Image = styled.img`
  width: 60%;
`;
