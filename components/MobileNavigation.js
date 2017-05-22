import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import LevitatingLink from './LevitatingLink'
import Hamburger from '../resources/hamburger.svg'

export default class MobileNavigation extends Component {
  static defaultProps = {
    navs: []
  }

  static propTypes = {
    navs: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string.isRequire,
      labal: PropTypes.string.isRequire,
      disabled: PropTypes.bool
    }))
  }

  state = {
    showMobileNav: false,
    expandMobileNav: false
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {
    if (window.scrollY > 700) {
      if (!this.state.showMobileNav) this.showMobileNav()
    } else {
      if (this.state.showMobileNav) this.hideMobileNav()
    }
  }

  showMobileNav = () => {
    this.setState({
      showMobileNav: true
    })
  }

  hideMobileNav = () => {
    this.setState({
      showMobileNav: false,
      expandMobileNav: false
    })
  }

  handleToggleMobileNav = (value) => {
    this.setState({
      expandMobileNav: value || !this.state.expandMobileNav
    })
  }

  handleClickNav = (e) => {
    this.handleToggleMobileNav(false)
  }

  renderNav = () => {
    const { navs } = this.props
    const { expandMobileNav } = this.state

    return (
      <nav aria-hidden role='presentation' onClick={this.handleClickNav}>
        <CSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          { expandMobileNav && <div className='nav-header' key='nav-header'>React Bangkok</div> }
          { expandMobileNav && navs.map(nav =>
            <NavigationLink href={nav.href} key={nav.href} disabled={nav.disabled}>{nav.label}</NavigationLink>)
          }
        </CSSTransitionGroup>
        <style jsx>{`
          nav {
            background: rgba(0, 0, 0, 0.9);
          }
          .nav-header {
            text-align:center;
            padding: .6em;
            color:#00D8FF;
            font-size: 30px;
          }
        `}</style>
      </nav>
    )
  }

  render () {
    const { showMobileNav } = this.state
    return (
      <CSSTransitionGroup
        transitionName='fade'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {
          showMobileNav &&
            <div id='mobile-nav'>
              <button type='button' className='btn-nav-toggle' onClick={() => this.handleToggleMobileNav()}>
                <Hamburger />
              </button>
              {this.renderNav()}
              <style jsx>{`
                #mobile-nav {
                  position: fixed;
                  top:0px;
                  left:0px;
                  width: 100%;
                  text-align: left;
                  z-index: 1;
                  display: none;
                }
                @media (max-width: 899px) {
                  #mobile-nav { display: block; }
                }

                .btn-nav-toggle {
                  position: absolute;
                  z-index:1;
                  top: 5px;
                  left:5px;
                  width: 40px;
                  height: 40px;
                  background: rgba(0, 0, 0, 0.5);
                  border: none;
                  outline: none;
                  cursor: pointer;
                }

                .btn-nav-toggle:active {
                  opacity: 0.5;
                }
              `}</style>
            </div>
        }
      </CSSTransitionGroup>
    )
  }
}

function NavigationLink ({ href, disabled, children }) {
  return (
    <div className={disabled ? 'disabled' : ''}>
      <LevitatingLink href={href}>{children}</LevitatingLink>
      <style jsx>{`
        div {
          text-transform: uppercase;
          padding: 0.5em 0;
          display: block;
          width: 100%;
          text-align: center;
        }
        div:active {
          opacity: 0.5;
        }
        .disabled {
          opacity: 0.25;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
