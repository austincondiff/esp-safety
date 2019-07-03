import styled from 'styled-components'
import { Link } from 'gatsby'

const ArrowLink = styled(Link)`
  color: #dd2c2c;
  display: inline-block;
  position: relative;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 24px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  padding-right: 16px;
  transition: 0.2s;
  &:after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-top: 1.5px solid #dd2c2c;
    border-right: 1.5px solid #dd2c2c;
    position: absolute;
    top: calc(50% - 5px);
    right: 0;
    transition: 0.2s;
    transform: rotate(45deg);
  }
  &:hover:after {
    transform: rotate(45deg) translateX(4px) translateY(-4px);
  }
`

export default ArrowLink
