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
      <Header
        title="Work for us"
        backgroundImage="https://images.unsplash.com/photo-1542175603-f59071ce6e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
      />
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
