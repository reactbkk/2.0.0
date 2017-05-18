import React from 'react'
import RevealEllipse from './RevealEllipse'
class Logo extends React.Component {
  render () {
    const width = 274
    const height = 245
    return (
      <svg width={width} height={height}>
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          enable
        />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          rotate={60}
        />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          rotate={120}
        />
      </svg>
    )
  }
}

export default Logo
