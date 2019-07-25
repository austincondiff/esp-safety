import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import VisibilityTrailAnimation from './VisibilityTrailAnimation'
import Section from './Section'
import Logo from './Logo'
import Icon from './Icon'
import { Button } from './Button'
import { Layout, Row, Col, mediaQueries } from './Layout'

import FooterCap from '../images/footer-cap.svg'

import theme from '../lib/theme'

const FooterWrap = styled.footer``
const CtaSpacer = styled.div`
  height: 32px;
  display: block;
  ${mediaQueries.md} {
    display: none;
  }
`
const CtaTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
  ${mediaQueries.md} {
    text-align: left;
  }
`
const CtaMessage = styled.div`
  color: #ffffff;
  margin-bottom: 0;
  text-align: center;
  ${mediaQueries.md} {
    text-align: left;
  }
`
const CtaActions = styled.div`
  text-align: center;
  ${mediaQueries.md} {
    text-align: right;
  }
`
const MainFooter = styled.section`
  background-color: #181818;
  padding: 128px 0;
  position: relative;
`
const SubFooter = styled(Section)`
  background-color: #111111;
  padding-top: 32px;
  padding-bottom: 32px;
  overflow: hidden;
`
const FooterSections = styled(Row)`
  page-break-inside: avoid;
  break-inside: avoid;
  display: block;
  columns: 2;
  ${mediaQueries.sm} {
    columns: 1;
    display: flex;
  }
`
const FooterSection = styled(Col).attrs({ fill: true })`
  page-break-inside: avoid;
  break-inside: avoid;
  margin-bottom: 32px;
  ${mediaQueries.md} {
    flex: 1;
    margin-bottom: 0;
  }
`
const FooterSectionTitle = styled.h4`
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 16px;
  ${mediaQueries.md} {
    font-size: 14px;
    margin-bottom: 24px;
  }
`
const FooterSectionItem = styled(Link)`
  color: #cccccc;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  display: block;
  padding: 8px 0;
  transition: 0.25s;
  &:hover {
    color: #ffffff;
  }
  &:last-child {
    padding-bottom: 0;
  }
`
const FooterSectionAddress = styled.div`
  color: #cccccc;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  display: block;
  padding: 8px 0;
  &:last-child {
    padding-bottom: 0;
  }
`
const SocialLink = styled.a`
  color: #ffffff;
  padding: 0 12px;
  &:last-child {
    padding-right: 0;
  }
`
const SocialLinks = styled.div`
  white-space: nowrap;
`
const StyledFooterCap = styled(FooterCap)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 195.2px;
  filter: drop-shadow(0 2px 0 #181818);
  ${mediaQueries.md} {
    width: 244px;
  }
`
const StyledLogo = styled(Logo)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(52px);
  width: 136.8px;
  ${mediaQueries.md} {
    width: 171px;
    transform: translateX(-50%) translateY(64px);
  }
`

const Footer = class extends React.Component {
  render() {
    const { socialMedia } = this.props

    return (
      <FooterWrap>
        <Section xsPadding="cozy" backgroundColor={theme.color.primary}>
          <Row>
            <Col xs={12} md={0} fill="md">
              <VisibilityTrailAnimation>
                <CtaTitle>Get in touch with a rep today!</CtaTitle>
                <CtaMessage>Experience safety like never before.</CtaMessage>
              </VisibilityTrailAnimation>
            </Col>
            <Col xs={12} md={0}>
              <CtaActions>
                <Button overlay size="xl">
                  Find a rep
                </Button>
              </CtaActions>
            </Col>
          </Row>
          <CtaSpacer />
        </Section>
        <MainFooter backgroundColor="#181818">
          <StyledFooterCap />
          <StyledLogo stacked light />
          <Layout>
            <FooterSections>
              <FooterSection sm={4}>
                <VisibilityTrailAnimation>
                  <FooterSectionTitle>Locations</FooterSectionTitle>
                  <FooterSectionAddress>
                    4001 W. Sam Houston Pkwy N. <br />
                    Suite #150 <br />
                    Houston, TX. 77043 <br />
                    +1.713.999.1050
                  </FooterSectionAddress>
                  <FooterSectionAddress>
                    555 North First St.
                    <br />
                    San Jose, CA. 95112 <br />
                    +1.408.886.9746
                  </FooterSectionAddress>
                </VisibilityTrailAnimation>
              </FooterSection>
              <FooterSection sm={4}>
                <VisibilityTrailAnimation>
                  <FooterSectionTitle>Contact</FooterSectionTitle>
                  <FooterSectionItem to="/contact">Contact ESP Safety</FooterSectionItem>
                  <FooterSectionItem to="/contact">Business Inquiries</FooterSectionItem>
                </VisibilityTrailAnimation>
              </FooterSection>
              <FooterSection sm={4}>
                <VisibilityTrailAnimation>
                  <FooterSectionTitle>About</FooterSectionTitle>
                  <FooterSectionItem to="/about">About ESP Safety</FooterSectionItem>
                  <FooterSectionItem to="/careers">Work For Us</FooterSectionItem>
                </VisibilityTrailAnimation>
              </FooterSection>
              <FooterSection sm={4}>
                <VisibilityTrailAnimation>
                  <FooterSectionTitle>Products</FooterSectionTitle>
                  <FooterSectionItem to="/products">All Products</FooterSectionItem>
                  <FooterSectionItem to="/contact">Fire Detectors</FooterSectionItem>
                  <FooterSectionItem to="/contact">Combostible Gas Detectors</FooterSectionItem>
                  <FooterSectionItem to="/contact">Toxic Gas Detectors</FooterSectionItem>
                  <FooterSectionItem to="/contact">Oxygen Detectors</FooterSectionItem>
                </VisibilityTrailAnimation>
              </FooterSection>
              <FooterSection sm={4}>
                <VisibilityTrailAnimation>
                  <FooterSectionTitle>Certifications</FooterSectionTitle>
                  <FooterSectionItem to="/">Certification images coming soon</FooterSectionItem>
                </VisibilityTrailAnimation>
              </FooterSection>
            </FooterSections>
          </Layout>
        </MainFooter>
        <SubFooter>
          <VisibilityTrailAnimation offset={{ bottom: 0 }}>
            <Row start="md" center="xs" middle>
              <Col xs={12} md={0} fill="md">
                © 2019 ESP Safety. All rights reserved.
              </Col>
              <Col xs={12} md={0}>
                <SocialLinks>
                  {socialMedia.links.map(s => (
                    <SocialLink title={s.type} target="_blank" href={s.url}>
                      <Icon name={s.type} />
                    </SocialLink>
                  ))}
                </SocialLinks>
              </Col>
            </Row>
          </VisibilityTrailAnimation>
        </SubFooter>
      </FooterWrap>
    )
  }
}

export default ({ ...props }) => (
  <StaticQuery
    query={graphql`
      query Footer {
        allSettingsYaml {
          edges {
            node {
              socialMedia {
                links {
                  type
                  url
                }
              }
              footer {
                links {
                  label
                  path
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Footer
        footer={data.allSettingsYaml.edges.filter(edge => edge.node.footer)[0].node.footer}
        socialMedia={data.allSettingsYaml.edges.filter(edge => edge.node.socialMedia)[0].node.socialMedia}
        {...props}
      />
    )}
  />
)
