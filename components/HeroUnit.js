import DownArrowIcon from '../resources/down-arrow-icon.svg'
import ReactBKKLogo from '../resources/reactbkk.svg'

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
          max-height: 750px;
          position: relative;
          background: url(static/hero-bg.jpg) center no-repeat;
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
      <h2>React Bangkok</h2>
      <style jsx>{`
        h2 {
          font-size: 70px;
          font-weight: normal;
          margin: 1ex 0 0;
          color: #00D8FF;
        }
        @media (max-width: 639px) {
          h2 { font-size: 50px; }
          .logo :global(svg) { width: 196px; height: 175px; }
        }
        @media (max-width: 399px) {
          h2 { font-size: 44px; }
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
      <DownArrowIcon />
      <style jsx>{`
        .nav {
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  )
}

function NavigationBar () {
  return (
    <nav>
      <a href='#about' className='disabled'>About</a>
      <a href='#tickets' className='disabled'>Tickets</a>
      <a href='#sponsors' className='disabled'>Sponsors</a>
      <a href='#contact' className='disabled'>Contact</a>
      <style jsx>{`
        nav {
          font-size: 22px;
          line-height: 30px;
        }
        a {
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          padding: 0 2em;
        }
        a.disabled {
          opacity: 0.25;
          pointer-events: none;
        }
        @media (max-width: 639px) {
          a { display: block; }
        }
      `}</style>
    </nav>
  )
}
