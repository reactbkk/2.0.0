import DownArrowIcon from '../resources/down-arrow-icon.svg'
import ReactBKKLogo from '../resources/reactbkk.svg'

export default function HeroUnit () {
  return (
    <header>
      <div className='bg-overlay' />
      <div className='spacer' />
      <div className='center'>
        <ReactBKKLogo />
        <h2 style={{ textAlign: 'center' }}>
          React Bangkok 2.0.0
        </h2>
      </div>
      <div className='footer'>
        <HeroUnitFooter />
      </div>
      <style jsx>{`
        header {
          height: 750px;
          text-align: center;
          max-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          background: url(static/hero-bg.jpg) center no-repeat;
        }
        .bg-overlay {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: #222;
          opacity: 0.9;
        }
        h2 {
          font-size: 70px;
          margin: 1ex 0 0;
          color: #00D8FF;
        }
        @media (max-width: 639px) {
          h2 { font-size: 50px; }
          header :global(svg) { width: 196px; height: 175px; }
        }
        @media (max-width: 399px) {
          h2 { font-size: 35px; }
          header :global(svg) { width: 137px; height: 123px; }
        }
        .spacer {
          flex: auto;
        }
        .center {
          position: relative;
        }
        .footer {
          flex: 1 1 0px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
      `}</style>
    </header>
  )
}

function HeroUnitFooter () {
  return (
    <div>
      <DownArrowIcon />
    </div>
  )
}
