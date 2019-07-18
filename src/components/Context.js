import React from 'react'

const defaultContextValue = {
  data: {
    navFullWidth: false,
    navNeverExpanded: false,
    navTransparentExpanded: true,
    navTransparent: false,
    navDarkMode: false,
    navDarkModeExpanded: true,
    navHidden: false,
    navHeight: 64,
    navHeightExpanded: 104,
    navMobileHeight: 96,
    navMobileHeightExpanded: 56,
    logoHeight: 32,
    logoHeightExpanded: 40,
    logoMobileHeight: 32,
    logoMobileHeightExpanded: 40
  },
  set: () => {}
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class ContextProvider extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData
    }
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData
      }
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProvider }
