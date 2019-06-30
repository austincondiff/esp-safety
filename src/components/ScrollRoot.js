import styled from 'styled-components'

const ScrollRoot = styled.div.attrs({ id: 'scroll-root' })`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
  perspective-origin-x: 50%;
  perspective-origin-y: 0%;
`

export default ScrollRoot
