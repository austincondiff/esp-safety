import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Hero from '../components/Hero'
import Section from '../components/Section'
import IconBox from '../components/IconBox'
import Features from '../components/Features'
import News from '../components/News'
import { Row, Col } from '../components/Layout'
import ArrowLink from '../components/ArrowLink'

import FlameIcon from '../img/flame.svg'
import CombustibleGasIcon from '../img/combustible-gas.svg'
import ToxicGasIcon from '../img/toxic-gas.svg'
import OxygenIcon from '../img/oxygen.svg'

const SectionSupertitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`
const SectionActions = styled.h3`
  margin-top: 32px;
`

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
        <Col md={3}>
          <IconBox
            icon={FlameIcon}
            title="Flame Detectors"
            description="Every flame detector we offer provides reliable service and long lasting field performance in the harshest of environments, all at the industry’s best pricing."
            link="/products/flame-detectors"
          />
        </Col>
        <Col md={3}>
          <IconBox
            icon={CombustibleGasIcon}
            title="Combustible Gas Detectors"
            description="Configured to report alarms when the gas concentrations in the environment reach each of three independently programmable levels, expressed as a percentage of the lower explosive limit (LEL) in the air."
            link="/products/combustible-gas-detectors"
          />
        </Col>
        <Col md={3}>
          <IconBox
            icon={ToxicGasIcon}
            title="Toxic Gas Detectors"
            description="Designed to safely detect and monitor a variety of toxic gases in the air, including hydrogen sulfide, carbon monoxide, chlorine, nitric oxide, and sulfur dioxide, over a range of 0-100 ppm."
            link="/products/toxic-gas-detectors"
          />
        </Col>
        <Col md={3}>
          <IconBox
            icon={OxygenIcon}
            title="Oxygen Detectors"
            description="Monitors oxygen level in ambient air or process applications and will alarm if oxygen level dips below 19.5% v/v. Our Oxygen Detector will initiate alarm when level of oxygen increases to prevent oxygen enriched atmosphere and reduce the risk of flammability of materials and gases."
            link="oxygen-detectors"
          />
        </Col>
      </Row>
    </Section>
    <Section backgroundColor="#F6F6F6">
      <h2 style={{ color: '#DD2C2C', textAlign: 'center' }}>Who we serve</h2>
      <p>Logos coming soon.</p>
    </Section>
    <Section
      backgroundColor="#FFFFFF"
      contentPosition="right"
      foregroundImageSrc="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/product-001.png"
      foregroundImageWidth="45%"
      foregroundImagePosition={['45%', 'calc(30% - 100px)']}
      parallax
    >
      <SectionSupertitle>Performance when it counts</SectionSupertitle>
      <h2 style={{ color: '#DD2C2C' }}>Our detectors work as hard as you do</h2>
      <p>
        The proven design of ESP Safety’s detectors guarantees the precise response when a real event occurs in your critical
        area under normal or severe environmental conditions. The engineered smart-design of the flame and gas detectors
        eliminates the false alarms due to false stimulating factors present in your detection area minimizing the unnecessary
        and costly process shutdowns.
      </p>
    </Section>
    <Section
      backgroundColor="#F6F6F6"
      contentPosition="left"
      foregroundImageSrc="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2019/06/IR3-IRUVAL-IRUVSS.png"
      foregroundImageWidth="50%"
      foregroundImagePosition={['45%', 'calc(60% + 300px)']}
      parallax
    >
      <SectionSupertitle>Reliability is protection</SectionSupertitle>
      <h2 style={{ color: '#DD2C2C' }}>Tried, tested, and certified</h2>
      <p>
        ESP Safety explosion-proof detectors are certified to meet the most demanding performance standards in the industry,
        including FM, ATEX, IECx, GOST, and ABS. The detectors are widely used in hazardous locations that demand high
        performance, reliability, and continuous integrity levels.
      </p>
    </Section>
    <Section
      backgroundColor="#000000"
      dark
      contentPosition="right"
      foregroundImageSrc="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2016/07/SSS-903_2013C.png"
      foregroundImageWidth="20%"
      foregroundImagePosition={['45%', 'calc(40% - 100px)']}
      parallax
    >
      <SectionSupertitle>Convenient and easy to use</SectionSupertitle>
      <h2 style={{ color: '#DD2C2C' }}>Straightforward, user-friendly design</h2>
      <p>
        ESP Safety detectors are designed to ease the complications of installations, calibrations and maintenance. By offering
        standard multiple signal outputs, the detectors provide the compatibility to work with different fire and gas systems.
        The different methods available to perform calibrations give you the flexibility to choose the best option for your
        needs. With minimum maintenance required, your detector’s service life is maximized.
      </p>
    </Section>
    <Section
      imageSrc="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/smoke_PNG962-blurred-1.png"
      backgroundColor="linear-gradient(to bottom,rgba(249,249,249,0.2) 0%,#f9f9f9 100%)"
      parallax
      follWidth
    >
      <Row>
        <Col xs={6}>
          <h2 style={{ color: '#DD2C2C' }}>Meeting your expectations with premium service</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <p>
            When you contact us, you are assigned a dedicated representative that works with you to recommend the right solution
            for your application. By working with an experienced representative you are assured that you are speaking with
            someone that knows and fully understands your project from the beginning.{' '}
          </p>
        </Col>
        <Col sm={6}>
          <p>
            An experienced team of engineers will support and assist you from start to finish ensuring your project’s success.
            Have a project in mind? Contact us and we’ll help you get started!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <SectionActions>
            <ArrowLink to="/contact">Contact us</ArrowLink>
          </SectionActions>
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
