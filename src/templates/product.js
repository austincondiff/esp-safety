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
import { PageTabs, Tab } from '../components/Tabs'
import Content, { HTMLContent } from '../components/Content'
import LinesToParagraphs from '../components/LinesToParagraphs'
import VisibilityTrailAnimation from '../components/VisibilityTrailAnimation'

const CategoryLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  display: inline-block;
  color: #777777;
`
const Heading = styled.header`
  margin-bottom: 48px;
`
const Title = styled.h1`
  margin: 0;
  & strong {
    font-weight: 900;
  }
`
const Subtitle = styled.span`
  display: block;
  margin-top: 0.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #777777;
`
const Highlight = styled.div`
  background-color: ${props => props.theme.color.primary};
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 0.65rem;
  display: inline-block;
  margin-top: 2rem;
  line-height: 1em;
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
  margin: 24px 0;
  display: flex;
`
const MetaLabel = styled.div`
  color: #000000;
  font-weight: 700;
  width: 25%;
`
const MetaText = styled.div`
  font-weight: 300;
  flex: 1;
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
  font-size: 1.5rem;
  color: #ffffff;
  letter-spacing: -0.5px;
`
const SpecificationLabel = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.025rem;
  margin-bottom: 2%;
`
const SpecificationValue = styled.div`
  font-size: 1.125rem;
  font-weight: 300;
  color: #cccccc;
  letter-spacing: -0.025em;
  & p {
    font-size: inherit;
    color: inherit;
    margin-bottom: 0.5rem;
  }
  & table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
  & td,
  th {
    margin: 0;
    border: 0;
    padding: 0.75rem 1rem 0.75rem 0;
    &:last-child {
      padding-right: 0;
    }
  }
  & th {
    color: white;
    text-align: left;
    border-bottom: 1px solid #cccccc;
  }
  & td {
    border-bottom: 1px dotted #cccccc;
  }
  & tr:last-child td {
    border-bottom: 0;
  }
`

const SpecificationCol = styled(Col)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const SpecificationsTitle = styled.h2`
  color: #ffffff;
`

const DownloadCategory = styled.div`
  margin-bottom: 2rem;
`
const Download = styled.div`
  padding: 0.75rem 0;
  border-bottom: 1px solid #dddddd;
  &:last-child {
    border: none;
  }
`
const ColumnsWrap = styled.p`
  columns: 2;
  column-gap: 2.5rem;
`

export const ProductTemplate = ({ data, title, helmet, contentComponent }) => {
  return (
    <React.Fragment>
      {/*}<Header title={title} subtitle={data.category} />*/}
      <Section xsPaddingTop="compact" xsPaddingBottom="compact">
        <Row reverse="sm">
          {data.images && data.images.length && (
            <Col xs={12} sm={6}>
              <VisibilityTrailAnimation>
                <ImageGallery images={data.images.map(img => `/media/${img.relativePath}`)} />
              </VisibilityTrailAnimation>
            </Col>
          )}
          <Col xs={12} sm={6}>
            <VisibilityTrailAnimation>
              <Heading>
                <CategoryLink to={`/product-categories/${data.category.slug}`}>{data.category.title}</CategoryLink>
                <Title>
                  <MarkdownContent disallowedTypes={['paragraph']} unwrapDisallowed content={title} />
                </Title>
                {data.subtitle && <Subtitle>{data.subtitle}</Subtitle>}
                {data.highlight && <Highlight>{data.highlight}</Highlight>}
              </Heading>
              {data.summary && (
                <Summary>
                  <MarkdownContent content={data.summary} />
                </Summary>
              )}
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
        </Row>
      </Section>
      <PageTabs scroll>
        {console.log({ data })}
        {(data.overview || data.sections) && (
          <Tab label="Product Overview" value="overview">
            <React.Fragment>
              {data.overview && (
                <Section xsPadding="comfortable">
                  <h2>Product Overview</h2>
                  <ColumnsWrap>
                    <LinesToParagraphs text={data.overview} />
                  </ColumnsWrap>
                </Section>
              )}
              {data.sections &&
                data.sections.map((s, i) => (
                  <Section
                    xsPadding="comfortable"
                    backgroundImage={`/media/${s.image.relativePath}`}
                    backgroundColor={i % 2 === 0 ? '#F6F6F6' : '#FFFFFF'}
                    imagePosition={i % 2 === 0 ? 'right' : 'left'}
                    parallax
                  >
                    <VisibilityTrailAnimation>
                      <h2 style={{ color: '#DD2C2C' }}>
                        <MarkdownContent content={s.title} />
                      </h2>
                      <div>
                        <MarkdownContent content={s.content} />
                      </div>
                    </VisibilityTrailAnimation>
                  </Section>
                ))}
            </React.Fragment>
          </Tab>
        )}
        {data.applications && (
          <Tab label="Applications" value="applications">
            <Section xsPadding="comfortable">
              <h2>Applications</h2>
              <p>The explosion-proof design of SGOES makes it ideal for use in hazardous environments such as the following.</p>
              <ul
                style={{
                  columnCount: 2
                }}
              >
                {data.applications.map(({ application }) => (
                  <li>{application}</li>
                ))}
              </ul>
            </Section>
          </Tab>
        )}
        {data.features && (
          <Tab label="Features & Benefits" value="features">
            <Section xsPadding="comfortable">
              <h2>Features & Benefits</h2>
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
            </Section>
          </Tab>
        )}
        {data.specificationCategories && (
          <Tab label="Specifications" value="specifications">
            <SpecificationsSection xsPadding="comfortable">
              <SpecificationsTitle>Specifications</SpecificationsTitle>
              {data.specificationCategories.map(specificationCategory => (
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
                                  <MarkdownContent content={specification.text} />
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
          </Tab>
        )}
        {data.downloadCategories && data.downloadCategories.length && (
          <Tab label="Downloads" value="downloads">
            <Section xsPadding="comfortable">
              <h2>Downloads</h2>
              {data.downloadCategories.map(downloadCategory => (
                <DownloadCategory>
                  {data.downloadCategories.length > 1 && <h3>{downloadCategory.title}</h3>}
                  {downloadCategory.downloads.map(d => (
                    <Download>
                      <a href={`/media/${d.file.relativePath}`} target="_blank" rel="noreferrer noopener">
                        {d.title} ({d.file.prettySize})
                      </a>
                      {d.description && <React.Fragment>- {d.description}</React.Fragment>}
                    </Download>
                  ))}
                </DownloadCategory>
              ))}
            </Section>
          </Tab>
        )}
      </PageTabs>
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
      navTransparentExpanded: false,
      navShadowExpanded: false
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
        highlight
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
