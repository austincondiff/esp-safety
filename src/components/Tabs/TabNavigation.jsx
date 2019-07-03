import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTabs = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 6%;
`
const StyledTab = styled.div`
  text-align: center;
  margin: 0 16px 0 16px;
  vertical-align: middle;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 20px 0px;
  outline: none;
  color: ${props => (props.active ? '#dd2c2c' : '#000000')};
  transition: 200ms;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`
const StyledLabel = styled.div`
  min-width: 50px;
  white-space: nowrap;
`
const ActiveTabIndicator = styled.div`
  height: 3px;
  width: ${props => (props.width ? props.width : 0)}px;
  position: absolute;
  left: ${props => (props.position ? props.position : 0)}px;
  bottom: 0;
  background-color: #dd2c2c;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  transition: 200ms;
  backface-visibility: hidden;
`

class TabContainer extends Component {
  state = {
    activeTabWidth: null,
    activeTabPosition: null
  }

  tabRefs = {}

  componentDidMount() {
    this.moveActiveTabIndicator(this.props.value)
  }

  handleTabChange = value => {
    this.moveActiveTabIndicator(value)
    this.props.onChange(value)
  }

  moveActiveTabIndicator = value => {
    const activeTab = this.tabRefs[`tab_${value}`]

    this.setState({ activeTabWidth: activeTab.offsetWidth, activeTabPosition: activeTab.offsetLeft })
  }

  handleKeyDown = (value, event) => (event.keyCode === 13 || event.keyCode === 32) && this.handleTabChange(value)

  render() {
    const { activeTabWidth, activeTabPosition } = this.state
    const { tabs, value } = this.props

    return tabs && tabs.length > 1 ? (
      <StyledTabs>
        {tabs.map((tab, i) => (
          <StyledTab
            active={tab.value === value}
            key={`tab-${tab.value}-${i}`}
            onClick={() => this.handleTabChange(tab.value)}
            onKeyDown={event => this.handleKeyDown(tab.value, event)}
            ref={el => {
              this.tabRefs[`tab_${tab.value}`] = el
            }}
            tabIndex="0"
          >
            <StyledLabel>{tab.label}</StyledLabel>
          </StyledTab>
        ))}
        <ActiveTabIndicator width={activeTabWidth} position={activeTabPosition} />
      </StyledTabs>
    ) : null
  }
}

TabContainer.propTypes = {
  tabs: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default TabContainer
