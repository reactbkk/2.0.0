import Head from 'next/head'
import React from 'react'
import ReactBKKLogo from '../resources/reactbkk.svg'

export default () => (
  <MainLayout>
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
          margin: 30px 0 0;
          color: #00D8FF;
        }
      `}</style>
    </header>
  </MainLayout>
)

export function MainLayout ({ children }) {
  return (
    <div>
      <Head />
      <style global jsx>{`
        @font-face {
          font-family: 'ThaiSans Neue';
          src: local('ThaiSans Neue'),
               url('static/thaisansneue/thaisansneue-bold-webfont.woff2') format('woff2'),
               url('static/thaisansneue/thaisansneue-bold-webfont.woff') format('woff');
          font-weight: bold;
          font-style: normal;
        }
        @font-face {
          font-family: 'thaisans_neueregular';
          src: local('ThaiSans Neue'),
               url('static/thaisansneue/thaisansneue-regular-webfont.woff2') format('woff2'),
               url('static/thaisansneue/thaisansneue-regular-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
        body {
          margin: 0;
          background: #222;
          color: #fff;
          font-family: ThaiSans Neue;
        }
      `}</style>
      {children}
    </div>
  )
}
