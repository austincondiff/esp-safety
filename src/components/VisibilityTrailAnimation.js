import React from 'react'
import { Trail } from 'react-spring/renderprops'
import VisibilitySensor from '../components/VisibilitySensor'
import uuid from 'uuid/v4'

const VisibilityTrailAnimation = ({ children }) => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <Trail
        to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0px)' : 'translateY(100px)' }}
        items={React.Children.toArray(children)}
        keys={(item, i) => i}
      >
        {(item, i) => props => (
          <div key={i} style={props}>
            {item}
          </div>
        )}
      </Trail>
    )}
  </VisibilitySensor>
)

export default VisibilityTrailAnimation
