import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import github from '../img/github-icon.svg'
import Logo from './Logo'
import Icon from './Icon'
import lightLogo from '../img/logo-light.svg'
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
  background: ${props => props.transparent ? 'transparent' : props.dark ? '#111111' : 'white'};
  height: ${props => props.height || 104}px;
  box-shadow: 0 1px 0 ${props => props.darkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0, 0, 0, 0.15)'};
  display: flex;
  align-items: center;
  transition: .25s background-color, .25s box-shadow;
  animation: ${slideInFromTop} .45s cubic-bezier(.23,1,.32,1);
`
const NavInside = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`
const LogoWrap = styled.div`
  flex: 1;
  height: 100%;
  padding: ${props => props.padding || 16}px 0;
`
const LogoLink = styled(Link)`

`
const NavLinksWrap = styled.div`

`
const NavLinks = styled.div`

`
const NavLinkWrap = styled.div`

`
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.darkMode ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)'};
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  display: inline-block;
  padding: 24px 12px;
  transition: .25s;
  position: relative;
  &:after {
    transition: transform .25s ease-out,border-color .25s ease-out;
    position: absolute;
    display: block;
    top: calc(50% + 12px);
    left: 12px;
    right: 12px;
    transform: scaleX(0);
    border-top: 2px solid #DD2C2C;
    content: '';
  }
  &:hover, &.active {
    color: ${props => props.darkMode ? '#ffffff' : '#000000'};
    &:after {
      backface-visibility: hidden;
      transform: scaleX(1);
    }
  }

`
const NavSubItems = styled.div`

`
const NavSubItemWrap = styled.div`

`
const NavSubItem = styled.div`

`
const NavActions = styled.div`
  margin-left: 32px;
`
const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: ${props => props.darkMode ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)'};
  &:hover, &.active {
    color: ${props => props.darkMode ? '#ffffff' : '#DD2C2C'};
  }
`
const MenuButton = styled.div`

`

const NavBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNavItem: null,
      active: false,
      transparent: false,
      darkOnTransparent: false,
      darkMode: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    this.setScrollStyles()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => window.requestAnimationFrame(this.setScrollStyles)

  setScrollStyles = () => {
    const { navHeight, logoPadding } = this.state
    const scrollTop = document.documentElement.scrollTop
    const navFullHeight = 104
    const navCondensedHeight = 72
    const logoPaddingStart = 28;
    const logoPaddingEnd = 16;
    const scrollFactor = scrollTop / (navFullHeight - navCondensedHeight)

    console.log({scrollTop})

    if (scrollTop < navFullHeight - navCondensedHeight) {
      this.setState({
        navHeight: navFullHeight - scrollTop,
        transparent: true,
        logoPadding: logoPaddingStart - (scrollFactor * (logoPaddingStart - logoPaddingEnd)),
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
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  toggleTransparency = () => this.props.setCtx({navTransparent: !this.props.ctxData.navTransparent})

  render() {
    const { data, ctxData } = this.props
    const { navHeight, transparent, logoPadding, darkMode } = this.state
    const navigation = data.allSettingsYaml.edges[0].node.navigation
    const { links } = navigation

    return (
      <NavWrap
        transparent={transparent}
        darkMode={darkMode}
        height={navHeight}
        role="navigation"
        aria-label="main-navigation">
        <NavInside>
          <LogoWrap padding={logoPadding}>
            <LogoLink to="/" title="Logo">
              <Logo light={darkMode} height="100%" />
            </LogoLink>
          </LogoWrap>
          <NavLinksWrap>
            <NavLinks>
              {links.map((navLink, i) => navLink.label && (
                <NavLink darkMode={darkMode} to={navLink.path} key={`navLink${i}`} activeClassName="active">
                  {navLink.label}
                </NavLink>
              ))}
            </NavLinks>
          </NavLinksWrap>
          <NavActions>
            <IconButton darkMode={darkMode} onClick={() => console.log('Search functionality coming soon.')}>
              <Icon name="search" />
            </IconButton>
            <MenuButton>
              <span />
              <span />
              <span />
            </MenuButton>
          </NavActions>
        </NavInside>
      </NavWrap>
    )
  }
}

// export default Navbar

export default ({...props}) => (
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
    render={data => <NavBar data={data} {...props} />}
  />
)
