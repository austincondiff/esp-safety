import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Section from './Section'
import Icon from './Icon'
import { Layout, Row, Col } from './Layout'

const FooterWrap = styled.footer``
const CtaFooter = styled.section`
  background-color: #dd2c2c;
`
const CtaText = styled.div``
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
const CtaButton = styled.div`
  background-color: #b22;
  font-size: 18px;
  padding: 25px 40px;
  color: #fff;
  font-weight: 600;
  position: relative;
  line-height: 20px;
  display: inline-block;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.75);
  transition: 0.45s cubic-bezier(0.25, 1, 0.33, 1);
  &:hover {
    background-color: white;
    color: #000;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
  }
  &:active {
    background-color: #eee;
    color: #000;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.33);
  }
`
const MainFooter = styled.section`
  background-color: #181818;
`
const SubFooter = styled.section`
  background-color: #111111;
  padding: 32px 0;
`
const FooterMenuItems = styled.div``
const FooterMenuItem = styled.div``

const SocialLink = styled.a`
  color: #ffffff;
  padding: 0 12px;
  &:last-child {
    padding-right: 0;
  }
`

const Footer = class extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <FooterWrap className="footer has-background-black has-text-white-ter">
        <Section backgroundColor="#dd2c2c">
          <Row>
            <Col fill>
              <CtaTitle>Get in touch with a rep today!</CtaTitle>
              <CtaMessage>Experience safety like never before.</CtaMessage>
            </Col>
            <Col>
              <CtaActions>
                <CtaButton>Find a rep</CtaButton>
              </CtaActions>
            </Col>
          </Row>
        </Section>
        <Section backgroundColor="#181818">
          <div>
            <FooterMenuItems className="menu-list">
              <FooterMenuItem>
                <Link className="navbar-item" to="/blog">
                  Latest Stories
                </Link>
              </FooterMenuItem>
              <FooterMenuItem>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </FooterMenuItem>
            </FooterMenuItems>
          </div>
        </Section>
        <SubFooter>
          <Layout>
            <Row>
              <Col fill>© 2019 ESP Safety. All rights reserved.</Col>
              <Col>

                <SocialLink title="twitter" target="_blank" href="https://twitter.com">
                  <Icon name="twitter" />
                </SocialLink>
                <SocialLink title="linkedin" target="_blank" href="https://linkedin.com">
                  <Icon name="linkedin" />
                </SocialLink>
                <SocialLink title="facebook" target="_blank" href="https://facebook.com">
                  <Icon name="facebook" />
                </SocialLink>
                <SocialLink title="instagram" target="_blank" href="https://instagram.com">
                  <Icon name="instagram" />
                </SocialLink>
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
                  path
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
