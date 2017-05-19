import PropTypes from 'prop-types'
import React from 'react'

function generateRange (start, end, count) {
  let result = []
  for (let i = start; i <= end; i += count) {
    result.push(i)
  }
  return result
}

function ellipsePoint (a, b, angle) {
  return {
    x: a * Math.cos(angle * Math.PI / 180),
    y: b * Math.sin(angle * Math.PI / 180)
  }
}

class RevealEllipse extends React.Component {
  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    a: PropTypes.number,
    b: PropTypes.number,
    rotate: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number
  }
  static defaultProps = {
    cx: 0,
    cy: 0,
    a: 1,
    b: 1,
    rotate: 0,
    duration: 1,
    delay: 0
  }
  state = {
    currentAngle: 0,
    pointList: [ellipsePoint(this.props.a, this.props.b, 0)]
  }
  componentDidMount () {
    this.delay = setTimeout(() => {
      this.raf = window.requestAnimationFrame(this.revealStep)
    }, this.props.delay)
  }
  componentWillUnmount () {
    window.cancelAnimationFrame(this.raf)
    clearTimeout(this.delay)
  }
  revealStep = () => {
    const { a, b, duration } = this.props
    this.setState(({ currentAngle, pointList }) => {
      if (currentAngle >= 360) {
        return window.cancelAnimationFrame(this.raf)
      }
      const nextAngle = (currentAngle + 6 / duration)
      const newPointList = this.getIntegratedAngles(currentAngle, nextAngle, 5)
        .filter(angle => angle <= 360)
        .map(angle => ellipsePoint(a, b, angle))

      return {
        currentAngle: nextAngle,
        pointList: [ ...pointList, ...newPointList ]
      }
    })
    this.raf = window.requestAnimationFrame(this.revealStep)
  }
  getIntegratedAngles (currentAngle, nextAngle, maxAngle) {
    if (nextAngle - currentAngle > maxAngle) {
      return generateRange(currentAngle, nextAngle, maxAngle)
    }
    return [ currentAngle ]
  }
  render () {
    const { cx, cy, rotate } = this.props
    const { currentAngle, pointList } = this.state
    const path = pointList.map(({ x, y }) => x + ' ' + y).join(' ')
    return (
      <path
        d={`M${path}${currentAngle >= 360 ? 'z' : ''}`}
        transform={`
          translate(${cx}, ${cy})
          rotate(${rotate})
        `}
        strokeWidth='10px'
        stroke='#00D8FF'
        fill='none'
    />)
  }
}

export default RevealEllipse
