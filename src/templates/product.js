import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'
import Section from '../components/Section'
import { Layout, Row, Col } from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const SpecificationsSection = styled.section`
  color: #ffffff;
  background-color: #161616;
  background-size: 128px 128px, 128px 128px, 16px 16px, 16px 16px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.033) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.033) 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
`

export const ProductTemplate = ({ title, helmet, contentComponent }) => {
  return (
    <React.Fragment>
      <Header title={title} />
      <Section>
        <Row>
          <Col xs={6}>Image Gallery coming soon.</Col>
          <Col xs={6}>Tabs coming soon</Col>
        </Row>
      </Section>
      <Section
        imageSrc="https://images.unsplash.com/photo-1561717507-080fac4a8cca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"
        backgroundColor="#F6F6F6"
        parallax
        imagePosition="right"
      >
        <h2 style={{ color: '#DD2C2C' }}>Straightforward, user-friendly design</h2>
        <p>
          ESP Safety detectors are designed to ease the complications of installations, calibrations and maintenance. By
          offering standard multiple signal outputs, the detectors provide the compatibility to work with different fire and gas
          systems. The different methods available to perform calibrations give you the flexibility to choose the best option
          for your needs. With minimum maintenance required, your detector’s service life is maximized.
        </p>
      </Section>
      <Section
        imageSrc="https://images.unsplash.com/photo-1561716749-2ab5a223957c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
        backgroundColor="#FFFFFF"
        parallax
        imagePosition="left"
      >
        <h2>Straightforward, user-friendly design</h2>
        <p>
          ESP Safety detectors are designed to ease the complications of installations, calibrations and maintenance. By
          offering standard multiple signal outputs, the detectors provide the compatibility to work with different fire and gas
          systems. The different methods available to perform calibrations give you the flexibility to choose the best option
          for your needs. With minimum maintenance required, your detector’s service life is maximized.
        </p>
      </Section>
      <SpecificationsSection>
        <Layout>
          <h2>Specifications</h2>
        </Layout>
      </SpecificationsSection>
    </React.Fragment>
  )
}

ProductTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const Product = ({ data }) => {
  console.log(data)

  const product = {
    id: data.markdownRemark.id,
    ...data.markdownRemark.frontmatter
  }

  console.log(product)

  return (
    <ProductTemplate
      content=""
      contentComponent={HTMLContent}
      description={product.description}
      helmet={
        <Helmet titleTemplate="%s | Product">
          <title>{`${product.title}`}</title>
          <meta name="description" content={`${product.title}`} />
        </Helmet>
      }
      tags={product.tags}
      title={product.title}
    />
  )
}

Product.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default Product

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
