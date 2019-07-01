import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'
import Content, { HTMLContent } from '../components/Content'

export const ProductTemplate = ({ title, helmet, contentComponent }) => {
  const PostContent = contentComponent || Content

  return (
    <React.Fragment>
      <Header />
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            </div>
          </div>
        </div>
      </section>
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
  const { markdownRemark: product } = data

  return (
    <ProductTemplate
      content={product.html}
      contentComponent={HTMLContent}
      description={product.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Product">
          <title>{`${product.frontmatter.title}`}</title>
          <meta name="description" content={`${product.frontmatter.title}`} />
        </Helmet>
      }
      tags={product.frontmatter.tags}
      title={product.frontmatter.title}
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
