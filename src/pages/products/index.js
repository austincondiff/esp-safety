import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Header from '../../components/Header'
import Section from '../../components/Section'
import Parallax from '../../components/Parallax'
import IconBox from '../../components/IconBox'

import { Layout, Row, Col, mediaQueries } from '../../components/Layout'

import FlameIcon from '../../images/flame.svg'
import CombustibleGasIcon from '../../images/combustible-gas.svg'
import ToxicGasIcon from '../../images/toxic-gas.svg'
import OxygenIcon from '../../images/oxygen.svg'

const ProductLink = styled(Link)`
  display: block;
  padding: 32px 0;
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
const ProductTitle = styled.h3``

const ProductsIndexPage = ({ data }) => {
  console.log(data)
  const products = data.allMarkdownRemark.edges.map(product => ({
    id: product.node.id,
    slug: product.node.fields.slug,
    ...product.node.frontmatter
  }))
  console.log(products)

  return (
    <React.Fragment>
      <Header
        title="Products"
        backgroundImage="https://images.unsplash.com/photo-1536405454887-931a1a783382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
      />
      <Section xsPadding="cozy">
        <Row>
          {products.map(product => (
            <Col xs={6} md={4} lg={3} xl={2} key={product.slug}>
              <ProductLink to={`/${product.slug}`} key={product.id}>
                <ProductImage src={`/media/${product.images[0].relativePath}`} alt={product.title} />
                <ProductTitle>{product.title}</ProductTitle>
                <div>{product.subtitle}</div>
              </ProductLink>
            </Col>
          ))}
        </Row>
      </Section>
    </React.Fragment>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "product" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
                images {
                  relativePath
                }
                templateKey
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
