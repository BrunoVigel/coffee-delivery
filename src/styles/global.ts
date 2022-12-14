import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing:antialiased;
  }

  button {
    border:none;
    background: none;
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }

  input {
    background: none;
    border: none;
  }
`