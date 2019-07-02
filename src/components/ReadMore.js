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

const TriggerComponent = ({ renderTrigger, readMore, toggleReadMore }) =>
  renderTrigger ? (
    renderTrigger(readMore, toggleReadMore)
  ) : (
    <a href="#" onClick={toggleReadMore}>
      {readMore ? 'Read less' : 'Read more'}
    </a>
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
