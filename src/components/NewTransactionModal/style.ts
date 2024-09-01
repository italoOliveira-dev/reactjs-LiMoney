import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--titulo);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #e7e9ee;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--texto);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: var(--white);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;

  button[type="button"] {
  }
`;

interface RadioBoxProps {
  $isActive: boolean;
  $bgColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
  padding-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: ${(props) =>
    props.$isActive ? `var(${props.$bgColor})` : "transparent"};
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.2, "#d7d7d7")};
  }

  img {
    width: 22px;
    height: 22px;
  }

  span {
    font-size: 1rem;
    color: var(--titulo);
  }
`;
