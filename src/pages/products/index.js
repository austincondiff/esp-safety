import React, { useContext, useEffect } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Context from '../../components/Context'
import Header from '../../components/Header'
import Section from '../../components/Section'
import VisibilityTrailAnimation from '../../components/VisibilityTrailAnimation'
import MarkdownContent from '../../components/MarkdownContent'

import { Layout, Row, Col, mediaQueries } from '../../components/Layout'
import { PageTabs, Tab } from '../../components/Tabs'

const ProductLink = styled(Link)`
  display: block;
  padding: 32px 0;
  margin: -2rem;
  padding: 2rem;
  background-color: transparent;
  border-radius: 8px;
  transition: 0.25s;
  &:hover {
    background-color: #f7f7f7;
  }
`

const CategoryLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  display: inline-block;
  color: #777777;
`
const ProductImage = styled.div`
  padding-bottom: 100%;
  position: relative;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 2rem;
`
const ProductTitle = styled.h3`
  margin: 0;
  font-weight: 300;
  & strong {
    font-weight: 900;
  }
`
const ProductSubtitle = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25;
  font-weight: 700;
  color: #777777;
`
const ProductHighlight = styled.div`
  background-color: ${props => props.theme.color.primary};
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35em 0.4em;
  display: inline-block;
  margin-bottom: 0.75em;
  line-height: 1em;
`

const ProductsIndexPage = ({ data }) => {
  console.log(data)

  const allEdges = data.allMarkdownRemark.edges

  const productEdges = allEdges.filter(edge => edge.node.frontmatter.templateKey === `product`)
  const categoryEdges = allEdges.filter(edge => edge.node.frontmatter.templateKey === `product-category`)
  const products = productEdges.map(product => ({
    id: product.node.id,
    ...product.node.frontmatter
  }))
  const categories = categoryEdges.map(product => ({
    id: product.node.id,
    slug: product.node.frontmatter.slug,
    title: product.node.frontmatter.title
  }))

  console.log({ allEdges, products, categories })

  const productsInCategory = categorySlug => {
    const categoryProducts = products.filter(p => !categorySlug || p.category === categorySlug)

    return (
      <Section xsPaddingTop="cozy" xsPaddingBottom="comfortable">
        <Row>
          {categoryProducts.length ? (
            categoryProducts
              .filter(p => !categorySlug || p.category === categorySlug)
              .map(product => (
                <Col xs={6} md={4} lg={3} xl={2} key={product.slug}>
                  <ProductLink to={`/products/${product.slug}`} key={product.id}>
                    <ProductImage src={`/media/${product.images[0].relativePath}`} alt={product.title} />
                    {product.highlight && <ProductHighlight>{product.highlight}</ProductHighlight>}
                    <ProductTitle>
                      <MarkdownContent disallowedTypes={['paragraph']} unwrapDisallowed content={product.title} />
                    </ProductTitle>
                    {product.subtitle && <ProductSubtitle>{product.subtitle}</ProductSubtitle>}
                  </ProductLink>
                </Col>
              ))
          ) : (
            <Col xs={12} style={{ textAlign: 'center' }}>
              No products found in this category
            </Col>
          )}
        </Row>
      </Section>
    )
  }

  return (
    <React.Fragment>
      <VisibilityTrailAnimation>
        <Section xsPaddingTop="compact">
          <h1>Products</h1>
        </Section>
        <PageTabs>
          <Tab label="All Products" value="all">
            {productsInCategory()}
          </Tab>
          {categories.map(category => (
            <Tab label={category.title} value={category.slug}>
              {productsInCategory(category.slug)}
            </Tab>
          ))}
        </PageTabs>
      </VisibilityTrailAnimation>
    </React.Fragment>
  )
}

export default () => {
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

  return (
    <StaticQuery
      query={graphql`
        query ProductsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { in: ["product", "product-category"] } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  templateKey
                  slug
                  category
                  title
                  subtitle
                  highlight
                  images {
                    relativePath
                  }
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ProductsIndexPage data={data} />}
    />
  )
}
