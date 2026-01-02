'use client';
import { createGlobalStyle } from 'styled-components';
import { fontText, fontTitle } from './mixins';

// 🔹 Cria um componente global de estilos
export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundBase};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1 {
    ${fontTitle({})}
  }

  h2 {
    ${fontTitle({ size: 'medium' })}
  }

  p, a, ul, li{
    text-decoration: none;
    color: inherit;
    list-style-type: none;
    ${fontText({})}
  }

  input {
    border: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
