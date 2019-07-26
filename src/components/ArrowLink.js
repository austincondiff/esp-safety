import styled from 'styled-components'
import { Link } from 'gatsby'

const ArrowLink = styled(Link)`
  color: ${props => props.theme.color.primary};
  display: inline-block;
  position: relative;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 2em;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  padding-right: 1.333em;
  transition: 0.2s;
  &:after {
    content: '';
    display: block;
    width: 0.666em;
    height: 0.666em;
    border-top: 1.5px solid ${props => props.theme.color.primary};
    border-right: 1.5px solid ${props => props.theme.color.primary};
    position: absolute;
    top: calc(50% - 0.333em);
    right: 0;
    transition: 0.2s;
    transform: rotate(45deg);
  }
  &:hover:after {
    transform: rotate(45deg) translateX(.25em) translateY(-.25em);
  }
`

export default ArrowLink
