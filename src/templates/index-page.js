import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Hero from '../components/Hero'
import Section from '../components/Section'
import Features from '../components/Features'
import News from '../components/News'

import { Row, Col } from '../components/Layout'

const IconColLink = () => <div>Icon Column Link coming soon</div>

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => (
  <div>
    <Hero
      title="Technology of the future, protection for today"
      subtitle="We keep you safe with our industry leading safety products specializing in gas and flame detectors"
      videoSrc={[
        'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/esp-hero-bg-480p.webm',
        'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/esp-hero-bg-480p.mp4'
      ]}
      showArrow
    />
    <Section>
      <Row>
        <Col>
          <IconColLink icon="" title="" description="" link="" />
        </Col>
        <Col>
          <IconColLink icon="" title="" description="" link="" />
        </Col>
        <Col>
          <IconColLink icon="" title="" description="" link="" />
        </Col>
        <Col>
          <IconColLink icon="" title="" description="" link="" />
        </Col>
      </Row>
    </Section>
    <Section
      imageSrc="https://images.unsplash.com/photo-1561717507-080fac4a8cca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"
      backgroundColor="black"
      dark
      parallax
      imagePosition="right"
      follWidth
    >
      <h2 style={{ color: '#DD2C2C' }}>Straightforward, user-friendly design</h2>
      <p>
        ESP Safety detectors are designed to ease the complications of installations, calibrations and maintenance. By offering
        standard multiple signal outputs, the detectors provide the compatibility to work with different fire and gas systems.
        The different methods available to perform calibrations give you the flexibility to choose the best option for your
        needs. With minimum maintenance required, your detector’s service life is maximized.
      </p>
    </Section>
    <Section
      imageSrc="https://images.unsplash.com/photo-1561716749-2ab5a223957c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
      backgroundColor="black"
      dark
      parallax
      imagePosition="left"
      follWidth
    >
      <h2>Straightforward, user-friendly design</h2>
      <p>
        ESP Safety detectors are designed to ease the complications of installations, calibrations and maintenance. By offering
        standard multiple signal outputs, the detectors provide the compatibility to work with different fire and gas systems.
        The different methods available to perform calibrations give you the flexibility to choose the best option for your
        needs. With minimum maintenance required, your detector’s service life is maximized.
      </p>
    </Section>
    <div style={{ height: 1024 }}></div>

    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column'
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em'
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em'
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
                  <News />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
