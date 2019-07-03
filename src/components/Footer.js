import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Section from './Section'
import { Row, Col } from './Layout'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

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
`
const FooterMenuItems = styled.div``
const FooterMenuItem = styled.div``

const Footer = class extends React.Component {
  render() {
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
        <MainFooter className="content has-text-centered">
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
        </MainFooter>
        <SubFooter className="content has-text-centered has-background-black has-text-white-ter">
          <div>© 2019 ESP Safety. All rights reserved.</div>
          <div>
            <a title="facebook" href="https://facebook.com">
              <img src={facebook} alt="Facebook" style={{ width: '1em', height: '1em' }} />
            </a>
            <a title="twitter" href="https://twitter.com">
              <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: '1em', height: '1em' }} />
            </a>
            <a title="instagram" href="https://instagram.com">
              <img src={instagram} alt="Instagram" style={{ width: '1em', height: '1em' }} />
            </a>
            <a title="vimeo" href="https://vimeo.com">
              <img src={vimeo} alt="Vimeo" style={{ width: '1em', height: '1em' }} />
            </a>
          </div>
        </SubFooter>
      </FooterWrap>
    )
  }
}

export default Footer
