import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import LevitatingLink from './LevitatingLink'
import Hamburger from '../resources/hamburger.svg'

export default class MobileNavigation extends Component {
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
    window.scrollY > 700 ? this.showMobileNav() : this.hideMobileNav()
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

  render () {
    const { showMobileNav, expandMobileNav } = this.state

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
              <CSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {
                  expandMobileNav &&
                    <nav onClick={this.handleClickNav}>
                      <div className='nav-header'>React Bangkok</div>
                      <NavigationLink href='#about'>About</NavigationLink>
                      <NavigationLink href='#tickets'>Tickets</NavigationLink>
                      <NavigationLink href='#sponsors'>Sponsors</NavigationLink>
                      <NavigationLink href='#speakers'>Speakers</NavigationLink>
                      <NavigationLink href='#schedule' disabled>Schedule</NavigationLink>
                      <NavigationLink href='#contact'>Contact</NavigationLink>
                    </nav>
                }
              </CSSTransitionGroup>
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

                #mobile-nav nav {
                  background: rgba(0, 0, 0, 0.9);
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

                .nav-header {
                  text-align:center;
                  padding: .6em;
                  color:#00D8FF;
                  font-size: 30px;
                }

                .fade-enter {
                  opacity: 0.01;
                }

                .fade-enter.fade-enter-active {
                  opacity: 1;
                  transition: opacity 500ms ease-in;
                }

                .fade-leave {
                  opacity: 1;
                }

                .fade-leave.fade-leave-active {
                  opacity: 0.01;
                  transition: opacity 300ms ease-in;
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
