import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E52E4D;
    --white: #ffffff; 
    --background: #f0f2f5;

    --bg-green-radio-box: rgba(18, 164, 84, 0.1);
    --bg-red-radio-box: rgba(229, 46, 77, 0.1); 
    
    --titulo: #363F5F;
    --texto: #969CB2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 97.75%; // => 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // => 14px
    }
  }

  body {
    background: var(--background);
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  /* body::before {
    content: "";
    width: 100%;
    height: 212px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: var(--blue);
  } */

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0 , 0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 4rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: none;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
