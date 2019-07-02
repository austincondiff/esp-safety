import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ColumnSizeType, ViewportSizeType } from '../../lib/types'

const Col = styled.div`
  ${({ xs, sm, md, lg, xl, xsOffset, smOffset, mdOffset, lgOffset, xlOffset, first, last }) => `
    box-sizing: border-box;
    flex: 0 0 auto;
    flex-basis: 100%%;
    max-width: 100%;

    ${xs === 1 ? `flex-basis: 8.33333333%; max-width: 8.33333333%;` : ``}
    ${xs === 2 ? `flex-basis: 16.66666667%; max-width: 16.66666667%;` : ``}
    ${xs === 3 ? `flex-basis: 25%; max-width: 25%;` : ``}
    ${xs === 4 ? `flex-basis: 33.33333333%; max-width: 33.33333333%;` : ``}
    ${xs === 5 ? `flex-basis: 41.66666667%; max-width: 41.66666667%;` : ``}
    ${xs === 6 ? `flex-basis: 50%; max-width: 50%;` : ``}
    ${xs === 7 ? `flex-basis: 58.33333333%; max-width: 58.33333333%;` : ``}
    ${xs === 8 ? `flex-basis: 66.66666667%; max-width: 66.66666667%;` : ``}
    ${xs === 9 ? `flex-basis: 75%; max-width: 75%;` : ``}
    ${xs === 10 ? `flex-basis: 83.33333333%; max-width: 83.33333333%;` : ``}
    ${xs === 11 ? `flex-basis: 91.66666667%; max-width: 91.66666667%;` : ``}

    ${xsOffset === 1 ? `margin-left: 8.33333333%;` : ``}
    ${xsOffset === 2 ? `margin-left: 16.66666667%;` : ``}
    ${xsOffset === 3 ? `margin-left: 25%;` : ``}
    ${xsOffset === 4 ? `margin-left: 33.33333333%;` : ``}
    ${xsOffset === 5 ? `margin-left: 41.66666667%;` : ``}
    ${xsOffset === 6 ? `margin-left: 50%;` : ``}
    ${xsOffset === 7 ? `margin-left: 58.33333333%;` : ``}
    ${xsOffset === 8 ? `margin-left: 66.66666667%;` : ``}
    ${xsOffset === 9 ? `margin-left: 75%;` : ``}
    ${xsOffset === 10 ? `margin-left: 83.33333333%;` : ``}
    ${xsOffset === 11 ? `margin-left: 91.66666667%;` : ``}

    ${first === 'xs' ? `order: -1;` : ``}
    ${last === 'xs' ? `order: 1;` : ``}

    @media only screen and (min-width: 48em) {
      ${sm === 1 ? `flex-basis: 8.33333333%; max-width: 8.33333333%;` : ``}
      ${sm === 2 ? `flex-basis: 16.66666667%; max-width: 16.66666667%;` : ``}
      ${sm === 3 ? `flex-basis: 25%; max-width: 25%;` : ``}
      ${sm === 4 ? `flex-basis: 33.33333333%; max-width: 33.33333333%;` : ``}
      ${sm === 5 ? `flex-basis: 41.66666667%; max-width: 41.66666667%;` : ``}
      ${sm === 6 ? `flex-basis: 50%; max-width: 50%;` : ``}
      ${sm === 7 ? `flex-basis: 58.33333333%; max-width: 58.33333333%;` : ``}
      ${sm === 8 ? `flex-basis: 66.66666667%; max-width: 66.66666667%;` : ``}
      ${sm === 9 ? `flex-basis: 75%; max-width: 75%;` : ``}
      ${sm === 10 ? `flex-basis: 83.33333333%; max-width: 83.33333333%;` : ``}
      ${sm === 11 ? `flex-basis: 91.66666667%; max-width: 91.66666667%;` : ``}

      ${smOffset === 1 ? `margin-left: 8.33333333%;` : ``}
      ${smOffset === 2 ? `margin-left: 16.66666667%;` : ``}
      ${smOffset === 3 ? `margin-left: 25%;` : ``}
      ${smOffset === 4 ? `margin-left: 33.33333333%;` : ``}
      ${smOffset === 5 ? `margin-left: 41.66666667%;` : ``}
      ${smOffset === 6 ? `margin-left: 50%;` : ``}
      ${smOffset === 7 ? `margin-left: 58.33333333%;` : ``}
      ${smOffset === 8 ? `margin-left: 66.66666667%;` : ``}
      ${smOffset === 9 ? `margin-left: 75%;` : ``}
      ${smOffset === 10 ? `margin-left: 83.33333333%;` : ``}
      ${smOffset === 11 ? `margin-left: 91.66666667%;` : ``}

      ${first === 'sm' ? `order: -1;` : ``}
      ${last === 'sm' ? `order: 1;` : ``}
    }

    @media only screen and (min-width: 64em) {
      ${md === 1 ? `flex-basis: 8.33333333%; max-width: 8.33333333%;` : ``}
      ${md === 2 ? `flex-basis: 16.66666667%; max-width: 16.66666667%;` : ``}
      ${md === 3 ? `flex-basis: 25%; max-width: 25%;` : ``}
      ${md === 4 ? `flex-basis: 33.33333333%; max-width: 33.33333333%;` : ``}
      ${md === 5 ? `flex-basis: 41.66666667%; max-width: 41.66666667%;` : ``}
      ${md === 6 ? `flex-basis: 50%; max-width: 50%;` : ``}
      ${md === 7 ? `flex-basis: 58.33333333%; max-width: 58.33333333%;` : ``}
      ${md === 8 ? `flex-basis: 66.66666667%; max-width: 66.66666667%;` : ``}
      ${md === 9 ? `flex-basis: 75%; max-width: 75%;` : ``}
      ${md === 10 ? `flex-basis: 83.33333333%; max-width: 83.33333333%;` : ``}
      ${md === 11 ? `flex-basis: 91.66666667%; max-width: 91.66666667%;` : ``}

      ${mdOffset === 1 ? `margin-left: 8.33333333%;` : ``}
      ${mdOffset === 2 ? `margin-left: 16.66666667%;` : ``}
      ${mdOffset === 3 ? `margin-left: 25%;` : ``}
      ${mdOffset === 4 ? `margin-left: 33.33333333%;` : ``}
      ${mdOffset === 5 ? `margin-left: 41.66666667%;` : ``}
      ${mdOffset === 6 ? `margin-left: 50%;` : ``}
      ${mdOffset === 7 ? `margin-left: 58.33333333%;` : ``}
      ${mdOffset === 8 ? `margin-left: 66.66666667%;` : ``}
      ${mdOffset === 9 ? `margin-left: 75%;` : ``}
      ${mdOffset === 10 ? `margin-left: 83.33333333%;` : ``}
      ${mdOffset === 11 ? `margin-left: 91.66666667%;` : ``}

      ${first === 'md' ? `order: -1;` : ``}
      ${last === 'md' ? `order: 1;` : ``}
    }

    @media only screen and (min-width: 75em) {
      ${lg === 1 ? `flex-basis: 8.33333333%; max-width: 8.33333333%;` : ``}
      ${lg === 2 ? `flex-basis: 16.66666667%; max-width: 16.66666667%;` : ``}
      ${lg === 3 ? `flex-basis: 25%; max-width: 25%;` : ``}
      ${lg === 4 ? `flex-basis: 33.33333333%; max-width: 33.33333333%;` : ``}
      ${lg === 5 ? `flex-basis: 41.66666667%; max-width: 41.66666667%;` : ``}
      ${lg === 6 ? `flex-basis: 50%; max-width: 50%;` : ``}
      ${lg === 7 ? `flex-basis: 58.33333333%; max-width: 58.33333333%;` : ``}
      ${lg === 8 ? `flex-basis: 66.66666667%; max-width: 66.66666667%;` : ``}
      ${lg === 9 ? `flex-basis: 75%; max-width: 75%;` : ``}
      ${lg === 10 ? `flex-basis: 83.33333333%; max-width: 83.33333333%;` : ``}
      ${lg === 11 ? `flex-basis: 91.66666667%; max-width: 91.66666667%;` : ``}

      ${lgOffset === 1 ? `margin-left: 8.33333333%;` : ``}
      ${lgOffset === 2 ? `margin-left: 16.66666667%;` : ``}
      ${lgOffset === 3 ? `margin-left: 25%;` : ``}
      ${lgOffset === 4 ? `margin-left: 33.33333333%;` : ``}
      ${lgOffset === 5 ? `margin-left: 41.66666667%;` : ``}
      ${lgOffset === 6 ? `margin-left: 50%;` : ``}
      ${lgOffset === 7 ? `margin-left: 58.33333333%;` : ``}
      ${lgOffset === 8 ? `margin-left: 66.66666667%;` : ``}
      ${lgOffset === 9 ? `margin-left: 75%;` : ``}
      ${lgOffset === 10 ? `margin-left: 83.33333333%;` : ``}
      ${lgOffset === 11 ? `margin-left: 91.66666667%;` : ``}

      ${first === 'lg' ? `order: -1;` : ``}
      ${last === 'lg' ? `order: 1;` : ``}
    }

  `}
`

const propTypes = {
  xs: ColumnSizeType,
  sm: ColumnSizeType,
  md: ColumnSizeType,
  lg: ColumnSizeType,
  xl: ColumnSizeType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  first: ViewportSizeType,
  last: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
}

export default Col
