import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Section from '../components/Section'
import Context from '../components/Context'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <Header
        title="About us"
        backgroundImage="https://images.unsplash.com/photo-1556388275-bb5585725aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
      />
      <Section>
        <h1>Introduction</h1>
        <p>
          ESP SAFETY INC. is part of the international holding company, ESP Corporation, which has been successfully operating
          since 1973. We are a manufacturer of equipment and integrated systems for industrial safety and fire prevention. We
          currently employ more than 250 skilled professionals globally. Our tremendous global growth is supported by numerous
          offices and distributors worldwide. The company counts among its clientele some of the largest global oil and gas
          producers in the world.
        </p>
        <p>
          Our professional staff is dedicated to provide total customer satisfaction throughout all phases of the process,
          including design, commissioning, as well as ongoing field support and service. The result is a total assurance that
          our customer’s personnel and property are protected by highly reliable sensors & detectors coupled with exceptional
          ongoing field support & customer service.
        </p>
        <p>
          ESP Safety’s line of gas sensors and flame detector products have received FM Approval and are certified by the
          American Bureau of Shipping for use in the US and Canada. In addition, the ESP Safety product line also carries
          certifications and approvals from other global agencies further adding to our credentials of certified, robust, and
          reliable safety devices for the industrial & hazardous environments markets.
        </p>
      </Section>
      <Section>
        <h1>Our commitment</h1>
        <p>
          ESP Safety is committed to an operating philosophy based on openness in communication, integrity in serving our
          customers, fairness and concern for our employees and responsibility to the communities within which we operate.
        </p>
        <p>
          Our vision is to exceed customer expectations for quality, safety, sustainability, cost, delivery and value.
          Additionally, we are dedicated to creating a profitable business culture that is based on the following principles:
        </p>
      </Section>
      <Section>
        <h1>Our people</h1>
        <p>Our people content coming soon.</p>
      </Section>
      <Section>
        <h1>Our customers</h1>
        <p>Our customers content coming soon.</p>
      </Section>
      <Section>
        <h1>Our community</h1>
        <p>Our community content coming soon.</p>
      </Section>
      <Section>
        <h1>Our quality</h1>
        <p>Our quality content coming soon.</p>
      </Section>
    </React.Fragment>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const context = useContext(Context)

  useEffect(() => {
    context.set({
      navDarkMode: false,
      navDarkModeExpanded: true,
      navFullWidth: false,
      navHidden: false,
      navNeverExpanded: false,
      navTransparent: false,
      navTransparentExpanded: true
    })
  }, [])

  return <AboutPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
