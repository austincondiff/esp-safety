import React from 'react'
import styled from 'styled-components'
import ArrowLink from './ArrowLink'
import VisibilityTrailAnimation from './VisibilityTrailAnimation'
import { mediaQueries } from '../components/Layout'

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 32px;
  ${mediaQueries.md} {
    width: 56px;
    height: 56px;
  }
`
const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
`
const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.75em;
  ${props => (props.hasLink ? 'margin-bottom: 24px;' : '')}

`
const StyledArrowLink = styled(ArrowLink)`
  margin-top: 24px;
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
    {link && <StyledArrowLink to={link}>{linkLabel || 'Learn More'}</StyledArrowLink>}
  </VisibilityTrailAnimation>
)

export default IconBox
