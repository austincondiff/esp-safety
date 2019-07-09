import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import theme from '../lib/theme'

import Hero from '../components/Hero'
import Section from '../components/Section'
import IconBox from '../components/IconBox'
import Features from '../components/Features'
import News from '../components/News'
import { Layout, Row, Col, mediaQueries } from '../components/Layout'
import ArrowLink from '../components/ArrowLink'
import Stat from '../components/Stat'
import { Testimonials, Testimonial } from '../components/Testimonials'

import FlameIcon from '../images/flame.svg'
import CombustibleGasIcon from '../images/combustible-gas.svg'
import ToxicGasIcon from '../images/toxic-gas.svg'
import OxygenIcon from '../images/oxygen.svg'

const SectionSupertitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`
const SectionActions = styled.h3`
  margin-top: 32px;
`
const Logos = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -5%;
  align-items: center;
  ${mediaQueries.md} {
    height: 12vh;
  }
`
const Logo = styled.a.attrs(props => ({
  href: props.url,
  target: '_blank',
  title: props.label
}))`
  display: block;
  box-sizing: border-box;
  flex: 0 0 auto;
  max-width: 100%;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  flex-basis: 33.333333333%;
  width: 33.333333333%;
  height: 10vw;
  margin: 3% 0;
  min-height: 7vh;
  max-height: 9vh;
  filter: grayscale(1) brightness(0.8) contrast(2.5);
  transition: 0.25s;
  &:hover {
    filter: grayscale(0) brightness(1) contrast(1);
    opacity: 1;
  }
  ${mediaQueries.md} {
    flex-basis: 16.666666666%;
    width: 16.666666666%;
    height: 6.667vw;
    margin: 0;
  }
`
const PageIntroTitle = styled.h2`
  font-size: 28px;
  font-weight: 300;
  color: ${props => props.theme.color.primary};
  letter-spacing: -0.5px;
  text-align: center;
  line-height: 40px;
`
const PageIntroDescription = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000000;
  letter-spacing: -0.33px;
  text-align: center;
  line-height: 32px;
`
const TestimonalTitle = styled.h2`
  text-align: center;
  margin-bottom: 6vw;
`
const TestimonalDescription = styled.p`
  text-align: center;
  color: ${props => props.theme.color.primary};
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 4px;
`

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => (
  <div>
    <Hero
      height="88vh"
      title="Technology of the future, protection for today"
      subtitle="We keep you safe with our industry leading safety products specializing in gas and flame detectors"
      videoSrc={[
        'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/esp-hero-bg-480p.webm',
        'http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/esp-hero-bg-480p.mp4'
      ]}
      primaryButtonLink={'/products'}
      primaryButtonLabel={'View Our Products'}
      secondaryButtonLink={'/about'}
      secondaryButtonLabel={'Learn About Us'}
      showArrow
    />
    <Layout>
      <Logos>
        <Logo
          label="Chevron"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/chevron.png"
          url="https://www.chevron.com/"
        />
        <Logo
          label="Shell"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/shell.png"
          url="http://www.shell.com/"
        />
        <Logo
          label="British Petroleum"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/bp.png"
          url="https://www.bp.com/"
        />
        <Logo
          label="Mitsubishi"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/mitsubishi.png"
          url="http://www.mitsubishicorp.com/"
        />
        <Logo
          label="Pemex"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/pemex.png"
          url="http://www.pemex.com/en/"
        />
        <Logo
          label="CNPC"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/cnpc.png"
          url="http://www.cnpc.com.cn/en/"
        />
        {/*
        <Logo
          label="Caspian Pipeline Consortium"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/caspianpipeline.png"
          url="http://www.cpc.ru/EN/"
        />
        <Logo
          label="Conoco Phillips"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/conocophillips.png"
          url="http://www.conocophillips.com/"
        />
        <Logo
          label="ENI"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/eni.png"
          url="https://www.eni.com/"
        />
        <Logo
          label="Mitsui & Co."
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/mitsui.png"
          url="https://www.mitsui.com/"
        />
        <Logo
          label="Tethys Petroleum"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/unilever.png"
          url="http://www.tethyspetroleum.com/"
        />
        <Logo
          label="Unilever"
          image="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/tethys.png"
          url="https://www.unilever.com/"
        />
        */}
      </Logos>
    </Layout>
    <Section noPaddingBottom>
      <Row>
        <Col xs={10} xsOffset={1}>
          <PageIntroTitle>
            We are a team of experts who specialize in the design of fixed toxic and combustible gas detection, flame detection,
            and complete turn-key safety systems.
          </PageIntroTitle>
          <PageIntroDescription>
            Our state-of-the-art manufacturing facility allows us to apply strict quality standards and intelligent engineering
            to ensure that all of our products meet the demands of the toughest industrial environments and applications. The
            result is a line of world class products all certified to the strictest global standards for safety and performance.
          </PageIntroDescription>
        </Col>
      </Row>
    </Section>
    <Section>
      <Row>
        <Col sm={6} md={3}>
          <IconBox
            icon={FlameIcon}
            title="Flame Detectors"
            description="Every flame detector we offer provides reliable service and long lasting field performance in the harshest of environments, all at the industry’s best pricing."
            link="/products/flame-detectors"
          />
        </Col>
        <Col sm={6} md={3}>
          <IconBox
            icon={CombustibleGasIcon}
            title="Combustible Gas Detectors"
            description="Configured to report alarms when the gas concentrations in the environment reach each of three independently programmable levels, expressed as a percentage of the lower explosive limit (LEL) in the air."
            link="/products/combustible-gas-detectors"
          />
        </Col>
        <Col sm={6} md={3}>
          <IconBox
            icon={ToxicGasIcon}
            title="Toxic Gas Detectors"
            description="Designed to safely detect and monitor a variety of toxic gases in the air, including hydrogen sulfide, carbon monoxide, chlorine, nitric oxide, and sulfur dioxide, over a range of 0-100 ppm."
            link="/products/toxic-gas-detectors"
          />
        </Col>
        <Col sm={6} md={3}>
          <IconBox
            icon={OxygenIcon}
            title="Oxygen Detectors"
            description="Monitors oxygen level in ambient air or process applications and will alarm if oxygen level dips below 19.5% v/v. Our Oxygen Detector will initiate alarm when level of oxygen increases to prevent oxygen enriched atmosphere and reduce the risk of flammability of materials and gases."
            link="oxygen-detectors"
          />
        </Col>
      </Row>
    </Section>
    <Section
      contentPosition="right"
      foregroundImageSrc="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2017/05/product-001.png"
      foregroundImageWidth="45%"
      foregroundImagePosition={['45%', 'calc(30% - 100px)']}
      parallax
    >
      <SectionSupertitle>Performance when it counts</SectionSupertitle>
      <h2 style={{ color: theme.color.primary }}>Our detectors work as hard as you do</h2>
      <p>
        The proven design of ESP Safety’s detectors guarantees the precise response when a real event occurs in your critical
        area under normal or severe environmental conditions. The engineered smart-design of the flame and gas detectors
        eliminates the false alarms due to false stimulating factors present in your detection area minimizing the unnecessary
        and costly process shutdowns.
      </p>
    </Section>
    <Section
      contentPosition="left"
      foregroundImageSrc="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2019/06/IR3-IRUVAL-IRUVSS.png"
      foregroundImageWidth="50%"
      foregroundImagePosition={['45%', 'calc(60% + 300px)']}
      parallax
    >
      <SectionSupertitle>Reliability is protection</SectionSupertitle>
      <h2 style={{ color: theme.color.primary }}>Tried, tested, and certified</h2>
      <p>
        ESP Safety explosion-proof detectors are certified to meet the most demanding performance standards in the industry,
        including FM, ATEX, IECx, GOST, and ABS. The detectors are widely used in hazardous locations that demand high
        performance, reliability, and continuous integrity levels.
      </p>
    </Section>
    <Section
      contentPosition="right"
      foregroundImageSrc="http://clients.continuumcreative.com/espsafety/wp-content/uploads/2016/07/SSS-903_2013C.png"
      foregroundImageWidth="20%"
      foregroundImagePosition={['45%', 'calc(40% - 100px)']}
      parallax
    >
      <SectionSupertitle>Convenient and easy to use</SectionSupertitle>
      <h2 style={{ color: theme.color.primary }}>Straightforward, user-friendly design</h2>
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
          <h2 style={{ color: theme.color.primary }}>Meeting your expectations with premium service</h2>
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
    <Section backgroundColor="black" dark>
      <Row between>
        <Col xs={6} md={3}>
          <Stat number={15} unit="M" label="Products sold" />
        </Col>
        <Col xs={6} md={3}>
          <Stat number={75} unit="k" label="Satisfied customers" />
        </Col>
        <Col xs={6} md={3}>
          <Stat number={100} unit="%" label="Safety record" />
        </Col>
        <Col xs={6} md={3}>
          <Stat number={62} unit="k" label="Accidents prevented" />
        </Col>
      </Row>
    </Section>
    <Section>
      <TestimonalDescription>Customer testimonials</TestimonalDescription>
      <TestimonalTitle>What people are saying about us</TestimonalTitle>
      <Testimonials>
        <Testimonial
          quote="In our previous projects we worked extensively with the ESP Safety line of Flame and Gas detectors, and had nothing but good experiences. We have determined that the ESP’s flame detectors significantly outshines the others. "
          name="John S."
          title="Industrial Engineer"
          avatar=""
          logo=""
          company="Pemex"
        />
        <Testimonial
          quote="I have worked with ESP Safety since 2011. We use ESP gas detectors and controllers along with flame detectors on our offshore platforms. They have performed exceptionally well and are highly reliable. Minimum maintenance has been required despite the harsh operating environment. "
          name="Jane D."
          title="Industrial Engineer"
          avatar=""
          logo=""
          company="Energy XXL"
        />
        <Testimonial
          quote="Because of recent issues with the alignment and alarms of a different vendor’s gas detector I had to research alternatives to our problem. My first call was to ESP Safety. Within a few days ESP employees appeared at our site and installed the open path gas detector in one of our most difficult locations. Since the installation this detection equipment has worked great. "
          name="Jack G."
          title="Industrial Engineer"
          avatar=""
          logo=""
          company="Philips 66"
        />
        <Testimonial
          quote="We have dealt with ESP Safety for the past several months, during which time they have provided an excellent product and support in the areas of long Range Gas Detection. I can confidently recommend ESP Safety as a solid and reliable supplier, and experts in their field. "
          name="Zak R."
          title="Industrial Engineer"
          avatar=""
          logo=""
          company="Acme Co."
        />
    </Testimonials>
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
