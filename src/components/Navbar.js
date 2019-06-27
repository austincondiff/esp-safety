import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import styled from 'styled-components'

const NavWrap = styled.nav`

`
const NavInside = styled.div`

`
const NavLinksWrap = styled.div`

`
const NavLinks = styled.div`

`
const NavLinkWrap = styled.div`

`
const NavLink = styled.div`

`
const NavSubItems = styled.div`

`
const NavSubItemWrap = styled.div`

`
const NavSubItem = styled.div`

`
const MenuButton = styled.div`

`

const NavBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
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

  render() {
    const { data } = this.props
    const navigation = data.allSettingsYaml.edges[0].node.navigation
    const { links } = navigation
    console.log(links)

    return (
      <NavWrap
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <NavInside className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="ESP Safety" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <MenuButton>
              <span />
              <span />
              <span />
            </MenuButton>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">

              {links.map((navLink, i) => (
                <Link className="navbar-item" to={navLink.path} key={`navLink${i}`}>
                  {navLink.label}
                </Link>
              ))}

            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </NavInside>
      </NavWrap>
    )
  }
}

// export default Navbar

export default () => (
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
    render={(data) => <NavBar data={data} />}
  />
)
