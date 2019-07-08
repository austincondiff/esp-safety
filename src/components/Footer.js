import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Section from './Section'
import Logo from './Logo'
import Icon from './Icon'
import { Button } from './Button'
import { Layout, Row, Col } from './Layout'

import FooterCap from '../images/footer-cap.svg'

import theme from '../lib/theme'

const FooterWrap = styled.footer``
const CtaTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 16px;
`
const CtaMessage = styled.div`
  color: #ffffff;
  margin-bottom: 0;
`
const CtaActions = styled.div`
  text-align: right;
`
const MainFooter = styled.section`
  background-color: #181818;
  padding: 128px 0;
  position: relative;
`
const SubFooter = styled.section`
  background-color: #111111;
  padding: 32px 0;
  overflow: hidden;
`
const FooterSections = styled(Row)``
const FooterSection = styled(Col).attrs({ fill: true })``
const FooterSectionTitle = styled.h4`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 24px;
`
const FooterSectionItem = styled(Link)`
  color: #CCCCCC;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  display: block;
  padding: 8px 0;
  transition: .25s;
  &:hover {
    color: #FFFFFF;
  }
  &:last-child {
    padding-bottom: 0;
  }
`
const FooterSectionAddress = styled.div`
  color: #CCCCCC;
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
`
const LogoWrap = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(64px);
`

const Footer = class extends React.Component {
  render() {
    const { socialMedia } = this.props

    return (
      <FooterWrap>
        <Section backgroundColor={theme.color.primary}>
          <Row>
            <Col fill>
              <CtaTitle>Get in touch with a rep today!</CtaTitle>
              <CtaMessage>Experience safety like never before.</CtaMessage>
            </Col>
            <Col>
              <CtaActions>
                <Button overlay size="xl">Find a rep</Button>
              </CtaActions>
            </Col>
          </Row>
        </Section>
        <MainFooter backgroundColor="#181818">
          <StyledFooterCap />
          <LogoWrap>
            <Logo stacked light width="171px" />
          </LogoWrap>
          <Layout>
            <FooterSections>
              <FooterSection>
                <FooterSectionTitle>Locations</FooterSectionTitle>
                <FooterSectionAddress>
                  4001 W. Sam Houston Pkwy N. <br />
                  Suite #150 <br />
                  Houston, TX. 77043 <br />
                  +1.713.999.1050
                </FooterSectionAddress>
                <FooterSectionAddress>
                  555 North First St.<br />
                  San Jose, CA. 95112 <br />
                  +1.408.886.9746
                </FooterSectionAddress>
              </FooterSection>
              <FooterSection>
                <FooterSectionTitle>Contact</FooterSectionTitle>
                <FooterSectionItem to="/contact">
                  Contact ESP Safety
                </FooterSectionItem>
                <FooterSectionItem to="/contact">
                  Business Inquiries
                </FooterSectionItem>
              </FooterSection>
              <FooterSection>
                <FooterSectionTitle>About</FooterSectionTitle>
                <FooterSectionItem to="/about">
                  About ESP Safety
                </FooterSectionItem>
                <FooterSectionItem to="/careers">
                  Work For Us
                </FooterSectionItem>
              </FooterSection>
              <FooterSection>
                <FooterSectionTitle>Products</FooterSectionTitle>
                <FooterSectionItem to="/products">
                  All Products
                </FooterSectionItem>
                <FooterSectionItem to="/contact">
                  Fire Detectors
                </FooterSectionItem>
                <FooterSectionItem to="/contact">
                  Combostible Gas Detectors
                </FooterSectionItem>
                <FooterSectionItem to="/contact">
                  Toxic Gas Detectors
                </FooterSectionItem>
                <FooterSectionItem to="/contact">
                  Oxygen Detectors
                </FooterSectionItem>
              </FooterSection>
              <FooterSection>
                <FooterSectionTitle>Certifications</FooterSectionTitle>
                <FooterSectionItem to="/">
                  Certification images coming soon
                </FooterSectionItem>
              </FooterSection>
            </FooterSections>
          </Layout>
        </MainFooter>
        <SubFooter>
          <Layout>
            <Row>
              <Col fill>© 2019 ESP Safety. All rights reserved.</Col>
              <Col>
                <SocialLinks>
                  {socialMedia.links.map(s => (
                    <SocialLink title={s.type} target="_blank" href={s.url}>
                      <Icon name={s.type} />
                    </SocialLink>
                  ))}
                </SocialLinks>
              </Col>
            </Row>
          </Layout>
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
    render={data => <Footer footer={data.allSettingsYaml.edges.filter(edge => edge.node.footer)[0].node.footer} socialMedia={data.allSettingsYaml.edges.filter(edge => edge.node.socialMedia)[0].node.socialMedia} {...props} />}
  />
)
