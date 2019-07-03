import React from 'react'
import styled from 'styled-components'
import ArrowLink from './ArrowLink'

const Title = styled.h3`
  font-size: 24px;
  font-weight: 300;
`
const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  ${props => (props.hasLink ? 'margin-bottom: 24px;' : '')}
`
const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  margin-bottom: 32px;
`

const IconBox = ({ title, description, link, linkLabel, icon: Icon }) => (
  <div>
    {Icon && (
      <IconWrap>
        <Icon width="56" />
      </IconWrap>
    )}
    <Title>{title}</Title>
    <Description hasLink={link}>{description}</Description>
    {link && <ArrowLink to={link}>{linkLabel || 'Learn More'}</ArrowLink>}
  </div>
)

export default IconBox
