import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99360357-1', 'auto');
  ga('send', 'pageview');
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='th'>
        <Head>
          <title>React Bangkok 2.0.0</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta
            property='og:image'
            content='https://reactbkk.github.io/2.0.0/static/og-image-v2.jpg'
          />
          <meta name='theme-color' content='#222' />
          <meta name='apple-mobile-web-app-title' content='ReactBKK' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <link rel='shortcut icon' type='image/png' href='static/favicon.png' sizes='32x32' />
          <link rel='apple-touch-icon' href='https://reactbkk.github.io/2.0.0/static/icon-ios-fullsize.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='https://reactbkk.github.io/2.0.0/static/icon-ios-152.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='https://reactbkk.github.io/2.0.0/static/icon-ios-167.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='https://reactbkk.github.io/2.0.0/static/icon-ios-180.png' />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
          <script defer src='static/service-worker-registration.js' />
          <link rel='manifest' href='static/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
