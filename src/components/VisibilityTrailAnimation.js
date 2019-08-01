import React from 'react'
import { Trail } from 'react-spring/renderprops'
import VisibilitySensor from '../components/VisibilitySensor'
import uuid from 'uuid/v4'

const VisibilityTrailAnimation = ({ children, ...props }) => (
  <VisibilitySensor {...props}>
    {({ isVisible }) => (
      <Trail
        to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0px)' : 'translateY(100px)' }}
        items={React.Children.toArray(children)}
        keys={(item, i) => i}
      >
        {(item, i) => props => (
          <div className="visibility-animation-container" key={i} style={props.opacity !== 1 ? props : null}>
            {item}
          </div>
        )}
      </Trail>
    )}
  </VisibilitySensor>
)

export default VisibilityTrailAnimation
