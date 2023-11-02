import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;

  background-color: var(--color-EmbedLink-White);
  text-decoration: none;

  color: var(--color-Header-Text);

  width: fit-content;

  padding: 10px;
  border-radius: 6px;

  &:hover {
    filter: invert();
  }
`;

export const Name = styled.div`
  color: var(--color-EmbedLink-Black);

  justify-self: center;
  align-self: center;
`;

export const Img = styled.img`
  height: 25px;
  width: 25px;
`;
