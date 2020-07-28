import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
    background-color: #FCFCFD;
    color: #170C3A;
  }


  body, input, button {
    font-size: 14px;
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;

  }

  svg {
    cursor: pointer
  }

  ul {
    list-style:none;
  }

  li {
    list-style-type: none;
    text-transform: uppercase;
    font-family: 'Source Sans Pro', Helvetica, Arial;
    font-size: 30px;
  }

  a {
    font-family: 'Source Sans Pro', Helvetica, Arial;
    text-decoration:none;
    color: #170C3A;
  }

  svg {
    color: #170C3A;
  }

  p {
    color: #170C3A;
  }


  @keyframes loadAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity:1
    }
  }


`;
