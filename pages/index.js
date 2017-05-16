import Head from 'next/head'
import React from 'react'
import ReactBKKLogo from '../resources/reactbkk.svg'

export default () => (
  <MainLayout>
    <header>
      <div className='bg-overlay' />
      <div className='content'>
        <ReactBKKLogo />
        <h2 style={{ textAlign: 'center' }}>
          React Bangkok 2.0.0
        </h2>
      </div>
      <style jsx>{`
        header {
          height: 750px;
          text-align: center;
          max-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: url(static/hero-bg.jpg) center no-repeat;
        }
        .bg-overlay {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: #222;
          opacity: 0.9;
        }
        .content {
          position: relative;
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
