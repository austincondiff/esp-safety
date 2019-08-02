import React, { createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, mediaQueries } from '../Layout'
import { paramsToObject } from '../../lib/utils'

const TabsWrapper = styled.div`
  padding-bottom: 2.5em;
  overflow-x: auto;
  overflow-y: hidden;

  height: 4rem;
  margin: 0 -24px;

  ${props =>
    props.sticky
      ? `
      background-color: #FFFFFF;
      width: 100%;
      padding: 0;
      position: relative;
      box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
      margin: 0;
      `
      : ``}

  ${props =>
    props.sticky && props.stuck
      ? `
    position: fixed;
    top: 0;
    z-index: 99;`
      : ``}

  ${props => (props.centered ? `text-align: center;` : ``)}

  &::-webkit-scrollbar {
    display: none;
  }
`
const StyledTabs = styled.div`
  display: block;
  position: relative;
  width: fit-content;
  min-width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  white-space: nowrap;
  ${props => (props.sticky ? `padding: 0;` : `border-bottom: 1px solid rgba(0, 0, 0, 0.15);`)}

  ${mediaQueries.sm} {
    min-width: ${props => (props.sticky ? `100%` : `calc(100% - 3rem)`)};
    margin: 0 1.5rem;
    padding: 0;
    ${props => (props.sticky ? `margin: 0;` : ``)}
  }
`
const StyledTab = styled.div`
  display: inline-block;
  text-align: center;
  height: 4rem;
  margin: 0 1.25rem 0 1.25rem;
  vertical-align: middle;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 1.25rem 0px;
  outline: none;
  color: ${props => (props.active ? props.theme.color.primary : '#000000')};
  transition: 200ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
  background-color: ${props => props.theme.color.primary};
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);
  transition: 200ms;
  backface-visibility: hidden;
`

class TabContainer extends React.Component {
  state = {
    activeTabWidth: null,
    activeTabPosition: null,
    stuck: false
  }

  tabRefs = []

  tabNavWrapRef = React.createRef()
  tabNavRef = React.createRef()

  scrollTop = typeof window !== `undefined` ? window.scrollY : 0
  scrollDirection = 'down'
  scrollDirectionChangePoint = 0
  setScrollingTimeout = null

  componentDidMount() {
    const { tabs, useRouter, location, value } = this.props

    if (useRouter) {
      const { tab } = paramsToObject(window.location.search)
      console.log(paramsToObject(window.location.search))
      if (tab) this.handleTabChange(tab)
    }

    window.addEventListener('resize', this.moveActiveTabIndicator)
    if (this.props.sticky) window.addEventListener('scroll', this.handleScroll)
    this.moveActiveTabIndicator(this.props.value)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.moveActiveTabIndicator)
    if (this.props.sticky) {
      window.removeEventListener('scroll', this.handleScroll)
      window.scrollTo(0, 0)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) this.moveActiveTabIndicator(this.props.value)
  }

  handleScroll = () => {
    const { stuck } = this.state
    const scrollTop = window.scrollY
    const tabNavTop = this.tabNavWrapRef.current && scrollTop + this.tabNavWrapRef.current.getBoundingClientRect().top

    const scrollDirection = scrollTop >= this.scrollTop ? 'down' : 'up'
    const navCondensedHeight = 64

    this.scrollTop = scrollTop

    const stickyAnchor = this.scrollDirectionChangePoint || tabNavTop

    if (scrollTop >= tabNavTop - 64) {
      if (scrollDirection !== this.scrollDirection) {
        if (scrollDirection === 'up' && scrollTop > this.scrollDirectionChangePoint + navCondensedHeight) {
          this.scrollDirectionChangePoint = scrollTop
        } else if (
          scrollDirection === 'down' &&
          (scrollTop < this.scrollDirectionChangePoint - navCondensedHeight || scrollTop > this.scrollDirectionChangePoint)
        ) {
          this.scrollDirectionChangePoint = scrollTop + navCondensedHeight
        }

        this.scrollDirection = scrollDirection
      }

      const stickyTopScrollOffset = stickyAnchor - scrollTop
      let tabNavTranslateY =
        stickyTopScrollOffset > navCondensedHeight ? navCondensedHeight : stickyTopScrollOffset <= 0 ? 0 : stickyTopScrollOffset

      if (this.tabNavRef) this.tabNavRef.current.style.transform = `translateY(${tabNavTranslateY}px)`

      if (!stuck) this.setState({ stuck: true })
    } else {
      this.tabNavRef.current.style.transform = ``
      this.scrollDirectionChangePoint = null
      if (stuck) this.setState({ stuck: false })
    }
  }

  handleTabChange = value => {
    console.log(`Changing tabs to ${value}`)
    this.moveActiveTabIndicator(value)
    this.props.onChange(value)
    if (this.props.useRouter) {
      window.history.pushState(null, '', `${window.location.pathname}?tab=${value}`)
    }
  }

  moveActiveTabIndicator = value => {
    if (typeof value === 'object') value = null

    const activeTab = this.tabRefs[`tab_${value || this.props.value}`]

    this.setState({ activeTabWidth: activeTab.offsetWidth, activeTabPosition: activeTab.offsetLeft })
  }

  handleKeyDown = (value, event) => (event.keyCode === 13 || event.keyCode === 32) && this.handleTabChange(value)

  render() {
    const { activeTabWidth, activeTabPosition, stuck } = this.state
    const { tabs, value, useLayout, sticky, centered } = this.props
    const LayoutComponent = useLayout ? Layout : React.Fragment

    return tabs && tabs.length > 1 ? (
      <div id={sticky && 'sticky-tabs'} style={{ height: '4rem' }} ref={this.tabNavWrapRef}>
        <TabsWrapper ref={this.tabNavRef} sticky={sticky} stuck={stuck} centered={centered}>
          <StyledTabs sticky={sticky}>
            <LayoutComponent>
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
            </LayoutComponent>
          </StyledTabs>
        </TabsWrapper>
      </div>
    ) : null
  }
}

TabContainer.propTypes = {
  tabs: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default TabContainer
