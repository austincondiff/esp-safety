import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Section from './Section'
import { mediaQueries } from './Layout'
import VisibilityTrailAnimation from './VisibilityTrailAnimation'

import logo from '../images/logo.svg'
import facebook from '../images/social/facebook.svg'
import instagram from '../images/social/instagram.svg'
import twitter from '../images/social/twitter.svg'
import vimeo from '../images/social/vimeo.svg'

const PageTitle = styled.h1`
  margin: 0;
  font-weight: 300;
  letter-spacing: -0.5px;
  -webkit-font-smoothing: antialiased;
`
const PageSubtitle = styled.h3`
  margin: 0.5rem 0 0 0;
  color: ${props => props.theme.color.primary};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25em;
`

const Header = ({ title, subtitle, backgroundImage }) => (
  <Section
    xsPaddingTop="comfortable"
    xsPaddingBottom={backgroundImage && 'comfortable'}
    backgroundImage={backgroundImage}
    backgroundImageOpacity={backgroundImage && 0.5}
    backgroundColor={backgroundImage && '#000000'}
    dark={!!backgroundImage}
    parallax={!!backgroundImage}
    parallaxContent
    follWidth
    header
  >
    <VisibilityTrailAnimation>
      <PageTitle>{title}</PageTitle>
      <PageSubtitle>{subtitle}</PageSubtitle>
    </VisibilityTrailAnimation>
  </Section>
)

export default Header
