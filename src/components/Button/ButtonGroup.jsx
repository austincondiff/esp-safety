import styled from 'styled-components'
import Button from './Button'

const ButtonGroup = styled.div`
  margin: -8px;
  display: inline-flex;
  align-items: stretch;
  flex-wrap: wrap;
  ${props =>
    props.vertical &&
    `
    flex-direction: column;
    & > a > button {
      width: calc(100% - 16px);
    }
  `}
  & ${Button} {
    margin: 8px;
  }
`

export default ButtonGroup
