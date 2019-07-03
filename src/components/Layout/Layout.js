import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoints from './breakpoints'

const Layout = styled.div`
  ${({ fullWidth, noPadding }) => `
    width: 100%;
    margin: 0 auto;
    ${!noPadding ? 'padding-left: 2.5%; padding-right: 2.5%;' : ''}

    ${breakpoints.sm} {
      ${!noPadding ? 'padding-left: 5%; padding-right: 5%;' : ''}
    }

    ${breakpoints.md} {
      ${!noPadding ? 'padding-left: 7.5%; padding-right: 7.5%;' : ''}
    }

    ${breakpoints.lg} {
      ${!noPadding ? 'padding-left: 10%; padding-right: 10%;' : ''}
    }

    ${breakpoints.xl} {
      ${!noPadding ? 'padding-left: 12.5%; padding-right: 12.5%;' : ''}
    }

  `}
`

const propTypes = {
  fullWidth: PropTypes.bool
}

export default Layout
