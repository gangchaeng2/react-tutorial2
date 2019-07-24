import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 14px;

    body {
      height: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: #fff;
    }

    a {
      color: black;
      text-decoration: none;
    }

    ul, li {
      list-style: none;
    }

    input {
      &:focus {
        outline: none;
      }
    }

    .Clearfix {
      &::after {
        display: block;
        content: "";
        clear: both;
      }
    }
  }
`

export default GlobalStyle
