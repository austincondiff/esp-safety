import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VSensor from 'react-visibility-sensor'

class VisibilitySensor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true
    }
  }

  render() {
    const { active } = this.state
    const { once, partialVisibility, offset, children, onChange, ...props } = this.props
    console.log(once)
    return (
      <VSensor
        active={active}
        partialVisibility={partialVisibility}
        offset={offset}
        onChange={isVisible => {
          once && isVisible && this.setState({ active: false }, onChange)
          onChange && onChange(isVisible)
        }}
        {...props}
      >
        {this.props.children instanceof Function
          ? ({ isVisible, visibilityRect }) => children({ isVisible, visibilityRect })
          : children}
      </VSensor>
    )
  }
}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  partialVisibility: PropTypes.bool,
  children: PropTypes.func.isRequired
}

VisibilitySensor.defaultProps = {
  once: true,
  partialVisibility: true,
  offset: { bottom: 100 }
}

export default VisibilitySensor
