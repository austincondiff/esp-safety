import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'
import Context from '../components/Context'
import Content, { HTMLContent } from '../components/Content'

export const ProductCategoryTemplate = ({ title, helmet, contentComponent }) => {
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

ProductCategoryTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const ProductCategory = ({ data }) => {
  const { markdownRemark: productCategory } = data
  const context = useContext(Context)

  context.set({
    navDarkMode: false,
    navDarkModeExpanded: true,
    navFullWidth: false,
    navHidden: false,
    navNeverExpanded: false,
    navTransparent: false,
    navTransparentExpanded: true
  })

  return (
    <ProductCategoryTemplate
      content={productCategory.html}
      contentComponent={HTMLContent}
      description={productCategory.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Product Category">
          <title>{`${productCategory.frontmatter.title}`}</title>
          <meta name="description" content={`${productCategory.frontmatter.title}`} />
        </Helmet>
      }
      tags={productCategory.frontmatter.tags}
      title={productCategory.frontmatter.title}
    />
  )
}

ProductCategory.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default ProductCategory

export const pageQuery = graphql`
  query ProductCategoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
