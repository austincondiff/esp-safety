import React from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
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
      <React.Fragment>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            <ThemeProvider theme={theme}>
              <React.Fragment>
                <GlobalStyles />
                {this.props.children}
              </React.Fragment>
            </ThemeProvider>
          </StyleSheetManager>
        )}
      </React.Fragment>
    )
  }
}

export default CmsPreviewTemplate
