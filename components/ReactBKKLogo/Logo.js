import Lotus from './lotus.svg'
import React from 'react'
import RevealEllipse from './RevealEllipse'

class Logo extends React.Component {
  state = {
    revealLotus: false
  }
  componentDidMount () {
    this.delay = setTimeout(() => {
      this.setState({ revealLotus: true })
    }, 800)
  }
  componentWillUnmount () {
    clearTimeout(this.delay)
  }
  render () {
    const width = 274
    const height = 245
    const lotusClassName = `lotus ${this.state.revealLotus ? 'show' : ''}`
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <g className={lotusClassName}>
          <style jsx>{`
              .lotus {
                opacity: 0;
                transform: rotate3d(0, 0, 1, -30deg);
                transition: opacity 2s, transform 2s ease-out;
              }
              .lotus.show {
                transform: rotate3d(0, 0, 1, 0);
                transform-origin: center;
                opacity: 1;
              }
          `}</style>
          <Lotus />
        </g>
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          duration={1.5}
        />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          rotate={60}
          duration={0.8}
          delay={150}
        />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          rotate={120}
          delay={250}
        />
      </svg>
    )
  }
}

export default Logo
