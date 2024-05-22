import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Mulish", sans-serif;
  }
  
  a{
    text-decoration: none;
    color: #fff;
  }
`;
