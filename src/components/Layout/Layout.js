import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = styled.div`
  ${({ fullWidth, noPadding }) => `
    width: 100%;
    ${!fullWidth && 'max-width: calc(1200px + 12%);'}
    margin: 0 auto;
    ${!noPadding && 'padding: 8% 6%;'}
  `}
`

const propTypes = {
  fullWidth: PropTypes.bool
}

export default Layout
