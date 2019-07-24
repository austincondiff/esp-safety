import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import { convertLinesToParagraphs } from '../lib/utils'

import Context from '../components/Context'
import Header from '../components/Header'
import Section from '../components/Section'
import { Layout, Row, Col, mediaQueries } from '../components/Layout'
import ImageGallery from '../components/ImageGallery'
import ReadMore from '../components/ReadMore'
import MarkdownContent from '../components/MarkdownContent'
import { Tabs, Tab } from '../components/Tabs'
import Content, { HTMLContent } from '../components/Content'
import LinesToParagraphs from '../components/LinesToParagraphs'
import VisibilityTrailAnimation from '../components/VisibilityTrailAnimation'

const CategoryLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  display: inline-block;
`
const Subtitle = styled.span`
  display: block;
  margin-top: 12px;
  font-size: 0.5em;
  font-weight: 700;
  color: #777777;
`
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
  & p {
    font-size: inherit;
    color: inherit;
    margin-bottom: 8px;
  }
`

const SpecificationCol = styled(Col)`
  padding-top: 16px;
  padding-bottom: 16px;
`
const SpecificationsTitle = styled.h2`
  color: #ffffff;
`

export const ProductTemplate = ({ data, title, helmet, contentComponent }) => {
  return (
    <React.Fragment>
      {/*}<Header title={title} subtitle={data.category} />*/}
      <Section>
        <Row>
          <Col xs={12} sm={6}>
            <VisibilityTrailAnimation>
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
            </VisibilityTrailAnimation>
          </Col>
          <Col xs={12} sm={6}>
            <VisibilityTrailAnimation>
              <CategoryLink to={`/product-categories/${data.category.slug}`}>{data.category.title}</CategoryLink>
              <h1>
                {title}
                <Subtitle>{data.subtitle}</Subtitle>
              </h1>
              <Tabs>
                {data.overview && (
                  <Tab label="Product Overview" value="overview">
                    <ReadMore>
                      <LinesToParagraphs text={data.overview} />
                    </ReadMore>
                  </Tab>
                )}
                {data.applications && (
                  <Tab label="Applications" value="applications">
                    <p>
                      The explosion-proof design of SGOES makes it ideal for use in hazardous environments such as the
                      following.
                    </p>
                    <ul
                      style={{
                        columnCount: 2
                      }}
                    >
                      {data.applications.map(({ application }) => (
                        <li>{application}</li>
                      ))}
                    </ul>
                  </Tab>
                )}
                {data.features && (
                  <Tab label="Features & Benefits" value="features">
                    <p>The following features and benefits make SGOES the perfect solution for your safety requirements.</p>
                    <ul
                      style={{
                        columnCount: 2
                      }}
                    >
                      {data.features.map(({ feature }) => (
                        <li>{feature}</li>
                      ))}
                    </ul>
                  </Tab>
                )}
                <Tab label="Downloads" value="downloads">
                  {data.downloadCategories.map(downloadCategory => (
                    <div>
                      <h3>{downloadCategory.title}</h3>
                      {downloadCategory.downloads.map(d => (
                        <div>
                          <a href={`/media/${d.file.relativePath}`} target="_blank" rel="noreferrer noopener">
                            {d.title} ({d.file.prettySize})
                          </a>{' '}
                          - {d.description}
                        </div>
                      ))}
                    </div>
                  ))}
                </Tab>
              </Tabs>
            </VisibilityTrailAnimation>
          </Col>
        </Row>
      </Section>
      {data.sections.map((s, i) => (
        <Section
          backgroundImage={`/media/${s.image.relativePath}`}
          backgroundColor={i % 2 === 0 ? '#F6F6F6' : '#FFFFFF'}
          imagePosition={i % 2 === 0 ? 'right' : 'left'}
          parallax
        >
          <VisibilityTrailAnimation>
            <h2 style={{ color: '#DD2C2C' }}>{s.title}</h2>
            <div>
              <MarkdownContent content={s.content} />
            </div>
          </VisibilityTrailAnimation>
        </Section>
      ))}
      <SpecificationsSection>
        <Layout>
          <SpecificationsTitle>Specifications</SpecificationsTitle>
          {data.specificationCategories &&
            data.specificationCategories.map(specificationCategory => (
              <SpecificationCategoryRow>
                <Col lg={4}>
                  <VisibilityTrailAnimation>
                    <SpecificationCategoryTitle>{specificationCategory.title}</SpecificationCategoryTitle>
                  </VisibilityTrailAnimation>
                </Col>
                <Col lg={8}>
                  <Row>
                    {specificationCategory.specifications &&
                      specificationCategory.specifications.map(specification => (
                        <SpecificationCol xs={specification.fullWidth ? 12 : 6}>
                          <VisibilityTrailAnimation>
                            {specification.label && <SpecificationLabel>{specification.label}</SpecificationLabel>}
                            {specification.text && (
                              <SpecificationValue>
                                <LinesToParagraphs text={specification.text} />
                              </SpecificationValue>
                            )}
                          </VisibilityTrailAnimation>
                        </SpecificationCol>
                      ))}
                  </Row>
                </Col>
              </SpecificationCategoryRow>
            ))}
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
  const product = {
    id: data.markdownRemark.id,
    ...data.markdownRemark.frontmatter,
    category: data.allMarkdownRemark.edges.find(c => c.node.frontmatter.slug === data.markdownRemark.frontmatter.category).node
      .frontmatter
  }
  const context = useContext(Context)
  useEffect(() => {
    context.set({
      navDarkMode: false,
      navDarkModeExpanded: false,
      navFullWidth: false,
      navHidden: false,
      navNeverExpanded: false,
      navTransparent: false,
      navTransparentExpanded: false
    })
  }, [])

  console.log({ product })
  console.log('Product rendered', product)

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
        subtitle
        slug
        category
        overview
        applications {
          application
        }
        features {
          feature
        }
        downloadCategories {
          title
          downloads {
            title
            file {
              relativePath
              prettySize
            }
            description
          }
        }
        sections {
          title
          content
          image {
            relativePath
          }
        }
        specificationCategories {
          title
          specifications {
            label
            text
            fullWidth
          }
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "product-category" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
