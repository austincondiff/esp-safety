import { Component } from 'react'
import PropTypes from 'prop-types'

class Tab extends Component {}

Tab.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired
}

export default Tab
