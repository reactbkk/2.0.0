import Lotus from './lotus.svg'
import React from 'react'
import RevealEllipse from './RevealEllipse'

class Logo extends React.Component {
  render() {
    const width = 274
    const height = 245
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <g className='lotus'>
          <style jsx>{`
            .lotus {
              opacity: 0;
              transform-origin: center;
              animation: fade-in 2.5s 1s;
              animation-fill-mode: forwards;
            }
            @keyframes fade-in {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
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
          delay={0.15}
        />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          rotate={120}
          delay={0.25}
        />
      </svg>
    )
  }
}

export default Logo
