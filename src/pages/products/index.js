import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Header from '../../components/Header'
import Section from '../../components/Section'
import Parallax from '../../components/Parallax'

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
      <Section>
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
