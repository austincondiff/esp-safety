import React from 'react'
import styled from 'styled-components'

const ReadMoreWrap = styled.div`
  padding-top: ${props => props.height || '100%'};
  position: relative;
`
const ReadMoreInside = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
  overflow: hidden;
`
const ReadMoreLink = styled.a`
  color: #dd2c2c;
  display: inline-block;
  position: relative;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 24px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  padding-right: 16px;
  transition: 0.2s;
  border-top: ${props => (props.readMore ? 8 : 0)}px solid transparent;
  border-bottom: ${props => (props.readMore ? 0 : 8)}px solid transparent;
  &:after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-top: 1.5px solid #dd2c2c;
    border-right: 1.5px solid #dd2c2c;
    position: absolute;
    top: calc(50% - ${props => (props.readMore ? 3 : 6)}px);
    right: 0;
    transition: 0.2s;
    transform: rotate(${props => (props.readMore ? -45 : 135)}deg);
  }
  &:hover {
    border-top: ${props => (props.readMore ? 0 : 8)}px solid transparent;
    border-bottom: ${props => (props.readMore ? 8 : 0)}px solid transparent;
  }
`

const TriggerComponent = ({ renderTrigger, readMore, toggleReadMore }) =>
  renderTrigger ? (
    renderTrigger(readMore, toggleReadMore)
  ) : (
    <ReadMoreLink readMore={readMore} href="#" onClick={toggleReadMore}>
      {readMore ? 'Read less' : 'Read more'}
    </ReadMoreLink>
  )

export default class ReadMore extends React.Component {
  state = { readMore: false }

  render() {
    const { children, height } = this.props
    const { readMore, renderTrigger } = this.state

    return (
      <React.Fragment>
        {readMore ? (
          children
        ) : (
          <ReadMoreWrap height={height}>
            <ReadMoreInside>{children}</ReadMoreInside>
          </ReadMoreWrap>
        )}
        <TriggerComponent
          renderTrigger={renderTrigger}
          readMore={readMore}
          toggleReadMore={() => this.setState({ readMore: !readMore })}
        />
      </React.Fragment>
    )
  }
}
