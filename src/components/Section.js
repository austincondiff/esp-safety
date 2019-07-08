import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Layout, mediaQueries } from './Layout'

const StyledSection = styled.section`
  position: relative;
  // transform-style: preserve-3d;
  ${props => props.dark && `&, & * { color: #FFFFFF; }`};
  ${props =>
    props.parallaxContent &&
    `
    overflow: hidden;
  `}
`
const SectionInside = styled(Layout)`
  ${({noPaddingTop, noPaddingBottom, height}) => `
    ${!noPaddingTop && `padding-top: 12%;`}
    ${!noPaddingBottom && `padding-bottom: 12%;`}
    ${height && `
      height: ${height};
      display: flex;
      justify-content: center;
      flex-direction: column;
    `};
    ${mediaQueries.sm} {
      ${!noPaddingTop && `padding-top: 11%;`}
      ${!noPaddingBottom && `padding-bottom: 11%;`}
    }
    ${mediaQueries.md} {
      ${!noPaddingTop && `padding-top: 10%;`}
      ${!noPaddingBottom && `padding-bottom: 10%;`}
    }
    ${mediaQueries.lg} {
      ${!noPaddingTop && `padding-top: 9%;`}
      ${!noPaddingBottom && `padding-bottom: 9%;`}
    }
    ${mediaQueries.xl} {
      ${!noPaddingTop && `padding-top: 8%;`}
      ${!noPaddingBottom && `padding-bottom: 8%;`}
    }
  `}
`
const ParallaxBackgroundWrap = styled.div`
  position: absolute;
  top: 0;
  right: ${props => (props.imagePosition === 'left' ? `50%` : `0`)};
  left: ${props => (props.imagePosition === 'right' ? `50%` : `0`)};
  bottom: 0;
  overflow: hidden;
`
const ParallaxBackground = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => (props.imagePosition === 'left' ? `0%` : props.imagePosition === 'right' ? `100%` : '50%')};
  width: calc(60% + 1px);
  min-width: 50%;
  height: 66.66vh;
  transform: translate3d(-50%, -50%, -2px) scale(3.3333);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin-x: 50%;
  transform-origin-y: 0;
  background-image: url(${props => props.imageSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
const ParallaxBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${props =>
    props.parallaxContent &&
    `
    transform: translateZ(-2px) scale(2);
    transform-origin-x: 50%;
    transform-origin-y: 0%;
  `}
`
const ParallaxForeground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(0.5px) scale(0.75);
  transform-origin-x: 50%;
  transform-origin-y: -50%;
  pointer-events: none;
`
const BackgroundColorWrap = styled.div`
  position: absolute;
  ${props =>
    props.parallaxContent
      ? `
      top: -100%;
      left: -100%;
      right: -100%;
      bottom: -100%;
    `
      : `
      top: 0;
      left: ${props.imagePosition === 'left' ? '50%' : '0'};
      right: ${props.imagePosition === 'right' ? '50%' : '0'};
      bottom: 0;
  `}

  background: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
`
const ContentWrap = styled.div`
  position: relative;
  ${props => (props.imagePosition === 'left' || props.contentPosition === 'right') && 'padding-left: calc(50% + 8%);'}
  ${props => (props.imagePosition === 'right' || props.contentPosition === 'left') && 'padding-right: calc(50% + 8%);'}
  ${props =>
    props.contentPosition === 'center' &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
  ${props =>
    props.header &&
    `
    margin-top: 104px;
  `}
`

const ForegroundImage = styled.img`
  position: absolute;
  top: ${props => props.position[0]};
  left: ${props => props.position[1]};
  width: ${props => props.width};
  transform: translateX(-50%) translateY(-50%);
`
const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-66.666%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  overflow: hidden;
  transform-origin-x: 50%;
  transform-origin-y: 0%;
`

const Section = ({
  children,
  fullWidth,
  noPadding,
  noPaddingTop,
  noPaddingBottom,
  backgroundColor,
  backgroundVideo,
  parallax,
  parallaxContent,
  image,
  imageDepth,
  imageSrc,
  imagePosition,
  foregroundImageSrc,
  foregroundImagePosition,
  foregroundImageWidth,
  contentPosition,
  padding,
  height,
  dark,
  header,
  videoSrc
}) => (
  <StyledSection dark={dark} parallaxContent={parallaxContent}>
    {parallax ? (
      <React.Fragment>
        <ParallaxBackgroundWrap imagePosition={imagePosition}>
          <ParallaxBackground imageSrc={imageSrc} imagePosition={imagePosition} backgroundColor={backgroundColor}>
            {videoSrc && (
              <Video width="1800" height="700" preload="auto" loop autoPlay muted playsInline>
                <source src={videoSrc[0]} type="video/webm" />
                <source src={videoSrc[1]} type="video/mp4" />
              </Video>
            )}
          </ParallaxBackground>
        </ParallaxBackgroundWrap>
        <ParallaxBase parallaxContent={parallaxContent}>
          <BackgroundColorWrap
            backgroundColor={backgroundColor}
            imagePosition={imagePosition}
            parallaxContent={parallaxContent}
          />
        <SectionInside noPaddingTop={noPaddingTop} noPaddingBottom={noPaddingBottom} fullWidth={fullWidth} height={height}>
            <ContentWrap header={header} contentPosition={contentPosition} imagePosition={imagePosition}>
              {children}
            </ContentWrap>
          </SectionInside>
        </ParallaxBase>
        {foregroundImageSrc && (
          <ParallaxForeground>
            <ForegroundImage width={foregroundImageWidth} position={foregroundImagePosition} src={foregroundImageSrc} />
          </ParallaxForeground>
        )}
      </React.Fragment>
    ) : (
      <React.Fragment>
        <BackgroundColorWrap
          backgroundColor={backgroundColor}
          imagePosition={imagePosition}
          parallaxContent={parallaxContent}
        />
      <SectionInside noPaddingTop={noPaddingTop} noPaddingBottom={noPaddingBottom} header={header} fullWidth={fullWidth} height={height}>
          <ContentWrap contentPosition={contentPosition} imagePosition={imagePosition}>
            {children}
          </ContentWrap>
        </SectionInside>
      </React.Fragment>
    )}
  </StyledSection>
)

// Section.propTypes = {
//   fullWidth
//   noPadding
//   backgroundColor
//   backgroundVideo
//   parallax
//   image
//   imageDepth: ['front', 'back']
//   imagePosition: ['left', 'right', 'background', 'leftInside' 'rightInside']
//   padding
//   parallaxOrigin
// }

export default Section
