import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import Section from './Section'
import { Row, Col } from './Layout'
import { Button, ButtonGroup } from './Button'

const Header = styled.header`
  position: relative;
`
const PageTitle = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 300;
  line-height: 44px;
  letter-spacing: -0.5px;
  -webkit-font-smoothing: antialiased;
`

const PageSubtitle = styled.h3`
  margin: 40px 0 0 0;
  color: #cccccc;
  font-size: 24px;
  font-weight: 500;
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
  position: absolute;
  bottom: 6vw;
  left: calc(50% - 8px);
  animation: ${arrowBounce} 2s infinite;
  &:after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    border-right: 1.5px solid white;
    border-bottom: 1.5px solid white;
  }
`

const Hero = ({
  title,
  subtitle,
  videoSrc,
  imageSrc,
  showArrow,
  secondaryButtonLink,
  secondaryButtonLabel,
  primaryButtonLink,
  primaryButtonLabel,
  ...props
}) => (
  <Header>
    <Section
      {...props}
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
        <ButtonGroup vertical>
          {primaryButtonLink && primaryButtonLabel && (
            <Link to={primaryButtonLink}>
              <Button size="lg" primary iconOnHover iconPosition="right">
                {primaryButtonLabel}
              </Button>
            </Link>
          )}
          {secondaryButtonLink && secondaryButtonLabel && (
            <Link to={secondaryButtonLink}>
              <Button size="lg" transparent light iconOnHover iconPosition="right">
                {secondaryButtonLabel}
              </Button>
            </Link>
          )}
        </ButtonGroup>
      </Actions>

  </Section>
  <Arrow />
</Header>
)

export default Hero
