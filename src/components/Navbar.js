import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { Layout } from './Layout'
import Logo from './Logo'
import Icon from './Icon'
import { mediaQueries, breakpoints } from './Layout'
import styled, { keyframes } from 'styled-components'

const slideInFromTop = keyframes`
  from { transform: translateY(-100%) }
  to { transform: translateY(0) }
`
const NavWrap = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: ${props => (props.transparent ? 'transparent' : props.dark ? '#111111' : 'white')};
  height: ${props => props.height || 104}px;
  box-shadow: 0 1px 0 ${props => (props.darkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0, 0, 0, 0.15)')};
  display: flex;
  align-items: center;
  transition: 0.25s background-color, 0.25s box-shadow;
  animation: ${slideInFromTop} 0.45s cubic-bezier(0.23, 1, 0.32, 1);
`
const NavInside = styled(Layout)`
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  display: flex;
  align-items: center;
`
const LogoWrap = styled.div`
  flex: 1;
  height: 100%;
  padding: ${props => props.padding || 16}px 0;
`
const LogoLink = styled(Link)`
  display: block;
  height: 100%;
`
const NavLinksWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 66vw;
  background-color: #000000;
  z-index: 100;
  transform: translateX(${props => (props.showMobileMenu ? '0%' : '100%')});
  transition: transform 0.25s;
  overflow-x: hidden;
  overflow-y: auto;
  ${mediaQueries.md} {
    width: auto;
    position: static;
    transform: translateX(0);
    z-index: auto;
    background-color: transparent;
    display: block;
    overflow: visible;
  }
`
const NavLinks = styled.div`
  padding: 64px 0;
  ${mediaQueries.md} {
    padding: 0;
  }
`
const NavLinkWrap = styled.div``
const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: inline-block;
  padding: 16px 24px;
  transition: 0.25s;
  position: relative;
  width: 100%;
  &:after {
    transition: transform 0.25s ease-out, border-color 0.25s ease-out;
    position: absolute;
    display: block;
    top: 12px;
    left: 0;
    bottom: 12px;
    transform: scaleY(0);
    border-left: 3px solid ${props => props.theme.color.primary};
    content: '';
  }
  &.active {
    color: #ffffff;
    &:after {
      backface-visibility: hidden;
      transform: scaleY(1);
    }
  }
  ${mediaQueries.md} {
    width: auto;
    padding: 24px 12px;
    color: ${props => (props.darkMode ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)')};
    &:after {
      transition: transform 0.25s ease-out, border-color 0.25s ease-out;
      position: absolute;
      display: block;
      top: calc(50% + 12px);
      left: 12px;
      right: 12px;
      bottom: auto;
      transform: scaleX(0);
      border-left: none;
      border-top: 2px solid ${props => props.theme.color.primary};
      content: '';
    }
    &:hover,
    &.active {
      color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
      &:after {
        backface-visibility: hidden;
        transform: scaleX(1);
      }
    }
  }
`
const NavSubItems = styled.div``
const NavSubItemWrap = styled.div``
const NavSubItem = styled.div``
const NavActions = styled.div`
  margin-left: 24px;
  margin-right: -8px;
  display: flex;
`
const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  opacity: 0.75;
  margin: 0 8px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  transition: 0.25s;
  &:hover,
  &.active {
    opacity: 1;
    color: ${props => (props.darkMode ? '#ffffff' : props.theme.color.primary)};
  }
`
const MenuIconButton = styled(IconButton)`
  position: relative;
  z-index: 101;
  color: ${props => (props.darkMode || props.showMobileMenu ? '#ffffff' : '#000000')};
  ${mediaQueries.md} {
    display: none;
  }
`

const NavBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNavItem: null,
      active: false,
      transparent: false,
      darkOnTransparent: false,
      darkMode: false,
      showMobileMenu: false
    }
    this.scheduledAnimationFrame = false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    this.setScrollStyles()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const isMobile = document.clientWidth < breakpoints.md
    const navFullHeight = isMobile ? 96 : 104

    // Prevent multiple rAF callbacks
    if (this.scheduledAnimationFrame || (!this.state.transparent && window.scrollY > navFullHeight)) {
      return
    }

    this.scheduledAnimationFrame = true

    requestAnimationFrame(() => {
      this.setScrollStyles()
      this.scheduledAnimationFrame = false
    })
  }

  setScrollStyles = () => {
    const { navHeight, logoPadding } = this.state
    const isMobile = document.clientWidth < breakpoints.md
    const navFullHeight = isMobile ? 96 : 104
    const navCondensedHeight = isMobile ? 64 : 72
    const logoPaddingStart = isMobile ? 32 : 28
    const logoPaddingEnd = isMobile ? 16 : 16
    const scrollTop = window.scrollY > 0 ? window.scrollY : 0
    const scrollFactor = scrollTop / (navFullHeight - navCondensedHeight)

    if (scrollTop < navFullHeight - navCondensedHeight) {
      this.setState({
        navHeight: navFullHeight - scrollTop,
        transparent: true,
        logoPadding: logoPaddingStart - scrollFactor * (logoPaddingStart - logoPaddingEnd),
        darkMode: true
      })
    } else if (navHeight !== navCondensedHeight || logoPadding !== logoPaddingEnd) {
      this.setState({
        navHeight: navCondensedHeight,
        transparent: false,
        logoPadding: logoPaddingEnd,
        darkMode: false
      })
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            })
      }
    )
  }

  toggleTransparency = () => this.props.setCtx({ navTransparent: !this.props.ctxData.navTransparent })

  render() {
    const { data, ctxData } = this.props
    const { navHeight, transparent, logoPadding, darkMode, showMobileMenu } = this.state
    const { links } = data

    console.log()

    return (
      <NavWrap transparent={transparent} darkMode={darkMode} height={navHeight} role="navigation" aria-label="main-navigation">
        <NavInside>
          <LogoWrap padding={logoPadding}>
            <LogoLink to="/" title="Logo">
              <Logo light={darkMode} height="100%" />
            </LogoLink>
          </LogoWrap>
          <NavLinksWrap showMobileMenu={showMobileMenu}>
            <NavLinks>
              {links.map(
                (navLink, i) =>
                  navLink.label && (
                    <NavLink
                      darkMode={darkMode}
                      to={navLink.path}
                      key={`navLink${i}`}
                      activeClassName="active"
                      partiallyActive={navLink.path !== '/'}
                      onClick={() => this.setState({ showMobileMenu: false })}
                    >
                      {navLink.label}
                    </NavLink>
                  )
              )}
            </NavLinks>
          </NavLinksWrap>
          <NavActions>
            <IconButton darkMode={darkMode} onClick={() => console.log('Search functionality coming soon.')}>
              <Icon name="search" />
            </IconButton>
            <MenuIconButton
              showMobileMenu={showMobileMenu}
              darkMode={darkMode}
              onClick={() =>
                this.setState({
                  showMobileMenu: !showMobileMenu,
                  menuMode: null,
                  mobileMenuActiveItems: []
                })
              }
            >
              <Icon name="menu" className={showMobileMenu && 'close'} />
            </MenuIconButton>
          </NavActions>
        </NavInside>
      </NavWrap>
    )
  }
}

// export default Navbar

export default ({ ...props }) => (
  <StaticQuery
    query={graphql`
      query Navigation {
        allSettingsYaml {
          edges {
            node {
              navigation {
                links {
                  label
                  path
                  links {
                    label
                    path
                    links {
                      label
                      path
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <NavBar data={data.allSettingsYaml.edges.filter(edge => edge.node.navigation)[0].node.navigation} {...props} />
    )}
  />
)
