import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html, body {
  overflow: hidden;       
  scrollbar-width: none;    
  -ms-overflow-style: none; 
  scroll-behavior: smooth;  
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;    
}

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto, sans-serif;
    transition: all 0.3s ease;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul {
    margin: 0;
    padding: 0;
  }

  button {
    display: flex;
    margin: 0 auto;
    align-items: center;
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .list {
  list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 40px;
  }

  .section {
    padding-top: 94px;
    padding-bottom: 94px;
  }

  .visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
}
`;

export default GlobalStyles;
