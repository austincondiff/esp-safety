import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { animated, useSpring, useChain, config } from 'react-spring'

import theme from '../lib/theme'

import MarkdownContent from '../components/MarkdownContent'
import Context from '../components/Context'
import Parallax from '../components/Parallax'
import VisibilityTrailAnimation from '../components/VisibilityTrailAnimation'
import VisibilitySensor from '../components/VisibilitySensor'
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
  font-size: 1.125rem;
  margin-bottom: 0.5em;
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
  font-size: 18px;
  font-weight: 300;
  color: ${props => props.theme.color.primary};
  letter-spacing: -0.5px;
  text-align: center;
  line-height: 1.428em;
  ${mediaQueries.md} {
    font-size: 32px;
  }
`
const PageIntroDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #000000;
  letter-spacing: -0.33px;
  text-align: center;
  line-height: 1.7777em;
  ${mediaQueries.md} {
    font-size: 18px;
  }
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
const FloatingImg = styled.img`
  border-radius: 8px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
`
const CertificationBadge = styled(animated.img).attrs({
  src: '/media/certified-badge.svg'
})`
  width: 100%;
`

const getMediaPath = img => {
  if (typeof img === 'string') {
    return `/media/${img.replace('/media/', '')}`
  } else {
    return `/media/${img.relativePath}`
  }
}

export const IndexPageTemplate = ({
  header,
  mainPitch,
  productCategories,
  detectors,
  certifications,
  convenience,
  customerService,
  statistics,
  customerTestimonials
}) => {
  const [certificationBlockIsVisible, setCertificationBlockIsVisible] = useState()
  const stampAnimation = useSpring({
    config: config.stiff,
    opacity: certificationBlockIsVisible ? 1 : 0,
    transform: certificationBlockIsVisible ? 'scale(1) rotate(-22.5deg)' : 'scale(2) rotate(0deg)'
  })

  return (
    <div>
      <Hero
        height="88vh"
        title={header.title}
        subtitle={header.subtitle}
        backgroundVideo={{
          webm: getMediaPath(header.backgroundVideo.webm),
          mp4: getMediaPath(header.backgroundVideo.mp4)
        }}
        primaryButtonLink={header.primaryButton.path}
        primaryButtonLabel={header.primaryButton.label}
        secondaryButtonLink={header.secondaryButton.path}
        secondaryButtonLabel={header.secondaryButton.label}
        showArrow
      />
      <Layout>
        <Logos>
          {header.logos.map(logo => (
            <Logo label={logo.name} image={getMediaPath(logo.image)} url={logo.url} />
          ))}
        </Logos>
      </Layout>
      <Section xsPaddingTop="comfortable">
        <Row>
          <Col sm={10} smOffset={1}>
            <VisibilityTrailAnimation>
              <PageIntroTitle>
                {mainPitch.title}
              </PageIntroTitle>
              <PageIntroDescription>
                {mainPitch.description}
              </PageIntroDescription>
            </VisibilityTrailAnimation>
          </Col>
        </Row>
      </Section>
      <Section xsPadding="comfortable">
        <Row>
          <Col xs={6} md={3}>
            <IconBox
              icon={FlameIcon}
              title="Flame Detectors"
              description="Detect hydrogen and hydrocarbon based fires. High immunity to false alarms and wide temperature range."
              link="/products?tab=flame-detectors"
            />
          </Col>
          <Col xs={6} md={3}>
            <IconBox
              icon={CombustibleGasIcon}
              title="Combustible Gas Detectors"
              description="Detects the presence of combustible and flammable gases. Fast response time and wide temperature range."
              link="/products?tab=combustible-gas-detectors"
            />
          </Col>
          <Col xs={6} md={3}>
            <IconBox
              icon={ToxicGasIcon}
              title="Toxic Gas Detectors"
              description="Continuous monitoring of the atmosphere for toxic gas leaks "
              link="/products?tab=toxic-gas-detectors"
            />
          </Col>
          <Col xs={6} md={3}>
            <IconBox
              icon={OxygenIcon}
              title="Oxygen Detectors"
              description="Detects oxygen at dangerously low levels or high levels which can cause flammability of materials and gases."
              link="/products?tab=oxygen-detectors"
            />
          </Col>
        </Row>
      </Section>
      <Section
        xsPadding="comfortable"
        backgroundImage={getMediaPath(detectors.image)}
        backgroundColor="#000000"
        dark
        parallax
        imagePosition="left"
      >
        <VisibilityTrailAnimation>
          <SectionSupertitle>{detectors.supertitle}</SectionSupertitle>
          <h2 style={{ color: theme.color.primary }}>{detectors.title}</h2>
          <MarkdownContent content={detectors.description} />
        </VisibilityTrailAnimation>
      </Section>
      <Section xsPadding="comfortable" backgroundColor="#F6F6F6">
        <Row reverse="sm" middle>
          <Col sm={6}>
            <Row>
              <Col sm={6} smOffset={3}>
                <VisibilitySensor
                  once
                  offset={{ bottom: 300 }}
                  onChange={certificationBlockIsVisible => setCertificationBlockIsVisible(certificationBlockIsVisible)}
                >
                  <CertificationBadge style={stampAnimation} />
                </VisibilitySensor>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <VisibilityTrailAnimation>
              <SectionSupertitle>{certifications.supertitle}</SectionSupertitle>
              <h2 style={{ color: theme.color.primary }}>{certifications.title}</h2>
              <MarkdownContent content={certifications.description} />
            </VisibilityTrailAnimation>
          </Col>
        </Row>
      </Section>
      <Section
        xsPadding="comfortable"
        contentPosition="right"
        backgroundColor="#FFFFFF"
        foregroundImageSrc={getMediaPath(convenience.image)}
        foregroundImageWidth="30%"
        foregroundImagePosition={['70%', '30%']}
        parallax
      >
        <VisibilityTrailAnimation>
          <SectionSupertitle>{convenience.supertitle}</SectionSupertitle>
          <h2 style={{ color: theme.color.primary }}>{convenience.title}</h2>
          <MarkdownContent content={convenience.description} />
        </VisibilityTrailAnimation>
      </Section>
      <Section
        xsPadding="comfortable"
        backgroundImage={getMediaPath(customerService.image)}
        backgroundColor="#F6F6F6"
        imagePosition="right"
        backgroundImagePosition="center left"
        contentPosition="left"
        parallax
        follWidth
      >
        <VisibilityTrailAnimation>
          <SectionSupertitle>{customerService.supertitle}</SectionSupertitle>
          <h2 style={{ color: theme.color.primary }}>{customerService.title}</h2>
          <MarkdownContent content={customerService.description} />
          <SectionActions>
            <ArrowLink to={customerService.link.path}>{customerService.link.label}</ArrowLink>
          </SectionActions>
        </VisibilityTrailAnimation>
      </Section>
      <Section xsPadding="comfortable" backgroundColor="black" dark>
        <VisibilityTrailAnimation>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Row between>
                <Col xs={6} md={3}>
                  <Stat isVisible={isVisible} number={15} unit="M" label="Products sold" />
                </Col>
                <Col xs={6} md={3}>
                  <Stat isVisible={isVisible} number={75} unit="k" label="Satisfied customers" />
                </Col>
                <Col xs={6} md={3}>
                  <Stat isVisible={isVisible} number={100} unit="%" label="Safety record" />
                </Col>
                <Col xs={6} md={3}>
                  <Stat isVisible={isVisible} number={62} unit="k" label="Accidents prevented" />
                </Col>
              </Row>
            )}
          </VisibilitySensor>
        </VisibilityTrailAnimation>
      </Section>
      <Section xsPadding="comfortable">
        <VisibilityTrailAnimation>
          <TestimonalDescription>{customerTestimonials.supertitle}</TestimonalDescription>
          <TestimonalTitle>{customerTestimonials.title}</TestimonalTitle>
          <Testimonials>
            {customerTestimonials.testimonials.map(testimonial => (
              <Testimonial
                quote={testimonial.quote}
                name={testimonial.author.name}
                title={testimonial.author.title}
                company={testimonial.author.company}
                avatar={getMediaPath(testimonial.author.image)}
              />
            ))}
          </Testimonials>
        </VisibilityTrailAnimation>
      </Section>
    </div>
  )
}

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
  const context = useContext(Context)

  useEffect(() => {
    context.set({
      navDarkMode: false,
      navDarkModeExpanded: true,
      navFullWidth: false,
      navHidden: false,
      navNeverExpanded: false,
      navTransparent: false,
      navTransparentExpanded: true,
      navShadowExpanded: true
    })
  }, [])

  return (
    <IndexPageTemplate
      header={frontmatter.header}
      mainPitch={frontmatter.mainPitch}
      productCategories={frontmatter.productCategories}
      detectors={frontmatter.detectors}
      certifications={frontmatter.certifications}
      convenience={frontmatter.convenience}
      customerService={frontmatter.customerService}
      statistics={frontmatter.statistics}
      customerTestimonials={frontmatter.customerTestimonials}
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
        header {
          title
          subtitle
          primaryButton {
            label
            path
          }
          secondaryButton {
            label
            path
          }
          backgroundVideo {
            mp4 {
              relativePath
            }
            webm {
              relativePath
            }
          }
          backgroundImage {
            relativePath
          }
          logos {
            name
            image {
              relativePath
            }
            url
          }
        }
        mainPitch {
          supertitle
          title
          description
        }
        productCategories {
          productCategory
          description
        }
        detectors {
          supertitle
          title
          description
          link {
            label
            path
          }
          image {
            relativePath
          }
        }
        certifications {
          supertitle
          title
          description
          logos {
            image {
              relativePath
            }
          }
        }
        convenience {
          supertitle
          title
          description
          link {
            label
            path
          }
          image {
            relativePath
          }
        }
        customerService {
          supertitle
          title
          description
          link {
            label
            path
          }
          image {
            relativePath
          }
        }
        statistics {
          number
          unit
          label
        }
        customerTestimonials {
          supertitle
          title
          testimonials {
            quote
            author {
              name
              image {
                relativePath
              }
              title
              company
            }
          }
        }
      }
    }
  }
`
