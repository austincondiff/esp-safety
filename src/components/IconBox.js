import React from 'react'
import styled from 'styled-components'
import ArrowLink from './ArrowLink'
import VisibilityTrailAnimation from './VisibilityTrailAnimation'
import { mediaQueries } from '../components/Layout'

const Title = styled.h3`
  font-size: 16px;
  font-weight: 300;
  ${mediaQueries.md} {
    font-size: 24px;
  }
`
const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.75em;
  ${props => (props.hasLink ? 'margin-bottom: 24px;' : '')}
  ${mediaQueries.md} {
    font-size: 16px;
  }
`
const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 32px;
  ${mediaQueries.md} {
    width: 56px;
    height: 56px;
  }
`

const IconBox = ({ title, description, link, linkLabel, icon: Icon }) => (
  <VisibilityTrailAnimation>
    {Icon && (
      <IconWrap>
        <Icon width="100%" />
      </IconWrap>
    )}
    <Title>{title}</Title>
    <Description hasLink={link}>{description}</Description>
    {link && <ArrowLink to={link}>{linkLabel || 'Learn More'}</ArrowLink>}
  </VisibilityTrailAnimation>
)

export default IconBox
