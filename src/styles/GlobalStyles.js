import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Arial", sans-serif;
    overflow-x: hidden;
  }

  @media (max-width: 1024px) {
    body {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    body {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;
