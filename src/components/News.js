import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Header from './Header'
import Section from './Section'

class News extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        <Header
          title={'News'}
          backgroundImage="https://images.unsplash.com/photo-1539186607619-df476afe6ff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        ></Header>
        <Section xsPadding="cozy">
          News coming soon
          {posts &&
            posts.map(({ node: post }) => (
              <div className="is-parent column is-6" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </article>
              </div>
            ))}
        </Section>
      </React.Fragment>
    )
  }
}

News.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "post" } } }
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
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <News data={data} count={count} />}
  />
)
