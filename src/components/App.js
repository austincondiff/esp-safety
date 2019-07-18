import React from 'react'
import Context from './Context'
import { breakpoints } from './Layout'

class App extends React.Component {
  componentDidMount() {
    console.log(this.context)
    window.addEventListener('resize', this.handleResize.bind(this))
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  handleResize() {
    const { sm, md, lg, xl } = breakpoints
    const windowWidth = window.innerWidth
    let currentBreakpoint = 'xs'

    if (windowWidth >= sm && windowWidth < md) {
      currentBreakpoint = 'sm'
    } else if (windowWidth >= md && windowWidth < lg) {
      currentBreakpoint = 'md'
    } else if (windowWidth >= lg && windowWidth < xl) {
      currentBreakpoint = 'lg'
    } else if (windowWidth > xl) {
      currentBreakpoint = 'xl'
    }

    console.log({ currentBreakpoint })

    this.context.set({ currentBreakpoint })
  }

  render() {
    return this.props.children
  }
}

App.contextType = Context

export default App
