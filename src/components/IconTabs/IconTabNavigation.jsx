import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../Layout'

const TabsWrapper = styled.div`
  padding-bottom: 5em;
  overflow-x: auto;
  overflow-y: hidden;

  margin: 0 -24px;

  &::-webkit-scrollbar {
    display: none;
  }
`
const StyledTabs = styled.div`
  display: block;
  position: relative;
  width: fit-content;
  min-width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  white-space: nowrap;

  padding: 0 24px;

  ${mediaQueries.sm} {
    min-width: calc(100% - 48px);
    margin: 0 24px;
    padding: 0;
  }
`
const StyledTab = styled.div`
  display: inline-block;
  text-align: center;
  margin: 0 2rem 0 2rem;
  vertical-align: middle;
  cursor: pointer;
  font-size: 0;
  line-height: 0;
  padding: 1.5rem;
  outline: none;
  position: relative;
  border: 2px solid ${props => (props.active ? ` ${props.theme.color.primary}` : '')};
  color: ${props => (props.active ? props.theme.color.primary : 'inherit')};
  border-radius: 10rem;
  transition: 200ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  & * {
    transition: 200ms;
  }
  & svg {
    width: 4rem;
    height: 4rem;
  }
  ${props =>
    props.active
      ? `
    & * {
      color: ${props.theme.color.primary};
    }
  `
      : ''}
`
const ActiveTabIndicator = styled.div`
  height: 0;
  width: 0;
  position: absolute;
  left: calc(50% - 8px);
  bottom: -32px;
  border: 8px solid transparent;
  border-top: 8px solid ${props => (props.active ? props.theme.color.primary : 'transparent')};
  transition: 200ms;
  backface-visibility: hidden;
  pointer-events: none;
`

class IconTabNavigation extends Component {
  state = {
    activeTabWidth: null,
    activeTabPosition: null
  }

  tabRefs = []

  handleTabChange = value => {
    this.props.onChange(value)
  }

  handleKeyDown = (value, event) => (event.keyCode === 13 || event.keyCode === 32) && this.handleTabChange(value)

  render() {
    const { tabs, value, activateOnHover } = this.props

    return tabs && tabs.length > 1 ? (
      <TabsWrapper>
        <StyledTabs>
          {tabs.map((tab, i) => {
            const IconComponent = tab.iconComponent

            return (
              <StyledTab
                active={tab.value === value}
                key={`tab-${tab.value}-${i}`}
                onClick={() => this.handleTabChange(tab.value)}
                onMouseEnter={() => {
                  if (activateOnHover) this.handleTabChange(tab.value)
                }}
                onKeyDown={event => this.handleKeyDown(tab.value, event)}
                ref={el => {
                  this.tabRefs[`tab_${tab.value}`] = el
                }}
                tabIndex="0"
              >
                <IconComponent />
                <ActiveTabIndicator active={tab.value === value} />
              </StyledTab>
            )
          })}
        </StyledTabs>
      </TabsWrapper>
    ) : null
  }
}

IconTabNavigation.propTypes = {
  tabs: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default IconTabNavigation
