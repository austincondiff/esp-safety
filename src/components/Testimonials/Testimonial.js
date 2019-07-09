import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mediaQueries } from '../Layout'

import QuotationMark from '../../images/quotation-mark.svg'

const TestimonalWrap = styled.div`
  position: relative;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  user-select: none;
  ${mediaQueries.sm} {
    width: 50vw;
  }
  ${mediaQueries.lg} {
    width: 33.33vw;
  }
`
const TestimonalBubble = styled.div`
  padding: calc(6vw - .5em) 6vw calc(6vw - .5em) calc(6vw + 48px);
  background-color: transparent;
  color: #999999;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  ${mediaQueries.sm} {
    font-size: 16px;
    line-height: 28px;
    padding: calc(5vw - .5em) 5vw calc(5vw - .5em) calc(5vw + 64px);
  }
  ${mediaQueries.md} {
    font-size: 16px;
    line-height: 28px;
    padding: calc(4vw - .5em) 4vw calc(4vw - .5em) calc(4vw + 64px);
  }
  ${mediaQueries.lg} {
    font-size: 18px;
    line-height: 32px;
    padding: calc(3vw - .5em) 3vw calc(3vw - .5em) calc(3vw + 80px);
  }

  border-radius: 12px;
  position: relative;
  box-shadow: 0 0 0 rgba(0,0,0,0.25);
  transition: .25s;
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
    left: calc(50% - 16px);
    border: 16px solid transparent;
    transition: .25s;
  }
  ${TestimonalWrap}.is-selected & {
    background-color: ${props => props.theme.color.primary};
    color: #FFFFFF;
    box-shadow: 0 16px 32px rgba(0,0,0,0.15);
  }
  ${TestimonalWrap}.is-selected &:after {
    border-top: 16px solid ${props => props.theme.color.primary};
  }
`
const StyledQuotationMark = styled(QuotationMark)`
  position: absolute;
  top: 6vw;
  left: 6vw;
  width: 32px;
  opacity: .15;
  ${mediaQueries.sm} {
    top: 5vw;
    left: 5vw;
    width: 40px;
  }
  ${mediaQueries.md} {
    top: 4vw;
    left: 4vw;
    width: 48px;
  }
  ${mediaQueries.lg} {
    top: 3vw;
    left: 3vw;
    width: 56px;
  }
`
const AuthorWrap = styled.div`

`
const Avatar = styled.div`

`
const AuthorInfo = styled.div`
  margin-top: 32px;
  opacity: .5;
  transition: .25s;
  ${TestimonalWrap}.is-selected & {
    opacity: 1;
  }
`
const AuthorNameTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0.05px;
  text-transform: uppercase;
  text-align: center;
`
const Name = styled.span`

`
const Title = styled.span`
  color: #666666;
  margin-left: 8px;
`
const Logo = styled.img`
  max-height: 28px;
`
const Company = styled.div`
  text-align: center;
  margin-top: 4px;
`

const Testimonial = ({ quote, avatar, name, title, logo, company }) => (
  <TestimonalWrap>
    <TestimonalBubble>
      <StyledQuotationMark />
      {quote}
    </TestimonalBubble>
    <AuthorWrap>
      {avatar && <Avatar src={avatar} />}
      <AuthorInfo>
        <AuthorNameTitle>
          <Name>{name}</Name>
          {title && <Title>{title}</Title>}
        </AuthorNameTitle>
        {logo && <Logo src={logo}></Logo>}
        {!logo && company && <Company>{company}</Company>}
      </AuthorInfo>
    </AuthorWrap>
  </TestimonalWrap>
)

Testimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
  company: PropTypes.string,
  logo: PropTypes.string,
}

export default Testimonial
