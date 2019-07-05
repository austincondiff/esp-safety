import React from 'react'
import Helmet from 'react-helmet'

import ContextConsumer, { ContextProvider } from '../components/Context'
import NavBar from '../components/Navbar'
import ScrollRoot from '../components/ScrollRoot'
import Footer from '../components/Footer'
import useSiteMetadata from '../components/SiteMetadata'

import '../styles/style.css'

export default ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <ContextProvider>
      <ContextConsumer>
        {({ data, set }) => (
          <React.Fragment>
            <Helmet>
              <html lang="en" />
              <title>{title}</title>
              <meta name="description" content={description} />

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

              <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#DD2C2C" />

              <meta property="og:type" content="business.business" />
              <meta property="og:title" content={title} />
              <meta property="og:url" content="/" />
              <meta property="og:image" content="/images/og-image.jpg" />
            </Helmet>
            <NavBar ctxData={data} setCtx={set} />
            <ScrollRoot>
              {children}
              <Footer />
            </ScrollRoot>
          </React.Fragment>
        )}
      </ContextConsumer>
    </ContextProvider>
  )
}
