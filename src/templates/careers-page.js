import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Section from '../components/Section'
import Context from '../components/Context'
import Content, { HTMLContent } from '../components/Content'

export const CareersPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <Header
        title="Work for us"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=5102&q=80"
      />
      <Section>
        <h1>Team and culture</h1>
        <p>
          Our team is comprised of driven, quick-witted and hardworking individuals who are not afraid to take on the most
          challenging projects in our industry and want to create the most robust, reliable and high performing products for
          flame and gas detection.
        </p>
      </Section>
      <Section
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
        backgroundImageOpacity={0.33}
        backgroundColor="#000000"
        dark
        parallax
      >
        <h1>Our Values</h1>
        <p>IHART</p>
        <ul>
          <li>Ingenuity</li>
          <li>Hard work</li>
          <li>All in all the time</li>
          <li>Reliability</li>
          <li>Team Work</li>
        </ul>
      </Section>

      <Section>
        <h1>Our Perspective</h1>
        <p>Quotes coming soon.</p>
      </Section>

      <Section>
        <h1>Perks & Benefits</h1>
        <p>
          ESP Safety provides an excellent selection of health care insurance plans including employee and family medical,
          dental, vision, employee and family life, short-term disability, FSA, 401 (k), employee assistance programs. You will
          get 10 PTO days, floating holidays, paid holidays and a winter recess between Christmas and New Year’s. Each ESP team
          member is eligible to earn additional compensation through bonuses and incentive programs which recognizes and rewards
          outstanding performance.{' '}
        </p>
        <p>
          Additional benefits include tuition reimbursement for those who want to continue their education, paid fitness
          membership, plus a snack bar to keep you going. We work hard together and we like to have fun together too, we have
          company outings and celebrate annual events such as Thanksgiving Potluck and White Elephant Christmas Party. Our
          office in San Jose is conveniently located close to highways 101, 87 and 17 as well as to a light rail stop. We are
          also within the walking distance from Japantown and downtown San Jose.
        </p>
      </Section>

      <Section>
        <h1>Opportunities</h1>
        <p>
          ESP Safety is an Equal Opportunity Employer. Applicants are considered for all positions without regard to race,
          color, religion, sex, national origin, age, disability, sexual orientation, and ancestry, marital or veteran status.
        </p>
        <p>
          We hire team members who want to make an impact which you will discover the moment you start your job. We offer you
          room to grow and potential to help us take ESP to the next level. Join us! We need your drive and expertise.
        </p>
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
      navTransparentExpanded: true
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
