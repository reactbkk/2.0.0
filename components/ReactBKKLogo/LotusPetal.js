import PropTypes from 'prop-types'
import React from 'react'

class LotusPetal extends React.Component {
  static propTypes = {
    rotate: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number
  }
  static defaultProps = {
    rotate: 0,
    duration: 1,
    delay: 0
  }
  render () {
    const { rotate, duration, delay } = this.props
    return (
      <g transform='rotate(0 137,122.5)'>
        <title>Petal</title>
        <use fill='#00D8FF' xlinkHref='#a' y='84' x='124' id='svg_8' transform='rotate(0 33.49999999999998,143.00000000000003)' style={{ opacity: 0 }}>
          <animate attributeType='CSS' fill='freeze' attributeName='opacity' from='0' to='1' begin={delay} dur={0.3} repeatCount='1' />
        </use>
        <animateTransform
          attributeName='transform'
          type='rotate'
          from='0 137,122.5'
          to={`${rotate} 137,122.5`}
          dur={duration}
          begin={delay + 0.2}
          fill='freeze'
          keySplines='0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1'
        />
      </g>
    )
  }
}

export default LotusPetal
