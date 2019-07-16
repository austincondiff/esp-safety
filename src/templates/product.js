import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'
import Section from '../components/Section'
import { Layout, Row, Col, mediaQueries } from '../components/Layout'
import ImageGallery from '../components/ImageGallery'
import ReadMore from '../components/ReadMore'
import MarkdownContent from '../components/MarkdownContent'
import { Tabs, Tab } from '../components/Tabs'
import Content, { HTMLContent } from '../components/Content'
import VisibilityTrailAnimation from '../components/VisibilityTrailAnimation'

const SpecificationsSection = styled.section`
  color: #ffffff;
  background-color: #161616;
  background-size: 128px 128px, 128px 128px, 16px 16px, 16px 16px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.033) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.033) 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  padding-top: 15%;
  padding-bottom: 15%;
  ${mediaQueries.sm} {
    padding-top: 12.5%;
    padding-bottom: 12.5%;
  }
  ${mediaQueries.md} {
    padding-top: 10%;
    padding-bottom: 10%;
  }
  ${mediaQueries.lg} {
    padding-top: 7.5%;
    padding-bottom: 7.5%;
  }
  ${mediaQueries.xl} {
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const SpecificationCategoryRow = styled(Row)`
  margin-top: 8%;
  margin-bottom: 8%;
`
const SpecificationCategoryTitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  letter-spacing: -0.5px;
`
const SpecificationLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.38px;
  margin-bottom: 2%;
`
const SpecificationValue = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #cccccc;
  letter-spacing: -0.38px;
`

const SpecificationCol = styled(Col)`
  padding-top: 16px;
  padding-bottom: 16px;
`
const SpecificationsTitle = styled.h2`
  color: #ffffff;
`

export const ProductTemplate = ({ data, title, helmet, contentComponent }) => {
  console.log(data)
  return (
    <React.Fragment>
      <Header title={title} subtitle={data.category} />
      <Section>
        <Row>
          <Col xs={12} sm={6}>
            <VisibilityTrailAnimation>
              <ImageGallery
                images={[
                  'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2019/06/sgoes.png',
                  'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/product-001.png',
                  'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2019/06/IR3-IRUVAL-IRUVSS.png',
                  'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2016/07/SSS-903_2013C.png',
                  'https://images.unsplash.com/photo-1561717507-080fac4a8cca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80',
                  'https://images.unsplash.com/photo-1561716749-2ab5a223957c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80'
                ]}
              />
            </VisibilityTrailAnimation>
          </Col>
          <Col xs={12} sm={6}>
            <VisibilityTrailAnimation>
              <Tabs>
                {data.overview && (
                  <Tab label="Product Overview" value="overview">
                    <ReadMore>
                      <MarkdownContent content={data.overview} />
                    </ReadMore>
                  </Tab>
                )}
                {data.applications && (
                  <Tab label="Applications" value="applications">
                    <p>Applications tab content coming soon.</p>
                    <ul
                      style={{
                        columnCount: 2
                      }}
                    >
                      {data.applications.map(({ application }) => (
                        <li>{application}</li>
                      ))}
                    </ul>
                  </Tab>
                )}
                {data.features && (
                  <Tab label="Features & Benefits" value="features">
                    <p>Features & Benefits tab content coming soon.</p>
                    <ul
                      style={{
                        columnCount: 2
                      }}
                    >
                      {data.features.map(({ feature }) => (
                        <li>{feature}</li>
                      ))}
                    </ul>
                  </Tab>
                )}
                <Tab label="Downloads" value="downloads">
                  <p>Downloads tab content coming soon.</p>
                </Tab>
              </Tabs>
            </VisibilityTrailAnimation>
          </Col>
        </Row>
      </Section>
      <Section backgroundImage="/images/pexels-photo-87236.jpg" backgroundColor="#F6F6F6" parallax imagePosition="right">
        <h2 style={{ color: '#DD2C2C' }}>Tried, tested, and certified, so you can use it pretty much anywhere</h2>
        <p>
          The explosion-proof design of SGOES makes it ideal for use in hazardous environments such as: • Refineries • Tank
          farms • Pipelines • Loading racks. • Oil and gas facilities • Pumping stations
        </p>
        <p>
          SGOES is FM-certified for use in potentially explosive gas/vapor environments in compliance with FM3615 and CSA-C22.2
          No 30 standards for explosion proof protection. In addition, it meets CSA standard E60079-1 for flameproof protection,
          and ANSI/ISA standard 12.13.01-2000 for performance of combustible gas detectors.
        </p>
      </Section>
      <Section backgroundImage="/images/296063_thumb.jpg" backgroundColor="#FFFFFF" parallax imagePosition="left">
        <h2 style={{ color: '#DD2C2C' }}>Straightforward, user-friendly design</h2>
        <p>
          ESP Safety detectors are designed to ease the complications of installations, calibrations and maintenance. By
          offering standard multiple signal outputs, the detectors provide the compatibility to work with different fire and gas
          systems. The different methods available to perform calibrations give you the flexibility to choose the best option
          for your needs. With minimum maintenance required, your detector’s service life is maximized.
        </p>
      </Section>
      <SpecificationsSection>
        <Layout>
          <SpecificationsTitle>Specifications</SpecificationsTitle>
          {false && (
            <SpecificationCategoryRow>
              <Col lg={4}>
                <SpecificationCategoryTitle>Electrical</SpecificationCategoryTitle>
              </Col>
              <Col lg={8}>
                <Row>
                  <SpecificationCol xs={6}>
                    <SpecificationLabel>Power requirements</SpecificationLabel>
                    <SpecificationValue>24VDC nominal (18‐32VDC range)</SpecificationValue>
                  </SpecificationCol>
                  <SpecificationCol xs={6}>
                    <SpecificationLabel>Power consumption</SpecificationLabel>
                    <SpecificationValue>Stand By: 2 W max; Alarm State: 3 W max</SpecificationValue>
                  </SpecificationCol>
                  <SpecificationCol xs={6}>
                    <SpecificationLabel>Analog signal</SpecificationLabel>
                    <SpecificationValue>4 to 20mA (0 to 100% LEL)</SpecificationValue>
                  </SpecificationCol>
                  <SpecificationCol xs={6}>
                    <SpecificationLabel>Relay contact</SpecificationLabel>
                    <SpecificationValue>
                      Two alarm relays (isolated, dry contact type) with programmable thresholds <br />
                      Fault relay indicating optical path obstruction
                    </SpecificationValue>
                  </SpecificationCol>
                  <SpecificationCol xs={6}>
                    <SpecificationLabel>Digital</SpecificationLabel>
                    <SpecificationValue>RS‐485 Modbus</SpecificationValue>
                  </SpecificationCol>
                  <SpecificationCol xs={6}>
                    <SpecificationLabel>Wiring</SpecificationLabel>
                    <SpecificationValue>
                      14 AWG (2.08 mm2) or 16 AWG (1.31 mm2)
                      <br />
                      Shielded cable is recommended
                      <br />
                      16 AWG (1.5mm) for 4000ft (1200m) max
                    </SpecificationValue>
                  </SpecificationCol>
                </Row>
              </Col>
            </SpecificationCategoryRow>
          )}
          <SpecificationCategoryRow>
            <Col lg={4}>
              <SpecificationCategoryTitle>Electrical Characteristics</SpecificationCategoryTitle>
            </Col>
            <Col lg={8}>
              <Row>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Voltage</SpecificationLabel>
                  <SpecificationValue>18 to 32 VDC</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Recommended Wiring</SpecificationLabel>
                  <SpecificationValue>16 AWG (1.5mm) for 4000ft (1200m) max</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Outputs</SpecificationLabel>
                  <SpecificationValue>
                    4-20mA, analog (0 to 100% LEL)
                    <br />
                    two alarm relays (isolated, dry contact type)
                    <br />
                    with programmable thresholds
                    <br />
                    fault relay indicating optical path obstruction
                    <br />
                    RS-485 Modbus RTU, HART, Ethernet
                  </SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Power</SpecificationLabel>
                  <SpecificationValue>
                    2 W, standby
                    <br />
                    4.5 W, during alarm
                    <br />
                    7.9 W, heater on maximum
                  </SpecificationValue>
                </SpecificationCol>
              </Row>
            </Col>
          </SpecificationCategoryRow>
          <SpecificationCategoryRow>
            <Col lg={4}>
              <SpecificationCategoryTitle>Mechanical Characteristics</SpecificationCategoryTitle>
            </Col>
            <Col lg={8}>
              <Row>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Material</SpecificationLabel>
                  <SpecificationValue>316 Stainless Steel</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Weight</SpecificationLabel>
                  <SpecificationValue>14.3lbs (6.5 kg)</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Diameter</SpecificationLabel>
                  <SpecificationValue>5.5” (14 cm)</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Conduit Entry</SpecificationLabel>
                  <SpecificationValue>¾” NPT</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Length</SpecificationLabel>
                  <SpecificationValue>11.5” (29 cm)</SpecificationValue>
                </SpecificationCol>
              </Row>
            </Col>
          </SpecificationCategoryRow>
          <SpecificationCategoryRow>
            <Col lg={4}>
              <SpecificationCategoryTitle>Dimensions</SpecificationCategoryTitle>
            </Col>
            <Col lg={8}>
              <Row>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
              </Row>
            </Col>
          </SpecificationCategoryRow>
          <SpecificationCategoryRow>
            <Col lg={4}>
              <SpecificationCategoryTitle>Calibration</SpecificationCategoryTitle>
            </Col>
            <Col lg={8}>
              <Row>
                <SpecificationCol xs={12}>
                  <SpecificationValue>
                    Factory calibrated at 0%, 20%, 50%, and 95% LEL with methane or propane. Calibration with NIST traceable
                    calibration gas is optional.
                  </SpecificationValue>
                </SpecificationCol>
              </Row>
            </Col>
          </SpecificationCategoryRow>
          <SpecificationCategoryRow>
            <Col lg={4}>
              <SpecificationCategoryTitle>Configuration Options</SpecificationCategoryTitle>
            </Col>
            <Col lg={8}>
              <Row>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Standard gas options</SpecificationLabel>
                  <SpecificationValue>
                    Methane, Propane, Butane, Pentane, Hexane, Isobutane, Cyclopentane, Ethanol,
                  </SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Custom gas configuration options</SpecificationLabel>
                  <SpecificationValue>
                    Volatile Organic Compounds (VOC)
                    <br />
                    Optional calibration with gas mixtures directly traceable to NIST standard reference materials.
                  </SpecificationValue>
                </SpecificationCol>
              </Row>
            </Col>
          </SpecificationCategoryRow>
          <SpecificationCategoryRow>
            <Col lg={4}>
              <SpecificationCategoryTitle>Certifications</SpecificationCategoryTitle>
            </Col>
            <Col lg={8}>
              <Row>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Certification logo coming soon</SpecificationLabel>
                  <SpecificationValue>
                    Class I, Division 1 <br />
                    Groups B, C & D <br />
                    T4 Ta = -40°F to +167°F <br />
                    (-40°C to +75°C) <br />
                    IP66
                  </SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Certification logo coming soon</SpecificationLabel>
                  <SpecificationValue>
                    Ex d IIC T4 <br />
                    -40°F to +185°F <br />
                    (-40°C to +85°C) <br />
                    CE Mark for EMC (TUV) <br />
                    CE Mark for IECEx <br />
                    IP66
                  </SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Certification logo coming soon</SpecificationLabel>
                  <SpecificationValue>
                    Class I, Division 1 <br />
                    Groups B, C & D <br />
                    T4 Ta = -40°F to +167°F <br />
                    (-40°C to +75°C) <br />
                    IP66
                  </SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Certification logo coming soon</SpecificationLabel>
                  <SpecificationValue>
                    Class I, Division 1 <br />
                    Groups B, C & D <br />
                    T4 Ta = -40°F to +167°F <br />
                    (-40°C to +75°C) <br />
                    IP66
                  </SpecificationValue>
                </SpecificationCol>
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>
                    Ex d IIC T4 <br />
                    -40°F to +185°F <br />
                    (-40°C to +85°C) <br />
                    IP66
                  </SpecificationValue>
                </SpecificationCol>
              </Row>
            </Col>
          </SpecificationCategoryRow>
        </Layout>
      </SpecificationsSection>
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
  console.log(data)

  const product = {
    id: data.markdownRemark.id,
    ...data.markdownRemark.frontmatter
  }

  console.log(product)

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
        slug
        category
        overview
        applications {
          application
        }
        features {
          feature
        }
      }
    }
  }
`
