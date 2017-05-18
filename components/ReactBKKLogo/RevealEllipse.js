import React from 'react'
import PropTypes from 'prop-types'

function ellipsePoint (a, b, angle) {
  return {
    x: a * Math.cos(angle * Math.PI / 180),
    y: b * Math.sin(angle * Math.PI / 180)
  }
}

class RevealEllipse extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentAngle: 0,
      pointList: [ellipsePoint(props.a, props.b, 0)]
    }
  }

  componentDidMount () {
    const step = () => {
      const { a, b, duration } = this.props
      this.setState(({ currentAngle, pointList }) => {
        if (currentAngle > 360) {
          window.cancelAnimationFrame(this.raf)
          return { currentAngle, pointList }
        }
        const nextAngle = currentAngle + 6 / duration
        this.raf = window.requestAnimationFrame(step)
        return {
          currentAngle: nextAngle,
          pointList: [ ...pointList, ellipsePoint(a, b, nextAngle) ]
        }
      })
    }
    this.raf = window.requestAnimationFrame(step)
  }

  componentWillUnmount () {
    window.cancelAnimationFrame(this.raf)
  }

  render () {
    const { cx, cy, rotate } = this.props
    const { currentAngle, pointList } = this.state
    const path = pointList.map(({ x, y }) => x + ' ' + y).join(' ')
    return <path
      d={`M${path}${currentAngle >= 360 ? 'z' : ''}`}
      transform={`
        translate(${cx}, ${cy})
        rotate(${rotate})
      `}
      strokeWidth='10px'
      stroke='#00D8FF'
      fill='none'
    />
  }
}
RevealEllipse.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  a: PropTypes.number,
  b: PropTypes.number,
  rotate: PropTypes.number,
  duration: PropTypes.number
}
RevealEllipse.defaultProps = {
  cx: 0,
  cy: 0,
  a: 1,
  b: 1,
  rotate: 0,
  duration: 1
}
export default RevealEllipse
