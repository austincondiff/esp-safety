import React from 'react'
import Tabs from './Tabs'

class PageTabs extends React.Component {
  state = { activeTab: null }

  handleChange = val => {
    console.log(val)
  }

  render() {
    const { children, scroll } = this.props
    const { activeTab } = this.state

    return (
      <Tabs scroll={scroll} useLayout sticky onChange={this.handleChange} value={activeTab}>
        {children}
      </Tabs>
    )
  }
}

export default PageTabs
