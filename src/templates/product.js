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
const Heading = styled.header`
  margin-bottom: 48px;
`
const Title = styled.h1`
  margin: 0;
`
const Subtitle = styled.span`
  display: block;
  margin-top: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #777777;
`
const Summary = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  margin: 48px 0;
  & p {
    font-size: 18px;
    line-height: 28px;
  }
`
const MetaWrap = styled.div`
  font-size: 18px;
  line-height: 28px;
`
const Meta = styled.div`
  margin: 16px 0;
`
const MetaLabel = styled.div`
  color: #000000;
  font-weight: 700;
`
const MetaText = styled.div`
  font-weight: 300;
`
const SpecificationsSection = styled(Section)`
  color: #ffffff;
  background-color: #161616;
  background-size: 128px 128px, 128px 128px, 16px 16px, 16px 16px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.033) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.033) 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
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

const DownloadCategory = styled.div`
  margin-bottom: 32px;
`
const Download = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #dddddd;
  &:last-child {
    border: none;
  }
`

export const ProductTemplate = ({ data, title, helmet, contentComponent }) => {
  return (
    <React.Fragment>
      {/*}<Header title={title} subtitle={data.category} />*/}
      <Section xsPadding="compact">
        <Row>
          <Col xs={12} sm={6}>
            <VisibilityTrailAnimation>
              <Heading>
                <CategoryLink to={`/product-categories/${data.category.slug}`}>{data.category.title}</CategoryLink>
                <Title>{title}</Title>
                <Subtitle>{data.subtitle}</Subtitle>
              </Heading>
              <Summary>
                <LinesToParagraphs text={data.summary} />
              </Summary>
              {(data.model || data.function || data.rating) && (
                <MetaWrap>
                  {data.model && (
                    <Meta>
                      <MetaLabel>Model</MetaLabel>
                      <MetaText>{data.model}</MetaText>
                    </Meta>
                  )}
                  {data.function && (
                    <Meta>
                      <MetaLabel>Function</MetaLabel>
                      <MetaText>{data.function}</MetaText>
                    </Meta>
                  )}
                  {data.rating && (
                    <Meta>
                      <MetaLabel>Rating</MetaLabel>
                      <MetaText>{data.rating}</MetaText>
                    </Meta>
                  )}
                </MetaWrap>
              )}
            </VisibilityTrailAnimation>
          </Col>
          <Col xs={12} sm={6}>
            <VisibilityTrailAnimation>
              <ImageGallery images={data.images.map(img => `/media/${img.relativePath}`)} />
            </VisibilityTrailAnimation>
          </Col>
          <Col xs={12}>
            <VisibilityTrailAnimation>
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
                    <DownloadCategory>
                      <h3>{downloadCategory.title}</h3>
                      {downloadCategory.downloads.map(d => (
                        <Download>
                          <a href={`/media/${d.file.relativePath}`} target="_blank" rel="noreferrer noopener">
                            {d.title} ({d.file.prettySize})
                          </a>{' '}
                          - {d.description}
                        </Download>
                      ))}
                    </DownloadCategory>
                  ))}
                </Tab>
              </Tabs>
            </VisibilityTrailAnimation>
          </Col>
        </Row>
      </Section>
      {data.sections.map((s, i) => (
        <Section
          xsPadding="comfortable"
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
      <SpecificationsSection xsPadding="cozy">
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
        summary
        model
        function
        rating
        images {
          relativePath
          name
        }
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
