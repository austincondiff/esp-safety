import styled from 'styled-components'
import mediaQueries from './mediaQueries'

const padding = {
  xs: { compact: '4%', cozy: '8%', comfortable: '12%' },
  sm: { compact: '3.333%', cozy: '6.666%', comfortable: '10%' },
  md: { compact: '2.666%', cozy: '5.333%', comfortable: '8%' },
  lg: { compact: '2%', cozy: '4%', comfortable: '6%' },
  xl: { compact: '1.333%', cozy: '2.666%', comfortable: '4%' }
}

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

    ${xsPadding === 'compact' ? `
      padding-top: ${padding.xs.compact}; padding-bottom: ${padding.xs.compact};
      ${mediaQueries.sm} { padding-top: ${padding.sm.compact}; padding-bottom: ${padding.sm.compact}; }
      ${mediaQueries.md} { padding-top: ${padding.md.compact}; padding-bottom: ${padding.md.compact}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.compact}; padding-bottom: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${xsPadding === 'cozy' ? `
      padding-top: ${padding.xs.cozy}; padding-bottom: ${padding.xs.cozy};
      ${mediaQueries.sm} { padding-top: ${padding.sm.cozy}; padding-bottom: ${padding.sm.cozy}; }
      ${mediaQueries.md} { padding-top: ${padding.md.cozy}; padding-bottom: ${padding.md.cozy}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.cozy}; padding-bottom: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${xsPadding === 'comfortable' ? `
      padding-top: ${padding.xs.comfortable}; padding-bottom: ${padding.xs.comfortable};
      ${mediaQueries.sm} { padding-top: ${padding.sm.comfortable}; padding-bottom: ${padding.sm.comfortable}; }
      ${mediaQueries.md} { padding-top: ${padding.md.comfortable}; padding-bottom: ${padding.md.comfortable}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.comfortable}; padding-bottom: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

    ${xsPaddingTop === 'compact' ? `
      padding-top: ${padding.xs.compact}; ;
      ${mediaQueries.sm} { padding-top: ${padding.sm.compact}; }
      ${mediaQueries.md} { padding-top: ${padding.md.compact}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; }
    ` : ``}
    ${xsPaddingTop === 'cozy' ? `
      padding-top: ${padding.xs.cozy};
      ${mediaQueries.sm} { padding-top: ${padding.sm.cozy}; }
      ${mediaQueries.md} { padding-top: ${padding.md.cozy}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; }
    ` : ``}
    ${xsPaddingTop === 'comfortable' ? `
      padding-top: ${padding.xs.comfortable};
      ${mediaQueries.sm} { padding-top: ${padding.sm.comfortable}; }
      ${mediaQueries.md} { padding-top: ${padding.md.comfortable}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; }
    ` : ``}

    ${xsPaddingBottom === 'compact' ? `
      padding-bottom: ${padding.xs.compact}; ;
      ${mediaQueries.sm} { padding-bottom: ${padding.sm.compact}; }
      ${mediaQueries.md} { padding-bottom: ${padding.md.compact}; }
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${xsPaddingBottom === 'cozy' ? `
      padding-bottom: ${padding.xs.cozy};
      ${mediaQueries.sm} { padding-bottom: ${padding.sm.cozy}; }
      ${mediaQueries.md} { padding-bottom: ${padding.md.cozy}; }
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${xsPaddingBottom === 'comfortable' ? `
      padding-bottom: ${padding.xs.comfortable};
      ${mediaQueries.sm} { padding-bottom: ${padding.sm.comfortable}; }
      ${mediaQueries.md} { padding-bottom: ${padding.md.comfortable}; }
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

    ${smPadding === 'compact' ? `
      ${mediaQueries.sm} { padding-top: ${padding.sm.compact}; padding-bottom: ${padding.sm.compact}; }
      ${mediaQueries.md} { padding-top: ${padding.md.compact}; padding-bottom: ${padding.md.compact}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.compact}; padding-bottom: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${smPadding === 'cozy' ? `
      ${mediaQueries.sm} { padding-top: ${padding.sm.cozy}; padding-bottom: ${padding.sm.cozy}; }
      ${mediaQueries.md} { padding-top: ${padding.md.cozy}; padding-bottom: ${padding.md.cozy}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.cozy}; padding-bottom: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${smPadding === 'comfortable' ? `
      ${mediaQueries.sm} { padding-top: ${padding.sm.comfortable}; padding-bottom: ${padding.sm.comfortable}; }
      ${mediaQueries.md} { padding-top: ${padding.md.comfortable}; padding-bottom: ${padding.md.comfortable}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.comfortable}; padding-bottom: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

    ${smPaddingTop === 'compact' ? `
      ${mediaQueries.sm} { padding-top: ${padding.sm.compact}; }
      ${mediaQueries.md} { padding-top: ${padding.md.compact}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; }
    ` : ``}
    ${smPaddingTop === 'cozy' ? `
      ${mediaQueries.sm} { padding-top: ${padding.sm.cozy}; }
      ${mediaQueries.md} { padding-top: ${padding.md.cozy}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; }
    ` : ``}
    ${smPaddingTop === 'comfortable' ? `
      ${mediaQueries.sm} { padding-top: ${padding.sm.comfortable}; }
      ${mediaQueries.md} { padding-top: ${padding.md.comfortable}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; }
    ` : ``}

    ${smPaddingBottom === 'compact' ? `
      ${mediaQueries.sm} { padding-bottom: ${padding.sm.compact}; }
      ${mediaQueries.md} { padding-bottom: ${padding.md.compact}; }
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${smPaddingBottom === 'cozy' ? `
      ${mediaQueries.sm} { padding-bottom: ${padding.sm.cozy}; }
      ${mediaQueries.md} { padding-bottom: ${padding.md.cozy}; }
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${smPaddingBottom === 'comfortable' ? `
      ${mediaQueries.sm} { padding-bottom: ${padding.sm.comfortable}; }
      ${mediaQueries.md} { padding-bottom: ${padding.md.comfortable}; }
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

    ${mdPadding === 'compact' ? `
      ${mediaQueries.md} { padding-top: ${padding.md.compact}; padding-bottom: ${padding.md.compact}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.compact}; padding-bottom: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${mdPadding === 'cozy' ? `
      ${mediaQueries.md} { padding-top: ${padding.md.cozy}; padding-bottom: ${padding.md.cozy}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.cozy}; padding-bottom: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${mdPadding === 'comfortable' ? `
      ${mediaQueries.md} { padding-top: ${padding.md.comfortable}; padding-bottom: ${padding.md.comfortable}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.comfortable}; padding-bottom: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

    ${mdPaddingTop === 'compact' ? `
      ${mediaQueries.md} { padding-top: ${padding.md.compact}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; }
    ` : ``}
    ${mdPaddingTop === 'cozy' ? `
      ${mediaQueries.md} { padding-top: ${padding.md.cozy}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; }
    ` : ``}
    ${mdPaddingTop === 'comfortable' ? `
      ${mediaQueries.md} { padding-top: ${padding.md.comfortable}; }
      ${mediaQueries.lg} { padding-top: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; }
    ` : ``}

    ${mdPaddingBottom === 'compact' ? `
      ${mediaQueries.md} { padding-bottom: ${padding.md.compact}; }
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${mdPaddingBottom === 'cozy' ? `
      ${mediaQueries.md} { padding-bottom: ${padding.md.cozy}; }
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${mdPaddingBottom === 'comfortable' ? `
      ${mediaQueries.md} { padding-bottom: ${padding.md.comfortable}; }
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

    ${lgPadding === 'compact' ? `
      ${mediaQueries.lg} { padding-top: ${padding.lg.compact}; padding-bottom: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${lgPadding === 'cozy' ? `
      ${mediaQueries.lg} { padding-top: ${padding.lg.cozy}; padding-bottom: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${lgPadding === 'comfortable' ? `
      ${mediaQueries.lg} { padding-top: ${padding.lg.comfortable}; padding-bottom: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

    ${lgPaddingTop === 'compact' ? `
      ${mediaQueries.lg} { padding-top: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; }
    ` : ``}
    ${lgPaddingTop === 'cozy' ? `
      ${mediaQueries.lg} { padding-top: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; }
    ` : ``}
    ${lgPaddingTop === 'comfortable' ? `
      ${mediaQueries.lg} { padding-top: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; }
    ` : ``}

    ${lgPaddingBottom === 'compact' ? `
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.compact}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${lgPaddingBottom === 'cozy' ? `
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.cozy}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${lgPaddingBottom === 'comfortable' ? `
      ${mediaQueries.lg} { padding-bottom: ${padding.lg.comfortable}; }
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

    ${xlPadding === 'compact' ? `
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${xlPadding === 'cozy' ? `
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${xlPadding === 'comfortable' ? `
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

    ${xlPaddingTop === 'compact' ? `
      ${mediaQueries.xl} { padding-top: ${padding.xl.compact}; }
    ` : ``}
    ${xlPaddingTop === 'cozy' ? `
      ${mediaQueries.xl} { padding-top: ${padding.xl.cozy}; }
    ` : ``}
    ${xlPaddingTop === 'comfortable' ? `
      ${mediaQueries.xl} { padding-top: ${padding.xl.comfortable}; }
    ` : ``}

    ${xlPaddingBottom === 'compact' ? `
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.compact}; }
    ` : ``}
    ${xlPaddingBottom === 'cozy' ? `
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.cozy}; }
    ` : ``}
    ${xlPaddingBottom === 'comfortable' ? `
      ${mediaQueries.xl} { padding-bottom: ${padding.xl.comfortable}; }
    ` : ``}

  `}
`

export default Layout
