import React from 'react'
import Countdown from 'react-countdown-now'

class CountdownContainer extends React.Component {
  state = {
    mounted: false
  }
  componentDidMount () {
    this.setState({ mounted: true })
  }
  render () {
    if (this.state.mounted) {
      return <Countdown date={'03 June 2017 09:30:00'} renderer={renderCountdown} />
    } else {
      return null
    }
  }
}

function renderCountdownCompletionist () {
  return (
    <span>
      Good luck and have fun.
      <style jsx>{`
        span {
          font-size: 36px;
        }
        @media (max-width: 399px) {
          span {
            font-size: 24px;
          }
        }
      `}</style>
    </span>
  )
}

function renderCountdown ({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    return <renderCountdownCompletionist />
  } else {
    return (
      <div className='countdown'>
        <div>
          <p className='countdown-text'>
            {days}
            <small>Day</small>
          </p>
          <p>:</p>
          <p className='countdown-text'>
            {hours}
            <small>Hour</small>
          </p>
          <p>:</p>
          <p className='countdown-text'>
            {minutes}
            <small>Minute</small>
          </p>
          <p>:</p>
          <p className='countdown-text'>
            {seconds}
            <small>Second</small>
          </p>
        </div>
        <style jsx>{`
          p {
            position: relative;
            font-size: 40px;
            font-weight: bold;
            display: inline-block;
            margin: 0 8px;
          }
          p.countdown-text {
            width: 40px;
          }
          p > small {
            position: absolute;
            bottom: -12px;
            display: block;
            font-size: 18px;
            width: 100%;
            text-align: center;
          }
          @media (max-width: 399px) {
            p {
              font-size: 28px;
              margin 0 4px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default CountdownContainer