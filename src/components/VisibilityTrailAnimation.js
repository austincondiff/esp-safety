import React from 'react'
import { Trail } from 'react-spring/renderprops'
import VisibilitySensor from '../components/VisibilitySensor'

const VisibilityTrailAnimation = ({ children }) => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <Trail
        to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0px)' : 'translateY(100px)' }}
        items={React.Children.toArray(children)}
      >
        {item => props => <div style={props}>{item}</div>}
      </Trail>
    )}
  </VisibilitySensor>
)

export default VisibilityTrailAnimation
