import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Section from './Section'

import logo from '../images/logo.svg'
import facebook from '../images/social/facebook.svg'
import instagram from '../images/social/instagram.svg'
import twitter from '../images/social/twitter.svg'
import vimeo from '../images/social/vimeo.svg'

const PageTitle = styled.h1`
  margin: 0;
`
const PageSubtitle = styled.h3`
  margin: 8px 0 0 0;
  color: #dd2c2c;
  font-size: 20px;
  font-weight: 700;
`

const Header = ({ title, subtitle }) => (
  <Section
    imageSrc="https://images.unsplash.com/photo-1536405454887-931a1a783382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
    backgroundColor="rgba(0,0,0,0.65)"
    dark
    parallax
    parallaxContent
    follWidth
    header
  >
    <PageTitle>{title}</PageTitle>
    <PageSubtitle>{subtitle}</PageSubtitle>
  </Section>
)

export default Header
