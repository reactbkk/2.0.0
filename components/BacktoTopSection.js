import React, { Component } from 'react'
import Scroll from 'react-scroll'

export default class TopArrowSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      atTopOfPage: true
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (this.state.atTopOfPage) this.setState({ atTopOfPage: false })
    } else {
      if (!this.state.atTopOfPage) this.setState({ atTopOfPage: true })
    }
  }

  scrollToTop = () => {
    Scroll.animateScroll.scrollToTop()
  }

  render () {
    return (
      <div>
        <div aria-hidden
          id='top-arrow'
          className={`top-arrow ${this.state.atTopOfPage ? 'button-hide' : ''}`}
          onClick={this.scrollToTop}
          onKeyDown={() => {}}
          role='button' />
        <style jsx>{`
          .top-arrow {
            position: fixed;
            padding: 5px;
            right: 30px;
            bottom: 40px;
            width: 30px;
            height: 30px;
            background: #222 url(static/arrow-up.svg) no-repeat center center;
            background-size: 30px 20px;
            border-radius: 60px;
            transition: 1s;
          }
          .top-arrow:hover {
            background-color: #777;
          }
          .button-hide {
            opacity: 0.01;
            pointer-events: none;
          }
        `}</style>
      </div>
    )
  }
}
