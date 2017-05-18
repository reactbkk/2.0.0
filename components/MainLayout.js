import Head from 'next/head'

export default function MainLayout ({ children }) {
  return (
    <div>
      <Head>
        <title>React Bangkok 2.0.0</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          property='og:image'
          content='https://reactbkk.github.io/2.0.0/static/og-image.jpg'
        />
      </Head>
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
          font-family: 'ThaiSans Neue';
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
          font-size: 22px;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
      {children}
    </div>
  )
}
