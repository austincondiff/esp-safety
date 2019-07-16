import { createGlobalStyle } from 'styled-components'
import { mediaQueries } from './Layout'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: ${props => props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    color: #666666;
    font-size: 14px;
    overflow-x: hidden;
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
    font-size: 24px;
    line-height: 1;
    font-weight: 300;
    letter-spacing: -0.5px;
    ${mediaQueries.sm} {
      font-size: 32px;
    }
    ${mediaQueries.md} {
      font-size: 36px;
    }
    ${mediaQueries.lg} {
      font-size: 40px;
    }
    ${mediaQueries.xl} {
      font-size: 48px;
    }
  }

  h2 {
    font-size: 24px;
    line-height: 1.1em;
    font-weight: 300;
    letter-spacing: -0.5px;
    ${mediaQueries.sm} {
      font-size: 28px;
    }
    ${mediaQueries.md} {
      font-size: 32px;
    }
    ${mediaQueries.lg} {
      font-size: 36px;
    }
    ${mediaQueries.xl} {
      font-size: 40px;
    }
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
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @media screen and
  (prefers-reduced-motion: reduce),
  (update: slow) {
    * {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/#comment-1700170) */
      transition-duration: 0.001ms !important;
    }
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

  *:not(.visibility-animation-container) > p:last-child,
  .visibility-animation-container:last-child > p,
  ul:last-child,
  li:last-child {
    margin-bottom: 0;
  }
`

export default GlobalStyles
