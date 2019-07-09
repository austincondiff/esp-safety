import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'
import Section from '../components/Section'
import { Layout, Row, Col, mediaQueries } from '../components/Layout'
import ImageGallery from '../components/ImageGallery'
import ReadMore from '../components/ReadMore'
import MarkdownContent from '../components/MarkdownContent'
import { Tabs, Tab } from '../components/Tabs'
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
  padding-top: 15%;
  padding-bottom: 15%;
  ${mediaQueries.sm} {
    padding-top: 12.5%;
    padding-bottom: 12.5%;
  }
  ${mediaQueries.md} {
    padding-top: 10%;
    padding-bottom: 10%;
  }
  ${mediaQueries.lg} {
    padding-top: 7.5%;
    padding-bottom: 7.5%;
  }
  ${mediaQueries.xl} {
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const SpecificationCategoryRow = styled(Row)`
  margin-top: 8%;
  margin-bottom: 8%;
`
const SpecificationCategoryTitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  letter-spacing: -0.5px;
`
const SpecificationLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.38px;
  margin-bottom: 2%;
`
const SpecificationValue = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #cccccc;
  letter-spacing: -0.38px;
`

const SpecificationCol = styled(Col)`
  padding-top: 16px;
  padding-bottom: 16px;
`
const SpecificationsTitle = styled.h2`
  color: #ffffff;
`

export const ProductTemplate = ({ data, title, helmet, contentComponent }) => {
  console.log(data)
  return (
    <React.Fragment>
      <Header title={title} subtitle={data.category} />
      <Section>
        <Row>
          <Col xs={12} sm={6}>
            <ImageGallery
              images={[
                'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2019/06/sgoes.png',
                'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/product-001.png',
                'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2019/06/IR3-IRUVAL-IRUVSS.png',
                'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2016/07/SSS-903_2013C.png',
                'https://images.unsplash.com/photo-1561717507-080fac4a8cca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80',
                'https://images.unsplash.com/photo-1561716749-2ab5a223957c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80'
              ]}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Tabs>
              {data.overview && <Tab label="Product Overview" value="overview">
                <ReadMore>
                  <MarkdownContent content={data.overview} />
                </ReadMore>
              </Tab>}
              {data.applications && <Tab label="Applications" value="applications">
                <p>Applications tab content coming soon.</p>
                <ul
                  style={{
                    columnCount: 2
                  }}
                >
                  {data.applications.map(({application}) => (
                    <li>{application}</li>
                  ))}
                </ul>
              </Tab>}
              {data.features && <Tab label="Features & Benefits" value="features">
                <p>Features & Benefits tab content coming soon.</p>
                <ul
                  style={{
                    columnCount: 2
                  }}
                >
                  {data.features.map(({feature}) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </Tab>}
              <Tab label="Downloads" value="downloads">
                <p>Downloads tab content coming soon.</p>
              </Tab>
            </Tabs>
          </Col>
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
          <SpecificationsTitle>Specifications</SpecificationsTitle>
          <SpecificationCategoryRow>
            <Col lg={4}>
              <SpecificationCategoryTitle>Category Title</SpecificationCategoryTitle>
            </Col>
            <Col lg={8}>
              <Row>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
              </Row>
            </Col>
          </SpecificationCategoryRow>
          <SpecificationCategoryRow>
            <Col lg={4}>
              <SpecificationCategoryTitle>Category Title</SpecificationCategoryTitle>
            </Col>
            <Col lg={8}>
              <Row>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
              </Row>
            </Col>
          </SpecificationCategoryRow>
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
      data={product}
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
        slug
        category
        overview
        applications {
          application
        }
        features {
          feature
        }
      }
    }
  }
`
