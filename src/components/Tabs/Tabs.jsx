import React, { Component } from 'react'
import TabNavigation from './TabNavigation'
import TabContent from './TabContent'

class Tabs extends Component {
  constructor(props) {
    super(props)
    const tabs = this.getTabs()
    const value = this.props.value || (tabs.length && tabs[0].value)

    this.state = { tabs, value }
  }

  componentDidUpdate(prevProps) {
    const { children, value } = this.props

    if (children && prevProps.value !== value) {
      this.setState({ value })
    }
  }

  getTabs = () => {
    const { children } = this.props
    const tabs = React.Children.toArray(children)
      .filter(c => c)
      .map((tab, i) => {
        const { label, value, onChange } = tab.props

        return { label, value: value ? value : `tab${i}`, onChange }
      })

    return tabs
  }

  onTabChange = value => this.setState({ value }, () => this.props.onChange && this.props.onChange(value))

  render() {
    const { children, useLayout, sticky, centered, scroll, useRouter } = this.props
    const { value, tabs } = this.state

    return (
      <div>
        <TabNavigation
          tabs={tabs}
          value={value}
          onChange={this.onTabChange}
          sticky={sticky}
          useLayout={useLayout}
          centered={centered}
          scroll={scroll}
          useRouter={useRouter}
        />
        <TabContent
          tabs={React.Children.toArray(children).filter(c => c)}
          value={value}
          scroll={scroll}
          onChange={this.onTabChange}
        />
      </div>
    )
  }
}

export default Tabs
