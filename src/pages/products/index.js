import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Header from '../../components/Header'
import Section from '../../components/Section'
import Parallax from '../../components/Parallax'
import IconBox from '../../components/IconBox'

import { Layout, Row, Col, mediaQueries } from '../../components/Layout'

import FlameIcon from '../../images/flame.svg'
import CombustibleGasIcon from '../../images/combustible-gas.svg'
import ToxicGasIcon from '../../images/toxic-gas.svg'
import OxygenIcon from '../../images/oxygen.svg'

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
          <Col xs={6} md={3}>
            <IconBox
              icon={FlameIcon}
              title="Flame Detectors"
              description="Every flame detector we offer provides reliable service and long-lasting field performance in the harshest of environments, all at the industry’s best pricing."
              link="/products/flame-detectors"
            />
          </Col>
          <Col xs={6} md={3}>
            <IconBox
              icon={CombustibleGasIcon}
              title="Combustible Gas Detectors"
              description="Configured to alarm when gas concentrations in the environment reach three independently programmable levels, expressed as a percentage of the lower explosive limit."
              link="/products/combustible-gas-detectors"
            />
          </Col>
          <Col xs={6} md={3}>
            <IconBox
              icon={ToxicGasIcon}
              title="Toxic Gas Detectors"
              description="Designed to safely detect and monitor a variety of toxic gases, including hydrogen sulfide, carbon monoxide, chlorine, nitric oxide, and sulfur dioxide, over a range of 0-100 ppm."
              link="/products/toxic-gas-detectors"
            />
          </Col>
          <Col xs={6} md={3}>
            <IconBox
              icon={OxygenIcon}
              title="Oxygen Detectors"
              description="Monitors oxygen levels and will alarm if it dips below 19.5% v/v or if levels increases to prevent oxygen enriched atmosphere and reduce the risk of flammability of materials and gases."
              link="oxygen-detectors"
            />
          </Col>
        </Row>
      </Section>
      <Section xsPaddingBottom="cozy">
        <p>Product page here</p>
        {products.map(product => (
          <Link to={product.slug} key={product.id}>
            {product.title}
          </Link>
        ))}
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
