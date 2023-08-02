import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  margin-left: 5%;
  width: 90%;
`;

export const Model = styled.div`
  background: var(--color-WindowPart-Background);

  width: 100%;
  max-width: 360px;

  border-radius: 4px;
`;

export const ModelName = styled.div`
  background-color: var(--color-WindowPart-Background);
  border-radius: 4px 4px 0 0;

  font-size: 22px;
  padding: 10px;
`;

export const CheckboxBody = styled.label`
  display: flex;

  margin-left: 10px;
`;

export const CheckboxText = styled.div`
  margin-left: 10px;
`;

export const Checkbox = styled.input``;

export const Button = styled.button`
  width: 45%;
  height: 50px;

  margin-left: 3.5%;

  color: var(--color-Text);
  font-size: 20px;

  background: var(--color-WindowPart-Background);
  border-radius: 4px;
  border: 1px solid var(--color-WindowPart-Border);

  &:hover {
    filter: brightness(4);
  }
`;

export const Password = styled.div`
  display: flex;

  height: 20px;

  margin-left: 10px;
  margin-right: 10px;

  justify-content: center;
`;

export const Symbols = styled.div`
  display: inline-block;
  color: var(--color-TextLink-Text);

  padding-left: 5px;
  padding-right: 5px;

  border-radius: 4px;
`;

export const Select = styled.select`
  border: none;
  border-radius: 4px;

  margin-left: 4px;

  color: var(--color-Text);

  background: #0075ff;
`;

export const SelOpts = styled.option`
  background: var(--color-WindowPart-Background);
`;
