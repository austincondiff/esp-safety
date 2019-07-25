import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import mediaQueries from './mediaQueries'

const Layout = styled.div`
  ${({
    fullWidth,
    xsPadding,
    xsPaddingTop,
    xsPaddingBottom,
    smPadding,
    smPaddingTop,
    smPaddingBottom,
    mdPadding,
    mdPaddingTop,
    mdPaddingBottom,
    lgPadding,
    lgPaddingTop,
    lgPaddingBottom,
    xlPadding,
    xlPaddingTop,
    xlPaddingBottom
  }) => `
    width: 100%;
    margin: 0 auto;
    ${!fullWidth ? 'padding-left: 24px; padding-right: 24px;' : ''}

    ${mediaQueries.sm} {
      ${!fullWidth ? 'padding-left: 5%; padding-right: 5%;' : ''}
    }

    ${mediaQueries.md} {
      ${!fullWidth ? 'padding-left: 7.5%; padding-right: 7.5%;' : ''}
    }

    ${mediaQueries.lg} {
      ${!fullWidth ? 'padding-left: 10%; padding-right: 10%;' : ''}
    }

    ${mediaQueries.xl} {
      ${!fullWidth ? 'padding-left: 12.5%; padding-right: 12.5%;' : ''}
    }

    ${
      [xsPadding].every(p => p === 'compact')
        ? 'padding-top: 4%; padding-bottom: 4%;'
        : [xsPadding].every(p => p === 'cozy')
        ? 'padding-top: 8%; padding-bottom: 8%;'
        : [xsPadding].every(p => p === 'comfortable')
        ? 'padding-top: 12%; padding-bottom: 12%;'
        : ''
    }
    ${
      [xsPaddingTop].every(p => p === 'compact')
        ? 'padding-top: 4%;'
        : [xsPaddingTop].every(p => p === 'cozy')
        ? 'padding-top: 8%;'
        : [xsPaddingTop].every(p => p === 'comfortable')
        ? 'padding-top: 12%;'
        : ''
    }
    ${
      [xsPaddingBottom].every(p => p === 'compact')
        ? 'padding-bottom: 4%;'
        : [xsPaddingBottom].every(p => p === 'cozy')
        ? 'padding-bottom: 8%;'
        : [xsPaddingBottom].every(p => p === 'comfortable')
        ? 'padding-bottom: 12%;'
        : ''
    }

    ${mediaQueries.sm} {
      ${
        [xsPadding, smPadding].every(p => p === 'compact')
          ? 'padding-top: 3.333%; padding-bottom: 3.333%;'
          : [xsPadding, smPadding].every(p => p === 'cozy')
          ? 'padding-top: 6.666%; padding-bottom: 6.666%;'
          : [xsPadding, smPadding].every(p => p === 'comfortable')
          ? 'padding-top: 10%; padding-bottom: 10%;'
          : ''
      }
      ${
        [xsPaddingTop, smPaddingTop].every(p => p === 'compact')
          ? 'padding-top: 3.333%;'
          : [xsPaddingTop, smPaddingTop].every(p => p === 'cozy')
          ? 'padding-top: 6.666%;'
          : [xsPaddingTop, smPaddingTop].every(p => p === 'comfortable')
          ? 'padding-top: 10%;'
          : ''
      }
      ${
        [xsPaddingBottom, smPaddingBottom].every(p => p === 'compact')
          ? 'padding-bottom: 3.333%;'
          : [xsPaddingBottom, smPaddingBottom].every(p => p === 'cozy')
          ? 'padding-bottom: 6.666%;'
          : [xsPaddingBottom, smPaddingBottom].every(p => p === 'comfortable')
          ? 'padding-bottom: 10%;'
          : ''
      }
    }
    ${mediaQueries.md} {
      ${
        [xsPadding, smPadding, mdPadding].every(p => p === 'compact')
          ? 'padding-top: 2.666%; padding-bottom: 2.666%;'
          : [xsPadding, smPadding, mdPadding].every(p => p === 'cozy')
          ? 'padding-top: 5.333%; padding-bottom: 5.333%;'
          : [xsPadding, smPadding, mdPadding].every(p => p === 'comfortable')
          ? 'padding-top: 8%; padding-bottom: 8%;'
          : ''
      }
      ${
        [xsPaddingTop, smPaddingTop, mdPaddingTop].every(p => p === 'compact')
          ? 'padding-top: 2.666%;'
          : [xsPaddingTop, smPaddingTop, mdPaddingTop].every(p => p === 'cozy')
          ? 'padding-top: 5.333%;'
          : [xsPaddingTop, smPaddingTop, mdPaddingTop].every(p => p === 'comfortable')
          ? 'padding-top: 8%;'
          : ''
      }
      ${
        [xsPaddingBottom, smPaddingBottom, mdPaddingBottom].every(p => p === 'compact')
          ? 'padding-bottom: 2.666%;'
          : [xsPaddingBottom, smPaddingBottom, mdPaddingBottom].every(p => p === 'cozy')
          ? 'padding-bottom: 5.333%;'
          : [xsPaddingBottom, smPaddingBottom, mdPaddingBottom].every(p => p === 'comfortable')
          ? 'padding-bottom: 8%;'
          : ''
      }
    }
    ${mediaQueries.lg} {
      ${
        [xsPadding, smPadding, mdPadding, lgPadding].every(p => p === 'compact')
          ? 'padding-top: 2%; padding-bottom: 2%;'
          : [xsPadding, smPadding, mdPadding, lgPadding].every(p => p === 'cozy')
          ? 'padding-top: 4%; padding-bottom: 4%;'
          : [xsPadding, smPadding, mdPadding, lgPadding].every(p => p === 'comfortable')
          ? 'padding-top: 6%; padding-bottom: 6%;'
          : ''
      }
      ${
        [xsPaddingTop, smPaddingTop, mdPaddingTop, lgPaddingTop].every(p => p === 'compact')
          ? 'padding-top: 2%;'
          : [xsPaddingTop, smPaddingTop, mdPaddingTop, lgPaddingTop].every(p => p === 'cozy')
          ? 'padding-top: 4%;'
          : [xsPaddingTop, smPaddingTop, mdPaddingTop, lgPaddingTop].every(p => p === 'comfortable')
          ? 'padding-top: 6%;'
          : ''
      }
      ${
        [xsPaddingBottom, smPaddingBottom, mdPaddingBottom, lgPaddingBottom].every(p => p === 'compact')
          ? 'padding-bottom: 2%;'
          : [xsPaddingBottom, smPaddingBottom, mdPaddingBottom, lgPaddingBottom].every(p => p === 'cozy')
          ? 'padding-bottom: 4%;'
          : [xsPaddingBottom, smPaddingBottom, mdPaddingBottom, lgPaddingBottom].every(p => p === 'comfortable')
          ? 'padding-bottom: 6%;'
          : ''
      }
    }
    ${mediaQueries.xl} {
      ${
        [xsPadding, smPadding, mdPadding, lgPadding, xlPadding].every(p => p === 'compact')
          ? 'padding-top: 1.333%; padding-bottom: 1.333%;'
          : [xsPadding, smPadding, mdPadding, lgPadding, xlPadding].every(p => p === 'cozy')
          ? 'padding-top: 2.666%; padding-bottom: 2.666%;'
          : [xsPadding, smPadding, mdPadding, lgPadding, xlPadding].every(p => p === 'comfortable')
          ? 'padding-top: 4%; padding-bottom: 4%;'
          : ''
      }
      ${
        [xsPaddingTop, smPaddingTop, mdPaddingTop, lgPaddingTop, xlPaddingTop].every(p => p === 'compact')
          ? 'padding-top: 1.333%;'
          : [xsPaddingTop, smPaddingTop, mdPaddingTop, lgPaddingTop, xlPaddingTop].every(p => p === 'cozy')
          ? 'padding-top: 2.666%;'
          : [xsPaddingTop, smPaddingTop, mdPaddingTop, lgPaddingTop, xlPaddingTop].every(p => p === 'comfortable')
          ? 'padding-top: 4%;'
          : ''
      }
      ${
        [xsPaddingBottom, smPaddingBottom, mdPaddingBottom, lgPaddingBottom, xlPaddingBottom].every(p => p === 'compact')
          ? 'padding-bottom: 1.333%;'
          : [xsPaddingBottom, smPaddingBottom, mdPaddingBottom, lgPaddingBottom, xlPaddingBottom].every(p => p === 'cozy')
          ? 'padding-bottom: 2.666%;'
          : [xsPaddingBottom, smPaddingBottom, mdPaddingBottom, lgPaddingBottom, xlPaddingBottom].every(
              p => p === 'comfortable'
            )
          ? 'padding-bottom: 4%;'
          : ''
      }
    }
  `}
`

const propTypes = {
  fullWidth: PropTypes.bool
}

export default Layout
