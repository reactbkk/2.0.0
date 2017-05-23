export default class Parallax extends React.Component {
  componentDidMount () {
    window.addEventListener('load', this.scrollLoop, false)
  }

  componentWillUnMount () {
    window.removeEventListener('load', this.scrollLoop, false)
  }

  setPosition = (yPos) => {
    this.dom.style.transform = `translate3d(0, ${yPos}px, 0)`
  }

  scrollLoop = () => {
    this.setPosition(window.scrollY * this.props.speed)
    window.requestAnimationFrame(this.scrollLoop)
  }

  render () {
    return (
      <div ref={(dom) => (this.dom = dom)}>{this.props.children}</div>
    )
  }
}
