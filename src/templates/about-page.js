import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Section from '../components/Section'

import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <Header
        title="About us"
        backgroundImage="https://images.unsplash.com/photo-1556388275-bb5585725aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
      />
      <Section>About us page coming soon.</Section>
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
