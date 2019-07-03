import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'
import Section from '../components/Section'
import { Layout, Row, Col, breakpoints } from '../components/Layout'
import ImageGallery from '../components/ImageGallery'
import ReadMore from '../components/ReadMore'
import { Tabs, Tab } from '../components/Tabs'
import Content, { HTMLContent } from '../components/Content'

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
  ${breakpoints.sm} {
    padding-top: 12.5%;
    padding-bottom: 12.5%;
  }
  ${breakpoints.md} {
    padding-top: 10%;
    padding-bottom: 10%;
  }
  ${breakpoints.lg} {
    padding-top: 7.5%;
    padding-bottom: 7.5%;
  }
  ${breakpoints.xl} {
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

export const ProductTemplate = ({ title, helmet, contentComponent }) => {
  return (
    <React.Fragment>
      <Header title={title} />
      <Section>
        <Row>
          <Col xs={6}>
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
          </Col>
          <Col xs={6}>
            <Tabs>
              <Tab label="Product Overview" value="overview">
                <ReadMore>
                  <p>
                    Lorem ipsum dolor sit amet, quo te tempor mollis, posse consetetur eu pro. Ad vix malis docendi. Utroque
                    evertitur est ad, in hendrerit voluptatibus mea. Cum ut probo autem omnium. Equidem imperdiet reprehendunt
                    ut eum, sed ex malorum admodum abhorreant, no mea aliquip suscipiantur. Euismod complectitur intellegebat at
                    mel, nisl eligendi salutandi eum ea, et mea eirmod accusam.
                  </p>
                  <p>
                    Vim nihil iisque docendi in, ut graeci suavitate scriptorem est, eos eu idque eirmod gubergren. Ne eam diam
                    possit civibus, eu imperdiet hendrerit mel. Et usu dicta iudico. Ne dolor lobortis oportere usu. Erat tollit
                    melius ei nam, dicat postulant qui te. Ei quo zril tantas scripta.
                  </p>
                  <p>
                    Usu eligendi molestiae definitiones eu, eum probatus splendide contentiones id, an erant dolore his. Te
                    offendit indoctum efficiantur has, ludus suscipit an sea. Stet mediocrem per ex. Ea eam etiam equidem
                    corpora.
                  </p>
                  <p>
                    Usu agam laudem disputando ea, homero populo eu cum, vix id persius aliquid propriae. Est viderer insolens
                    cu, an aeque senserit cum. Ex mel idque latine ponderum, an legimus phaedrum quo. Id adhuc explicari
                    vulputate vim, eu vim equidem tibique perpetua, in dictas maiorum ius. An his falli solet, sit ei eruditi
                    dissentiunt.
                  </p>
                  <p>
                    Eos nonumy expetenda scripserit te, ad vide iuvaret vel. Eum ne mandamus principes. Ad velit volumus his, ad
                    eum illud voluptatum. Te reque zril impetus mea. Quodsi contentiones usu ei, ad epicurei antiopam omittantur
                    eum, in quem corrumpit conceptam pro. Eu nec etiam qualisque, pri an rebum soluta. Oratio probatus gloriatur
                    mel te, no postea dignissim sed.
                  </p>
                </ReadMore>
              </Tab>
              <Tab label="Applications" value="applications">
                <p>Applications tab content coming soon.</p>
                <ul
                  style={{
                    columnCount: 2
                  }}
                >
                  <li>Test One List Item</li>
                  <li>Test Two List Item</li>
                  <li>Test Three List Item</li>
                  <li>Test Four List Item</li>
                  <li>Test Five List Item</li>
                  <li>Test Six List Item</li>
                  <li>Test Seven List Item</li>
                  <li>Test Eight List Item</li>
                  <li>Test Nine List Item</li>
                  <li>Test Ten List Item</li>
                  <li>Test Eleven List Item</li>
                  <li>Test Twelve List Item</li>
                </ul>
              </Tab>
              <Tab label="Features & Benefits" value="features">
                <p>Features & Benefits tab content coming soon.</p>
                <ul
                  style={{
                    columnCount: 2
                  }}
                >
                  <li>Test One List Item</li>
                  <li>Test Two List Item</li>
                  <li>Test Three List Item</li>
                  <li>Test Four List Item</li>
                  <li>Test Five List Item</li>
                  <li>Test Six List Item</li>
                  <li>Test Seven List Item</li>
                  <li>Test Eight List Item</li>
                  <li>Test Nine List Item</li>
                  <li>Test Ten List Item</li>
                  <li>Test Eleven List Item</li>
                  <li>Test Twelve List Item</li>
                </ul>
              </Tab>
              <Tab label="Downloads" value="downloads">
                <p>Downloads tab content coming soon.</p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Section>
      <Section
        imageSrc="https://images.unsplash.com/photo-1561717507-080fac4a8cca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"
        backgroundColor="#F6F6F6"
        parallax
        imagePosition="right"
      >
        <h2 style={{ color: '#DD2C2C' }}>Straightforward, user-friendly design</h2>
        <p>
          ESP Safety detectors are designed to ease the complications of installations, calibrations and maintenance. By
          offering standard multiple signal outputs, the detectors provide the compatibility to work with different fire and gas
          systems. The different methods available to perform calibrations give you the flexibility to choose the best option
          for your needs. With minimum maintenance required, your detector’s service life is maximized.
        </p>
      </Section>
      <Section
        imageSrc="https://images.unsplash.com/photo-1561716749-2ab5a223957c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
        backgroundColor="#FFFFFF"
        parallax
        imagePosition="left"
      >
        <h2>Straightforward, user-friendly design</h2>
        <p>
          ESP Safety detectors are designed to ease the complications of installations, calibrations and maintenance. By
          offering standard multiple signal outputs, the detectors provide the compatibility to work with different fire and gas
          systems. The different methods available to perform calibrations give you the flexibility to choose the best option
          for your needs. With minimum maintenance required, your detector’s service life is maximized.
        </p>
      </Section>
      <SpecificationsSection>
        <Layout>
          <h2>Specifications</h2>
          <SpecificationCategoryRow>
            <Col lg={4}>
              <SpecificationCategoryTitle>Category Title</SpecificationCategoryTitle>
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
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
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
              <SpecificationCategoryTitle>Category Title</SpecificationCategoryTitle>
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
                <SpecificationCol xs={6}>
                  <SpecificationLabel>Spec label coming soon</SpecificationLabel>
                  <SpecificationValue>Spec value coming soon</SpecificationValue>
                </SpecificationCol>
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
