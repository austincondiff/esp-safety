import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ViewportSizeType } from '../../lib/types'

const Row = styled.div`
  ${({ reverse, start, center, end, top, middle, bottom, around, between }) => `
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -3%;
    margin-left: -3%;

    ${reverse === 'xs' && `flex-direction: row-reverse;`}
    ${start === 'xs' && `justify-content: flex-start; text-align: start;`}
    ${center === 'xs' && `justify-content: center; text-align: center;`}
    ${end === 'xs' && `justify-content: flex-end; text-align: end;`}
    ${top === 'xs' && `align-items: flex-start;`}
    ${middle === 'xs' && `align-items: center;`}
    ${bottom === 'xs' && `align-items: flex-end;`}
    ${around === 'xs' && `justify-content: space-around;`}
    ${between === 'xs' && `justify-content: space-between;`}

    @media only screen and (min-width: 48em) {
      ${reverse === 'sm' && `flex-direction: row-reverse;`}
      ${start === 'sm' && `justify-content: flex-start; text-align: start;`}
      ${center === 'sm' && `justify-content: center; text-align: center;`}
      ${end === 'sm' && `justify-content: flex-end; text-align: end;`}
      ${top === 'sm' && `align-items: flex-start;`}
      ${middle === 'sm' && `align-items: center;`}
      ${bottom === 'sm' && `align-items: flex-end;`}
      ${around === 'sm' && `justify-content: space-around;`}
      ${between === 'sm' && `justify-content: space-between;`}
    }

    @media only screen and (min-width: 64em) {
      ${reverse === 'md' && `flex-direction: row-reverse;`}
      ${start === 'md' && `justify-content: flex-start; text-align: start;`}
      ${center === 'md' && `justify-content: center; text-align: center;`}
      ${end === 'md' && `justify-content: flex-end; text-align: end;`}
      ${top === 'md' && `align-items: flex-start;`}
      ${middle === 'md' && `align-items: center;`}
      ${bottom === 'md' && `align-items: flex-end;`}
      ${around === 'md' && `justify-content: space-around;`}
      ${between === 'md' && `justify-content: space-between;`}
    }

    @media only screen and (min-width: 75em) {
      ${reverse === 'lg' && `flex-direction: row-reverse;`}
      ${start === 'lg' && `justify-content: flex-start; text-align: start;`}
      ${center === 'lg' && `justify-content: center; text-align: center;`}
      ${end === 'lg' && `justify-content: flex-end; text-align: end;`}
      ${top === 'lg' && `align-items: flex-start;`}
      ${middle === 'lg' && `align-items: center;`}
      ${bottom === 'lg' && `align-items: flex-end;`}
      ${around === 'lg' && `justify-content: space-around;`}
      ${between === 'lg' && `justify-content: space-between;`}
    }
  `}
`

const propTypes = {
  reverse: PropTypes.bool,
  start: ViewportSizeType,
  center: ViewportSizeType,
  end: ViewportSizeType,
  top: ViewportSizeType,
  middle: ViewportSizeType,
  bottom: ViewportSizeType,
  around: ViewportSizeType,
  between: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
}

export default Row
