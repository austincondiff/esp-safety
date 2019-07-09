import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: ${props => props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    color: #666666;
    font-size: 14px;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol {
    margin-top: 0;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
  }

  h1 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 300;
    letter-spacing: -0.5px;
  }

  h2 {
    font-size: 40px;
    line-height: 44px;
    font-weight: 300;
    letter-spacing: -0.5px;
  }

  h3 {
    font-weight: 700;
    line-height: 1.25;
  }

  h4 {
    font-weight: 700;
  }

  h5 {
    font-weight: 700;
  }

  p {
    color: #666666;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;
  }

  a {
    color: ${props => props.theme.color.primary};
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ul {
    margin-bottom: 24px;
    padding: 0;
  }

  li {
    list-style: none;
    position: relative;
    padding-left: 32px;
    margin-bottom: 8px;
  }

  li:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-top: 1.5px solid ${props => props.theme.color.primary};
    border-right: 1.5px solid ${props => props.theme.color.primary};
    position: absolute;
    top: .5em;
    left: 0;
    transition: 0.2s;
    transform: rotate(45deg);
  }

  p:last-child,
  ul:last-child,
  li:last-child {
    margin-bottom: 0;
  }
`

export default GlobalStyles
