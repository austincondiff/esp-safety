import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import Section from './Section'
import { Row, Col, mediaQueries } from './Layout'
import { Button, ButtonGroup } from './Button'
import VisibilityTrailAnimation from './VisibilityTrailAnimation'

const Header = styled.header`
  position: relative;
`
const HeadingText = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mediaQueries.sm} {
    flex: 0 0 auto;
  }
`
const PageTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  line-height: 1.25em;
  font-weight: 300;
  letter-spacing: -0.5px;
  -webkit-font-smoothing: antialiased;
  ${mediaQueries.sm} {
    font-size: 36px;
  }
  ${mediaQueries.md} {
    font-size: 40px;
  }
  ${mediaQueries.lg} {
    font-size: 44px;
  }
  ${mediaQueries.xl} {
    font-size: 48px;
  }
`

const PageSubtitle = styled.h3`
  margin: 40px 0 0 0;
  color: #cccccc;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25em;

  ${mediaQueries.sm} {
    font-size: 18px;
  }
  ${mediaQueries.md} {
    font-size: 20px;
  }
  ${mediaQueries.lg} {
    font-size: 22px;
  }
  ${mediaQueries.xl} {
    font-size: 24px;
  }
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
  width: 100%;
  ${mediaQueries.sm} {
    width: auto;
  }
`
const Arrow = styled.div`
  position: absolute;
  bottom: 20vw;
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
  ${mediaQueries.sm} {
    bottom: 6vw;
  }
`
const StyledButton = styled(Button)`
  width: calc(100% - 16px);
  ${mediaQueries.sm} {
    width: auto;
  }
`
const StyledButtonGroup = styled(ButtonGroup)`
  width: 100%;
  ${mediaQueries.sm} {
    width: auto;
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
      backgroundImageOpacity={0.33}
      backgroundColor="#000000"
      dark
      parallax
      header
      contentPosition="center"
    >
      <Row>
        <Col lg={10} lgOffset={1}>
          <VisibilityTrailAnimation>
            <HeadingText>
              <VisibilityTrailAnimation>
                <PageTitle>{title}</PageTitle>
                <PageSubtitle>{subtitle}</PageSubtitle>
              </VisibilityTrailAnimation>
            </HeadingText>
            <Actions>
              <StyledButtonGroup vertical>
                <VisibilityTrailAnimation>
                  {primaryButtonLink && primaryButtonLabel && (
                    <Link to={primaryButtonLink}>
                      <StyledButton size="lg" primary iconOnHover iconPosition="right">
                        {primaryButtonLabel}
                      </StyledButton>
                    </Link>
                  )}
                  {secondaryButtonLink && secondaryButtonLabel && (
                    <Link to={secondaryButtonLink}>
                      <StyledButton size="lg" transparent light iconOnHover iconPosition="right">
                        {secondaryButtonLabel}
                      </StyledButton>
                    </Link>
                  )}
                </VisibilityTrailAnimation>
              </StyledButtonGroup>
            </Actions>
          </VisibilityTrailAnimation>
        </Col>
      </Row>
    </Section>
    <Arrow />
  </Header>
)

export default Hero
