import Head from 'next/head'
import { scroller } from 'react-scroll'

const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99360357-1', 'auto');
  ga('send', 'pageview');
`

const checkDomain = (url) => url.replace(/([A-Za-z]):\/\//, '$1').split('/')[0]
const isExternal = (url) => (url && url.indexOf(':') > -1 && checkDomain(window.location.href) !== checkDomain(url))
const isKeyPressedWithClick = (event) => event.ctrlKey || event.altKey || event.shiftKey || event.metaKey

export default class MainLayout extends React.Component {
  componentDidMount () {
    this.listenerClickLink()
  }

  listenerClickLink () {
    [].forEach.call(document.querySelectorAll('a'), (el) => {
      el.addEventListener('click', (event) => {
        event.preventDefault()
        const targetUrl = el.getAttribute('href')
        if (!isExternal(targetUrl) && !isKeyPressedWithClick(event)) {
          const realTarget = targetUrl.replace('#', '')
          scroller.scrollTo(realTarget, {
            duration: 500,
            smooth: true
          })
        } else {
          window.location = targetUrl
        }
      })
    })
  }

  render () {
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
          <meta name='apple-mobile-web-app-title' content='ReactBKK' />
          <link rel='shortcut icon' type='image/png' href='static/favicon.png' sizes='32x32' />
          <link rel='apple-touch-icon' href='https://reactbkk.github.io/2.0.0/static/icon-ios-fullsize.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='https://reactbkk.github.io/2.0.0/static/icon-ios-152.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='https://reactbkk.github.io/2.0.0/static/icon-ios-167.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='https://reactbkk.github.io/2.0.0/static/icon-ios-180.png' />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
          <link rel='manifest' href='static/manifest.json' />
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
        {this.props.children}
      </div>
    )
  }
}
