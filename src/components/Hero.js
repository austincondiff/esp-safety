import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Section from './Section'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const PageTitle = styled.h1`
  margin: 0;
  font-size: 42px;
  line-height: 44px;
  letter-spacing: -0.5px;
  -webkit-font-smoothing: antialiased;
`
const PageSubtitle = styled.h3`
  margin: 40px 0 0 0;
  color: #dd2c2c;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
`

const Header = ({ title, subtitle, videoSrc, imageSrc, showArrow }) => (
  <Section
    videoSrc={videoSrc}
    imageSrc={imageSrc}
    backgroundColor="rgba(0,0,0,0.65)"
    dark
    parallax
    parallaxContent
    follWidth
    header
    contentPosition="center"
  >
    <PageTitle>{title}</PageTitle>
    <PageSubtitle>{subtitle}</PageSubtitle>
  </Section>
)

export default Header
