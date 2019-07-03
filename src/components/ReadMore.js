import React from 'react'
import styled from 'styled-components'

const ReadMoreContainer = styled.div`
  height: ${props => props.height};
  mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
  mask-size: 100% ${props => (!props.overflow || props.readMore ? '200%' : '100%')};
  overflow: hidden;
  transition: 0.2s;
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
  margin-top: 16px;
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

const ReadMoreContent = styled.div``

const TriggerComponent = ({ renderTrigger, readMore, toggleReadMore }) =>
  renderTrigger ? (
    renderTrigger(readMore, toggleReadMore)
  ) : (
    <ReadMoreLink readMore={readMore} href="#" onClick={toggleReadMore}>
      {readMore ? 'Read less' : 'Read more'}
    </ReadMoreLink>
  )

export default class ReadMore extends React.Component {
  constructor(props) {
    super(props)
    this.containerRef = React.createRef()
    this.contentRef = React.createRef()
  }

  state = { readMore: false }

  componentDidMount() {
    this.setDimensions()
    window.addEventListener('resize', this.setDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDimensions)
  }

  setDimensions = () => {
    const containerWidth = this.containerRef.current.offsetWidth + 'px'
    const containerHeight = this.props.height || containerWidth
    const contentHeight = this.contentRef.current.offsetHeight + 'px'

    console.log({
      containerRef: this.containerRef,
      containerWidth,
      containerHeight,
      contentHeight,
      overflow: contentHeight > containerHeight
    })

    this.setState({
      overflow: contentHeight > containerHeight,
      containerHeight,
      contentHeight
    })
  }

  render() {
    const { children, height } = this.props
    const { readMore, renderTrigger, overflow, containerHeight, contentHeight } = this.state

    return (
      <React.Fragment>
        <ReadMoreContainer
          ref={this.containerRef}
          readMore={readMore}
          overflow={overflow}
          height={readMore ? contentHeight : height || containerHeight}
        >
          <ReadMoreContent ref={this.contentRef}>{children}</ReadMoreContent>
        </ReadMoreContainer>
        {overflow && (
          <TriggerComponent
            renderTrigger={renderTrigger}
            readMore={readMore}
            toggleReadMore={() => this.setState({ readMore: !readMore })}
          />
        )}
      </React.Fragment>
    )
  }
}
