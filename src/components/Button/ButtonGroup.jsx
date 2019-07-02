import styled from 'styled-components'
import Button from './Button'

const ButtonGroup = styled.div`
  margin: -8px;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  & ${Button} {
    margin: 8px;
  }
`

export default ButtonGroup
