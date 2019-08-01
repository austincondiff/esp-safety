import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { scrollTo } from '../../lib/utils'
import { debounce } from 'debounce'

const Content = styled.div`
  position: relative;
  backface-visibility: hidden;
`

export default class TabContent extends Component {
  state = { scrolling: false, autoScrolling: false }
  tabContentRefs = []

  componentDidMount() {
    if (this.props.scroll) window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    if (this.props.scroll) window.removeEventListener('scroll', this.handleScroll)
  }

  stopScrolling = debounce(() => this.setState({ scrolling: false }), 100)

  handleScroll = () => {
    const { scrolling, autoScrolling } = this.state

    if (autoScrolling) return

    if (!scrolling) this.setState({ scrolling: true }, () => console.log('Set scrolling to true'))

    this.stopScrolling()

    const tabMostVisible = this.props.tabs
      .map((tab, i) => {
        const ref = this.tabContentRefs[`tabContent_${tab.props.value}`]
        const refRect = ref.getBoundingClientRect()
        const visibleHeight = refRect.top >= 0 ? Math.max(0, window.innerHeight - refRect.top) : Math.max(0, refRect.bottom)
        return {
          value: tab.props.value,
          height: visibleHeight
        }
      })
      .reduce((prev, current) => (prev.height > current.height ? prev : current))

    if (tabMostVisible.height !== 0 && tabMostVisible.value !== this.props.value) this.props.onChange(tabMostVisible.value)
  }

  componentDidUpdate(prevProps) {
    if (this.props.scroll && this.props.value !== prevProps.value && !this.state.scrolling) {
      this.scrollToTabContent()
    }
  }

  scrollToTabContent = () => {
    const scrollToTarget = this.tabContentRefs[`tabContent_${this.props.value}`]
    const scrollToValue = scrollToTarget.offsetTop
    const scrollToTargetHeight = scrollToTarget.clientHeight
    const currentScrollTop = window.scrollY

    this.setState({ autoScrolling: true }, () => {
      scrollTo(scrollToValue, 1000, () => {
        this.setState({ autoScrolling: false })
      })
    })
  }

  render() {
    const { tabs, value, scroll } = this.props
    if (scroll) {
      return (
        <React.Fragment>
          {tabs.map(tab => (
            <div
              ref={el => {
                this.tabContentRefs[`tabContent_${tab.props.value}`] = el
              }}
            >
              {tab.props.children}
            </div>
          ))}
        </React.Fragment>
      )
    } else {
      const tab =
        tabs.length > 1
          ? tabs.filter((tab, i) => (tab.props.value ? tab.props.value === value : 'tab' + i === value))[0]
          : tabs[0]

      return <Content>{tab && tab.props.children}</Content>
    }
  }
}

TabContent.propTypes = {
  tabs: PropTypes.array,
  value: PropTypes.string,
  preload: PropTypes.bool
}
