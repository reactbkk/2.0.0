import React, { Component } from 'react'
import Scroll from 'react-scroll'

export default class TopArrowSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cssHide: 'button-hide'
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
      this.setState({ cssHide: '' })
    } else {
      this.setState({ cssHide: 'button-hide' })
    }
  }

  scrollToTop = () => {
    Scroll.animateScroll.scrollToTop()
  }

  render () {
    return (
      <div>
        <div id='top-arrow' className={`top-arrow ${this.state.cssHide}`} onClick={this.scrollToTop}></div>
        <style jsx>{`
          .top-arrow {
            position: fixed;
            left: auto;
            padding: 5px;
            right: 30px;
            bottom: 40px;
            width: 30px;
            height: 30px;
            background: #222 url(static/arrow-up.svg) no-repeat center center;
            background-size: 30px 20px;
            border-radius: 60px;
            -webkit-transition: 1s;
            -moz-transition: 1s;
            transition: 1s;
          }
          .top-arrow:hover {
            background-color: #777;
          }
          .button-hide {
            display: none;
          }
        `}</style>
      </div>
    )
  }
}
