import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Row, Col } from '../components/Layout'
import { IconTabs, IconTab } from '../components/IconTabs'
import { Testimonial } from '../components/Testimonials'
import Header from '../components/Header'
import Section from '../components/Section'
import Context from '../components/Context'
import Content, { HTMLContent } from '../components/Content'

import LightbulbIcon from '../images/lightbulb.svg'
import GearsIcon from '../images/gears.svg'
import AlarmClockIcon from '../images/alarm-clock.svg'
import AnchorIcon from '../images/anchor.svg'
import TeamIcon from '../images/team.svg'

export const CareersPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <Header
        title="Work for us"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=5102&q=80"
      />
      <Section xsPadding="comfortable">
        <Row center="xs">
          <Col md={6}>
            <h2>We build safety products to protect the wold's best employees</h2>
            <p>
              We believe that safety is most critical in industrial work environments. That is why we are determined to helping
              some of the most leading professionals to do their jobs without fear that their lives might be danger.
            </p>
            <p>
              Our product line can help these people do exactly that. We offer tools that will help prevent emergency situations
              in some of the harshest of environments. At ESP Safety, we strive to develop devices that will deliver emergency
              prevention and safety where our products are installed.
            </p>
            <p>
              We protect over 5 million people all around the world with our products. Together we are on a mission to bring
              safety to lives that matter. Join our talented team and be a part of our cause.
            </p>
          </Col>
        </Row>
      </Section>
      <Section xsPaddingBottom="comfortable">
        <Row center="xs">
          <Col md={6}>
            <Testimonial
              quote="Some impactful quote from an employee about how he or she enjoys being a part of such a great cause. It should be around two to three sentences long. This will give potential employees a reason to get excited about the potential of working for a company with this cause."
              name="Jane Doe"
              title="Industrial Engineer"
              avatar="https://randomuser.me/api/portraits/women/65.jpg"
              logo=""
              company="Hardware Production Team"
              centered
            />
          </Col>
        </Row>
      </Section>
      <Section
        xsPadding="comfortable"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
        backgroundImageOpacity={0.25}
        backgroundColor="#000000"
        dark
        parallax
      >
        <Row center="xs">
          <Col>
            <p>IHART</p>
            <h2>Our Core Values</h2>
          </Col>
        </Row>
        <Row center="xs">
          <Col>
            <IconTabs activateOnHover>
              <IconTab iconComponent={LightbulbIcon}>
                <h3>Ingenuity</h3>
                <p>We believe that some of the brightest solutions come from persistent thought and creativity.</p>
              </IconTab>
              <IconTab iconComponent={GearsIcon}>
                <h3>Hard work</h3>
                <p>We believe that we need to work hard and put our best effort in everything we do.</p>
              </IconTab>
              <IconTab iconComponent={AlarmClockIcon}>
                <h3>All-in all the time</h3>
                <p>Dedication means that we give it everything we've got when we are on the job.</p>
              </IconTab>
              <IconTab iconComponent={AnchorIcon}>
                <h3>Reliability</h3>
                <p>We want to know that we can count on you to get your work done.</p>
              </IconTab>
              <IconTab iconComponent={TeamIcon}>
                <h3>Team Work</h3>
                <p>
                  We succeed as a team and fail as a team. We expect our teams to work together effectively and efficiantly.
                </p>
              </IconTab>
            </IconTabs>
          </Col>
        </Row>
      </Section>

      <Section xsPadding="comfortable">
        <Row center="xs">
          <Col md={6}>
            <h2>Our team and culture</h2>
            <p>
              Our team is comprised of driven, quick-witted and hardworking individuals who are not afraid to take on the most
              challenging projects in our industry and want to create the most robust, reliable and high performing products for
              flame and gas detection.
            </p>
          </Col>
        </Row>
      </Section>

      <Section xsPaddingBottom="comfortable">
        <Row center="xs">
          <Col md={6}>
            <h2>Our Perspective</h2>
            <p>Quotes coming soon.</p>
          </Col>
        </Row>
      </Section>

      <Section xsPaddingBottom="comfortable">
        <Row center="xs">
          <Col md={6}>
            <h2>Perks & Benefits</h2>
            <p>
              ESP Safety provides an excellent selection of health care insurance plans including employee and family medical,
              dental, vision, employee and family life, short-term disability, FSA, 401 (k), employee assistance programs. You
              will get 10 PTO days, floating holidays, paid holidays and a winter recess between Christmas and New Year’s. Each
              ESP team member is eligible to earn additional compensation through bonuses and incentive programs which
              recognizes and rewards outstanding performance.{' '}
            </p>
            <p>
              Additional benefits include tuition reimbursement for those who want to continue their education, paid fitness
              membership, plus a snack bar to keep you going. We work hard together and we like to have fun together too, we
              have company outings and celebrate annual events such as Thanksgiving Potluck and White Elephant Christmas Party.
              Our office in San Jose is conveniently located close to highways 101, 87 and 17 as well as to a light rail stop.
              We are also within the walking distance from Japantown and downtown San Jose.
            </p>
          </Col>
        </Row>
      </Section>

      <Section xsPaddingBottom="comfortable">
        <Row center="xs">
          <Col md={6}>
            <h2>Opportunities</h2>
            <p>
              ESP Safety is an Equal Opportunity Employer. Applicants are considered for all positions without regard to race,
              color, religion, sex, national origin, age, disability, sexual orientation, and ancestry, marital or veteran
              status.
            </p>
            <p>
              We hire team members who want to make an impact which you will discover the moment you start your job. We offer
              you room to grow and potential to help us take ESP to the next level. Join us! We need your drive and expertise.
            </p>
          </Col>
        </Row>
      </Section>
    </React.Fragment>
  )
}

CareersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const CareersPage = ({ data }) => {
  const { markdownRemark: post } = data
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

  return <CareersPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
}

CareersPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default CareersPage

export const aboutPageQuery = graphql`
  query CareersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
