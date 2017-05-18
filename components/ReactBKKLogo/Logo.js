import React from 'react'
import RevealEllipse from './RevealEllipse'
class Logo extends React.Component {
  state = {
    revealIndex: 0
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState(({ revealIndex }) => {
        if (revealIndex >= 2) clearInterval(this.interval)
        return { revealIndex: revealIndex + 1 }
      })
    }, 150)
  }

  render () {
    const width = 274
    const height = 245
    const { revealIndex } = this.state
    return (
      <svg width={width} height={height}>
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          duration={1.5}
          enabled
        />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          rotate={60}
          duration={2}
          enabled={revealIndex > 1}
        />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          rotate={120}
          enabled={revealIndex > 2}
        />
      </svg>
    )
  }
}

export default Logo
