import React from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import ContextConsumer, { ContextProvider } from '../components/Context'
import GlobalStyles from '../components/GlobalStyles'
import theme from '../lib/theme'

// Component used to enable Netlify CMS to apply the styles added through styled-components

class CmsPreviewTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: ''
    }
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <ContextProvider>
        <ContextConsumer>
          {({ data, set }) => (
            <React.Fragment>
              {this.state.iframeRef && (
                <StyleSheetManager target={this.state.iframeRef}>
                  <ThemeProvider theme={theme}>
                    <React.Fragment>
                      <GlobalStyles
                        navHeightExpanded={data.navHeightExpanded}
                        navHeight={data.navHeight}
                        navMobileHeightExpanded={data.navMobileHeightExpanded}
                        navMobileHeight={data.navMobileHeight}
                        navNeverExpanded={data.navNeverExpanded}
                      />
                      {this.props.children}
                    </React.Fragment>
                  </ThemeProvider>
                </StyleSheetManager>
              )}
            </React.Fragment>
          )}
        </ContextConsumer>
      </ContextProvider>
    )
  }
}

export default CmsPreviewTemplate
