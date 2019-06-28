import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const HeaderWrap = styled.header`
  padding-top: 104px;
  background: black;
`

const Header = class extends React.Component {
  render() {
    return (
      <HeaderWrap>
        Header coming soon
      </HeaderWrap>
    )
  }
}

export default Header
