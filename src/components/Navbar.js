import React, { useContext } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { Layout } from './Layout'
import Logo from './Logo'
import Icon from './Icon'
import { mediaQueries, breakpoints } from './Layout'
import styled, { keyframes } from 'styled-components'
import Context from './Context'

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
  background: ${props => (props.transparent ? 'transparent' : props.darkMode ? '#111111' : 'white')};
  height: ${props => props.height || 104}px;
  box-shadow: 0 1px 0 ${props => (props.darkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0, 0, 0, 0.15)')};
  display: flex;
  align-items: center;
  transition: 0.25s background-color, 0.25s box-shadow;
  animation: ${slideInFromTop} 0.45s cubic-bezier(0.23, 1, 0.32, 1);
`
const NavInside = styled(Layout)`
  height: 100%;
  display: flex;
  align-items: center;
`
const LogoWrap = styled.div`
  flex: 1;
  height: 100%;
  align-items: center;
  display: flex;
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
    height: 100%;
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
    height: 100%;
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
    height: 100%;
    width: auto;
    padding: 24px 12px;
    display: inline-flex;
    align-items: center;
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
    const { neverExpanded } = props
    this.state = {
      expanded: !neverExpanded,
      activeNavItem: null,
      active: false,
      transparent: true,
      darkOnTransparent: false,
      darkMode: false,
      showMobileMenu: false
    }
    this.scheduledAnimationFrame = false
    this.navRef = React.createRef()
    this.logoRef = React.createRef()
  }

  static contextType = Context

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    this.setScrollStyles()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { navExpandedHeight } = this.props

    // Prevent multiple rAF callbacks
    if (!this.state.expanded && window.scrollY > navExpandedHeight) {
      return
    }

    this.scheduledAnimationFrame = true

    requestAnimationFrame(() => {
      this.setScrollStyles()
      this.scheduledAnimationFrame = false
    })
  }

  setScrollStyles = () => {
    const {
      height,
      heightExpanded,
      mobileHeight,
      mobileHeightExpanded,
      logoHeight,
      logoHeightExpanded,
      logoMobileHeight,
      logoMobileHeightExpanded,
      isMobile
    } = this.props
    const { expanded } = this.state
    const navExpandedHeight = isMobile ? mobileHeightExpanded : heightExpanded
    const navCondensedHeight = isMobile ? mobileHeight : height
    const logoExpandedHeight = isMobile ? logoMobileHeightExpanded : logoHeightExpanded
    const logoCondensedHeight = isMobile ? logoMobileHeight : logoHeight
    const scrollTop = window.scrollY > 0 ? window.scrollY : 0
    const scrollFactor = scrollTop / (navExpandedHeight - navCondensedHeight)
    const currentHeight = navExpandedHeight - scrollTop
    const currentLogoHeight = logoExpandedHeight - scrollFactor * (logoExpandedHeight - logoCondensedHeight)

    if (scrollTop < navExpandedHeight - navCondensedHeight) {
      this.navRef.current.style.height = `${currentHeight}px`
      this.logoRef.current.style.height = `${currentLogoHeight}px`
      if (!expanded) this.setState({ expanded: true })
    } else if (expanded && currentHeight !== navCondensedHeight) {
      this.navRef.current.style.height = `${navCondensedHeight}px`
      this.logoRef.current.style.height = `${logoCondensedHeight}px`
      this.setState({ expanded: false })
    }
  }

  render() {
    const {
      data,
      darkMode: darkModeCondensed,
      darkModeExpanded,
      transparent: transparentCondensed,
      transparentExpanded
    } = this.props
    const { expanded, showMobileMenu } = this.state
    const { links } = data

    const darkMode = (expanded && darkModeExpanded) || (!expanded && darkModeCondensed)
    const transparent = (expanded && transparentExpanded) || (!expanded && transparentCondensed)

    return (
      <NavWrap ref={this.navRef} transparent={transparent} darkMode={darkMode} role="navigation" aria-label="main-navigation">
        <NavInside>
          <LogoWrap>
            <LogoLink ref={this.logoRef} to="/" title="Logo">
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

export default ({ ...props }) => {
  const context = useContext(Context)

  return (
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
        <NavBar
          data={data.allSettingsYaml.edges.filter(edge => edge.node.navigation)[0].node.navigation}
          fullWidth={context.data.navFullWidth}
          neverExpanded={context.data.navNeverExpanded}
          transparentExpanded={context.data.navTransparentExpanded}
          transparent={context.data.navTransparent}
          darkMode={context.data.navDarkMode}
          darkModeExpanded={context.data.navDarkModeExpanded}
          hidden={context.data.navHidden}
          height={context.data.navHeight}
          heightExpanded={context.data.navHeightExpanded}
          mobileHeight={context.data.navMobileHeight}
          mobileHeightExpanded={context.data.navMobileHeightExpanded}
          logoHeight={context.data.logoHeight}
          logoHeightExpanded={context.data.logoHeightExpanded}
          logoMobileHeight={context.data.logoMobileHeight}
          logoMobileHeightExpanded={context.data.logoMobileHeightExpanded}
          isMobile={context.data.currentBreakpoint === 'xs' || context.data.currentBreakpoint === 'sm'}
          {...props}
        />
      )}
    />
  )
}
