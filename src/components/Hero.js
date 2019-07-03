import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import Section from './Section'
import { Button, ButtonGroup } from './Button'

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

const arrowBounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`

const Actions = styled.div`
  margin: 64px 0;
`
const Arrow = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  position: relative;
  animation: ${arrowBounce} 2s infinite;
  &:after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(45deg);
    border-right: 1.5px solid white;
    border-bottom: 1.5px solid white;
  }
`

const Header = ({ title, subtitle, videoSrc, imageSrc, showArrow }) => (
  <Section
    videoSrc={videoSrc}
    imageSrc={imageSrc}
    backgroundColor="rgba(0,0,0,0.75)"
    dark
    parallax
    parallaxContent
    header
    contentPosition="center"
  >
    <PageTitle>{title}</PageTitle>
    <PageSubtitle>{subtitle}</PageSubtitle>
    <Actions>
      <ButtonGroup>
        <Button light iconOnHover iconPosition="right">
          Learn About Us
        </Button>
        <Button primary iconOnHover iconPosition="right">
          View Our Products
        </Button>
      </ButtonGroup>
    </Actions>
    <Arrow />
  </Section>
)

export default Header
