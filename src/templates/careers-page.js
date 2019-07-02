import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Section from '../components/Section'

import Content, { HTMLContent } from '../components/Content'

export const CareersPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <Header title="Work for us" />
      <Section>Work for us page coming soon.</Section>
    </React.Fragment>
  )
}

CareersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const CareersPage = ({ data }) => {
  const { markdownRemark: post } = data

  return <CareersPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
}

CareersPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default CareersPage

export const aboutPageQuery = graphql`
  query CareersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
