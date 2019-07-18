import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import ContextConsumer, { ContextProvider } from '../components/Context'
import NavBar from '../components/Navbar'
import App from '../components/App'
import ScrollRoot from '../components/ScrollRoot'
import Footer from '../components/Footer'
import useSiteMetadata from '../components/SiteMetadata'
import GlobalStyles from '../components/GlobalStyles'
import theme from '../lib/theme'

export default ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <ContextProvider>
      <ContextConsumer>
        {({ data, set }) => (
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                {`<!--


    	  /$$$$$$   /$$$$$$$  $$$$$$$
    	 /$$___/$$ /$$_____/ /$$__  $$|
    	| $$$$$$$$|  $$$$$$ | $$  \ $$
    	| $$_____/ \____  $$| $$  | $$
    	|  $$$$$$$ /$$$$$$$/| $$$$$$$/
    	 \_______/|_______/ | $$____/
                          | $$
                          |/_/
                              /$$$$
          									/ $$  $$         	/$$
          									| $$ /_/         | $$
    	  /$$$$$$$  /$$$$$$$ /$$$$$$  /$$$$$$ /$$$$$$   /$$   /$$
    	 /$$_____/ /$$____$$|_  $$_/ /$$___/$$_  $$_/  | $$  | $$
    	|  $$$$$$ | $$    $$  | $$  | $$$$$$$$ | $$    | $$  | $$
    	 \____  $$| $$    $$  | $$  | $$_____/ | $$ /$$| $$  | $$
    	 /$$$$$$$/|  $$$$$$$  | $$  |  $$$$$$$ |  $$$$/|  $$$$$$$
    	|_______/  \_______/  |/_/   \_______/  \___/   \____  $$
                                                      /$$  | $$
                    							                    | $$$$$$/
                    							                    \______/


      espsafety.com was made with ♥ by @austincondiff.


                -->`}

                <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/images/favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />

                <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color={theme.color.primary} />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta property="og:image" content="/images/og-image.jpg" />

                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
              </Helmet>
              <GlobalStyles
                navHeightExpanded={data.navHeightExpanded}
                navHeight={data.navHeight}
                navNeverExpanded={data.navNeverExpanded}
              />
              <App>
                <NavBar ctxData={data} setCtx={set} />
                {children}
                <Footer />
              </App>
            </React.Fragment>
          </ThemeProvider>
        )}
      </ContextConsumer>
    </ContextProvider>
  )
}
