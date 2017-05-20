import DownArrowIcon from '../resources/down-arrow-icon.svg'
import NavigationBar from './NavigationBar'
import ReactBKKLogo from '../resources/reactbkk.svg'
import Scroll from 'react-scroll'
import Countdown from 'react-countdown-now'

var Link = Scroll.Link

export default function HeroUnit () {
  return (
    <header>
      <div className='bg-overlay' />
      <div className='spacer' />
      <div className='center'>
        <HeroUnitLogo />
      </div>
      <div className='footer'>
        <HeroUnitFooter />
      </div>
      <style jsx>{`
        header {
          text-align: center;
          position: relative;
          background: url(static/hero-bg.jpg) center no-repeat;
          background-size: cover;
        }
        .bg-overlay {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: #222;
          opacity: 0.9;
        }
        .center {
          position: relative;
          padding-top: 160px;
        }
        .footer {
          position: relative;
          padding-bottom: 40px;
          padding-top: 80px;
        }
        @media (max-width: 639px) {
          .center { padding-top: 80px; }
          .footer { padding-top: 40px; }
        }
      `}</style>
    </header>
  )
}

function HeroUnitLogo () {
  return (
    <div>
      <div className='logo'><ReactBKKLogo /></div>
      <h1>React Bangkok</h1>
      <Countdown date={'03 June 2017 09:30:00'} renderer={renderer} />
      <style jsx>{`
        h1 {
          font-size: 70px;
          font-weight: normal;
          margin: 1ex 0 0;
          color: #00D8FF;
        }
        @media (max-width: 639px) {
          h1 { font-size: 50px; }
          .logo :global(svg) { width: 196px; height: 175px; }
        }
        @media (max-width: 399px) {
          h1 { font-size: 44px; }
          .logo :global(svg) { width: 171px; height: 154px; }
        }
      `}</style>
    </div>
  )
}

function HeroUnitFooter () {
  return (
    <div className='footer'>
      <div className='nav'>
        <NavigationBar />
      </div>
      <Link to='tickets' spy smooth duration={500}>
        <div className='link'>
          <DownArrowIcon />
        </div>
      </Link>
      <style jsx>{`
        .nav {
          margin-bottom: 30px;
        }
        .link {
          cursor: pointer;
          display: inline-block;
          -webkit-transition: transform 0.25 ease-in-out;
          -moz-transition: transform 0.25s ease-in-out;
          -ms-transition: transform 0.25s ease-in-out;
          -o-transition: transform 0.25s ease-in-out;
          transition: transform 0.25s ease-in-out;
        }
        .link:hover {
          transform: translateY(6px);
        }
      `}</style>
    </div>
  )
}

function Completionist () {
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
        `}
      </style>
    </span>
  )
}

function renderer ({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    return <Completionist />
  } else {
    return (
      <div className='countdown'>
        <div>
          <p className='countdown-text'>
            {days}
            <div>Day</div>
          </p>
          <p>:</p>
          <p className='countdown-text'>
            {hours}
            <div>Hour</div>
          </p>
          <p>:</p>
          <p className='countdown-text'>
            {minutes}
            <div>Minute</div>
          </p>
          <p>:</p>
          <p className='countdown-text'>
            {seconds}
            <div>Second</div>
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
          p > div {
            position: absolute;
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
