import PropTypes from 'prop-types'
import React from 'react'

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
  render () {
    const { cx, cy, a, b, rotate, duration, delay } = this.props
    return (
      <ellipse
        cx={cx}
        cy={cy}
        rx={a}
        ry={b}
        fill='none'
        transform={`          
          rotate(${rotate}, ${cx}, ${cy})
        `}
        strokeWidth={10}
        stroke='#00D8FF'
        strokeDasharray={620}
        strokeDashoffset={620}
      >
        <animate
          attributeName='stroke-dashoffset'
          from={620}
          to={0}
          dur={duration}
          begin={delay}
          fill='freeze'
          calcMode='spline'
          keyTimes='0;1'
          values='620;0'
          keySplines='0.5 0 0.5 1'
        />
      </ellipse>
    )
  }
}

export default RevealEllipse
