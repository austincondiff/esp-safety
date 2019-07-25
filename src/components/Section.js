import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Layout, mediaQueries } from './Layout'
import Parallax from './Parallax'
import Context from './Context'

const StyledSection = styled.section`
  position: relative;
  background: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  ${props => props.dark && `&, & * { color: #FFFFFF; }`};
  ${props =>
    props.header
      ? `
        margin-top: -${props.navNeverExpanded ? props.navMobileHeight : props.navMobileHeightExpanded}px;
        ${mediaQueries.md} {
          margin-top: -${props.navNeverExpanded ? props.navHeight : props.navHeightExpanded}px;
        }
      `
      : ``}
`
const SectionInside = styled(Layout)`
  ${({ height, parallaxContent, percentage }) => `
    ${
      parallaxContent
        ? `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: translateY(calc(100% - ${percentage * 500}px));
    `
        : ``
    }
    ${
      height
        ? `
      height: ${height};
      display: flex;
      justify-content: center;
      flex-direction: column;
    `
        : ``
    };
  `}
`
const ParallaxBackground = styled(Parallax)`
  opacity: ${props => (props.imagePosition ? 1 : props.backgroundImageOpacity)};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${props =>
    props.imagePosition
      ? `
      position: static;
      width: 100%;
      height: 100vw;
  `
      : ``}
  ${mediaQueries.sm} {
    width: auto;
    height: auto;
    position: absolute;
    ${props =>
      props.imagePosition === 'left'
        ? `
      right: 50%;
    `
        : ``}
    ${props =>
      props.imagePosition === 'right'
        ? `
      left: 50%;
    `
        : ``}
  }
`
const ParallaxForeground = styled(Parallax)`
  width: ${props => props.width};
  margin-left: 50%;
  transform: translateX(-50%);
  ${mediaQueries.sm} {
    margin: 0;
    position: absolute;
    top: ${props => (props.position ? props.position[0] : 0)};
    left: ${props => (props.position ? props.position[1] : 0)};
    transform: translateX(-50%) translateY(-50%);
  }
`
const ForegroundImage = styled.img`
  width: 100%;
`
const ContentWrap = styled.div`
  position: relative;
  ${mediaQueries.sm} {
    ${props => (props.imagePosition === 'left' || props.contentPosition === 'right') && 'padding-left: calc(50% + 8%);'}
    ${props => (props.imagePosition === 'right' || props.contentPosition === 'left') && 'padding-right: calc(50% + 8%);'}
  }
  ${props =>
    props.contentPosition === 'center' &&
    `
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  `}
  ${props =>
    props.header &&
    `
    margin-top: 104px;
  `}
    height: 100%;
  justify-content: center;
  ${mediaQueries.sm} {
    align-items: center;
  }
`

const Section = ({
  children,
  className,
  fullWidth,
  xsPaddingTop,
  smPaddingTop,
  mdPaddingTop,
  lgPaddingTop,
  xlPaddingTop,
  xsPaddingBottom,
  smPaddingBottom,
  mdPaddingBottom,
  lgPaddingBottom,
  xlPaddingBottom,
  xsPadding,
  smPadding,
  mdPadding,
  lgPadding,
  xlPadding,
  backgroundColor,
  backgroundVideo,
  parallax,
  parallaxContent,
  image,
  imageDepth,
  backgroundImage,
  backgroundImageOpacity,
  backgroundImagePosition,
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
}) => {
  const context = useContext(Context)
  const { navNeverExpanded, navHeight, navHeightExpanded, navMobileHeight, navMobileHeightExpanded } = context.data

  return (
    <StyledSection
      header={header}
      dark={dark}
      backgroundImageOpacity={backgroundImageOpacity}
      parallaxContent={parallaxContent}
      backgroundColor={backgroundColor}
      navNeverExpanded={navNeverExpanded}
      navHeight={navHeight}
      navHeightExpanded={navHeightExpanded}
      navMobileHeight={navMobileHeight}
      navMobileHeightExpanded={navMobileHeightExpanded}
    >
      {parallax ? (
        <React.Fragment>
          <ParallaxBackground
            backgroundImageOpacity={backgroundImageOpacity}
            windowAnchor={header ? 0 : 0.5}
            strength={-0.5}
            backgroundImage={backgroundImage}
            backgroundVideo={backgroundVideo}
            imagePosition={imagePosition}
            backgroundImagePosition={backgroundImagePosition}
          />
          <SectionInside
            xsPaddingTop={xsPaddingTop}
            smPaddingTop={smPaddingTop}
            mdPaddingTop={mdPaddingTop}
            lgPaddingTop={lgPaddingTop}
            xlPaddingTop={xlPaddingTop}
            xsPaddingBottom={xsPaddingBottom}
            smPaddingBottom={smPaddingBottom}
            mdPaddingBottom={mdPaddingBottom}
            lgPaddingBottom={lgPaddingBottom}
            xlPaddingBottom={xlPaddingBottom}
            xsPadding={xsPadding}
            smPadding={smPadding}
            mdPadding={mdPadding}
            lgPadding={lgPadding}
            xlPadding={xlPadding}
            fullWidth={fullWidth}
            height={height}
          >
            <ContentWrap header={header} contentPosition={contentPosition} imagePosition={imagePosition}>
              {children}
            </ContentWrap>
          </SectionInside>
          {foregroundImageSrc && (
            <ParallaxForeground width={foregroundImageWidth} position={foregroundImagePosition}>
              <ForegroundImage position={foregroundImagePosition} src={foregroundImageSrc} />
            </ParallaxForeground>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <SectionInside
            className={className}
            xsPaddingTop={xsPaddingTop}
            smPaddingTop={smPaddingTop}
            mdPaddingTop={mdPaddingTop}
            lgPaddingTop={lgPaddingTop}
            xlPaddingTop={xlPaddingTop}
            xsPaddingBottom={xsPaddingBottom}
            smPaddingBottom={smPaddingBottom}
            mdPaddingBottom={mdPaddingBottom}
            lgPaddingBottom={lgPaddingBottom}
            xlPaddingBottom={xlPaddingBottom}
            xsPadding={xsPadding}
            smPadding={smPadding}
            mdPadding={mdPadding}
            lgPadding={lgPadding}
            xlPadding={xlPadding}
            fullWidth={fullWidth}
            header={header}
            height={height}
          >
            <ContentWrap contentPosition={contentPosition} imagePosition={imagePosition}>
              {children}
            </ContentWrap>
          </SectionInside>
        </React.Fragment>
      )}
    </StyledSection>
  )
}

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
