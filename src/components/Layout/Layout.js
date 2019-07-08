import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import mediaQueries from './mediaQueries'

const Layout = styled.div`
  ${({ fullWidth, noPadding }) => `
    width: 100%;
    margin: 0 auto;
    ${!noPadding ? 'padding-left: 2.5%; padding-right: 2.5%;' : ''}

    ${mediaQueries.sm} {
      ${!noPadding ? 'padding-left: 5%; padding-right: 5%;' : ''}
    }

    ${mediaQueries.md} {
      ${!noPadding ? 'padding-left: 7.5%; padding-right: 7.5%;' : ''}
    }

    ${mediaQueries.lg} {
      ${!noPadding ? 'padding-left: 10%; padding-right: 10%;' : ''}
    }

    ${mediaQueries.xl} {
      ${!noPadding ? 'padding-left: 12.5%; padding-right: 12.5%;' : ''}
    }

  `}
`

const propTypes = {
  fullWidth: PropTypes.bool
}

export default Layout
