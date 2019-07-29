import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Content = styled.div`
  position: relative;
  backface-visibility: hidden;
`

export default class IconTabContent extends Component {
  render() {
    const { tabs, value } = this.props
    const tab =
      tabs.length > 1
        ? tabs.filter((tab, i) => (tab.props.value ? tab.props.value === value : 'tab' + i === value))[0]
        : tabs[0]

    return <Content>{tab && tab.props.children}</Content>
  }
}

IconTabContent.propTypes = {
  tabs: PropTypes.array,
  value: PropTypes.string,
  preload: PropTypes.bool
}
