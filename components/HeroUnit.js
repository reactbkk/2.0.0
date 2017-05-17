import ReactBKKLogo from '../resources/reactbkk.svg'

export default function HeroUnit () {
  return (
    <header>
      <div className='bg-overlay' />
      <div style={{ flex: 'auto' }} />
      <div style={{ position: 'relative' }}>
        <ReactBKKLogo />
        <h2 style={{ textAlign: 'center' }}>
          React Bangkok 2.0.0
        </h2>
      </div>
      <div style={{ flex: '1 1 0px', position: 'relative' }}>
        {/* Add footer here */}
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
      `}</style>
    </header>
  )
}
