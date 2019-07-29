import React, { Component } from 'react'
import IconTabNavigation from './IconTabNavigation'
import IconTabContent from './IconTabContent'

class IconTabs extends Component {
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
        const { iconComponent, value, onChange } = tab.props

        return { iconComponent, value: value ? value : `tab${i}`, onChange }
      })

    return tabs
  }

  onTabChange = value => this.setState({ value }, () => this.props.onChange && this.props.onChange(value))

  render() {
    const { children, activateOnHover } = this.props
    const { value, tabs } = this.state

    return (
      <div>
        <IconTabNavigation tabs={tabs} value={value} onChange={this.onTabChange} activateOnHover={activateOnHover} />
        <IconTabContent tabs={React.Children.toArray(children).filter(c => c)} value={value} />
      </div>
    )
  }
}

export default IconTabs
