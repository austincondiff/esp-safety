import React from 'react'
import Link, { navigate } from 'gatsby-link'
import styled from 'styled-components'

import Header from '../../components/Header'
import Section from '../../components/Section'
import { Button } from '../../components/Button'
import { Row, Col } from '../../components/Layout'

const Input = styled.input`
  width: 100%;
  min-height: 3.5rem;
  background-color: #eeeeee;
  border: 0;
  border-radius: 1.75rem;
  padding: 1rem 0 1rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  outline: none;
  margin-bottom: 1.5rem;
`
const Textarea = styled.textarea`
  width: 100%;
  min-height: 3.5rem;
  background-color: #eeeeee;
  border: 0;
  border-radius: 1.75rem;
  padding: 1rem 0 1rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  outline: none;
  margin-bottom: 1.5rem;
  resize: none;
`

const Label = styled.label`
  font-weight: 500;
  color: #000000;
  display: block;
  margin-bottom: 0.5rem;
`

const PhoneNumber = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #000000;
`
const PhoneNumberSubText = styled.div`
  font-weight: 700;
  color: #666666;
  text-transform: uppercase;
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <React.Fragment>
        <Header
          title="Contact us"
          backgroundImage="https://images.unsplash.com/photo-1503217195339-397eb18024e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
        />
        <Section xsPadding="comfortable">
          <Row>
            <Col md={7}>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <Label className="label" htmlFor={'name'}>
                    Your name
                  </Label>
                  <div className="control">
                    <Input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <Label className="label" htmlFor={'email'}>
                    Email
                  </Label>
                  <div className="control">
                    <Input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <Label className="label" htmlFor={'message'}>
                    Message
                  </Label>
                  <div className="control">
                    <Textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <Button primary type="submit">
                    Send
                  </Button>
                </div>
              </form>
            </Col>
            <Col md={5}>
              <h3>Hello!</h3>
              <p>
                Don’t hesitate to ask us anything. Fill out our form and we will contact you as soon as we can. You can also
                email us directly hello@espsafety.com or give us a call.
              </p>
              <PhoneNumber>555 555 5555</PhoneNumber>
              <PhoneNumberSubText>Available 24/7</PhoneNumberSubText>
            </Col>
          </Row>
        </Section>
      </React.Fragment>
    )
  }
}
