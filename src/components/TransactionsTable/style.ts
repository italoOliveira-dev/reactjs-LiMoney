import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    /* border-collapse: collapse; */
    border-spacing: 0 0.5rem;

    th {
      color: var(--texto);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody tr {
      margin-top: 1rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--white);
      font-weight: 400;
      color: var(--texto);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--titulo);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      &.withdraw::before {
        content: "- ";
      }
    }
  }
`;
