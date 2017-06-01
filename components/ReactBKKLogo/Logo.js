import LotusPetal from './LotusPetal'
import React from 'react'
import RevealEllipse from './RevealEllipse'

class Logo extends React.Component {
  render () {
    const width = 274
    const height = 245
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <path d='m21.304,29.564a11.989,11.989 0 0 0 -7.743,-2.823c-3.1,0 -5.928,1.174 -8.065,3.103a13.38,13.38 0 0 1 -5.496,-10.84c0,-1.86 0.729,-3.732 1.738,-5.435l0.337,-0.47l1.347,0.673l0.658,-3.425a35.061,35.061 0 0 1 3.262,-3.31c1.552,-1.387 5.872,-7.037 5.872,-7.037s4.066,5.65 5.079,6.672c0.464,0.468 2.207,1.927 3.962,3.905l0.24,0.314l0.705,3.127l1.152,-0.704l0.195,0.255c1.091,1.712 1.881,3.584 1.881,5.435c0,4.295 -2.007,8.117 -5.124,10.56zm-8.085,-3.027c3.937,0 7.128,-3.215 7.128,-7.18c0,-2.987 -3.842,-6.08 -4.388,-6.63c-0.547,-0.55 -2.74,-3.587 -2.74,-3.587s-2.33,3.038 -3.168,3.784c-0.837,0.746 -3.96,3.614 -3.96,6.433c0,3.965 3.19,7.18 7.128,7.18z' id='a' />
        </defs>
        <g>
          <title>Center</title>
          <g style={{ opacity: 0 }} fill='none' fillRule='evenodd' id='svg_1'>
            <path d='m138,136c7.18,0 13,-5.82 13,-13s-5.82,-13 -13,-13s-13,5.82 -13,13s5.82,13 13,13zm0.25,-2.5c5.66,0 10.25,-4.59 10.25,-10.25s-4.59,-10.25 -10.25,-10.25s-10.25,4.59 -10.25,10.25s4.59,10.25 10.25,10.25zm0,-3.5a6.75,6.75 0 1 0 0,-13.5a6.75,6.75 0 0 0 0,13.5z' fill='#00D8FF' id='svg_5' />
            <animate attributeType='CSS' fill='freeze' attributeName='opacity' from='0' to='1' begin={1} dur={0.3} repeatCount='1' />
          </g>
        </g>
        <LotusPetal rotate={0} delay={0.3} duration={0.6} />
        <LotusPetal rotate={90} delay={0.2} duration={0.7} />
        <LotusPetal rotate={180} delay={0.1} duration={0.8} />
        <LotusPetal rotate={270} delay={0} duration={0.9} />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          duration={1.5}
          delay={1}
        />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          rotate={60}
          delay={1 + 0.15}
        />
        <RevealEllipse
          a={132}
          b={51}
          cx={width / 2}
          cy={height / 2}
          rotate={120}
          delay={1 + 0.25}
        />
      </svg>
    )
  }
}

export default Logo
