import { scroller } from 'react-scroll'

const isKeyPressedWithClick = (event) => event.ctrlKey || event.altKey || event.shiftKey || event.metaKey
const isExternal = (targetUrl) => {
  const stripHash = (url) => url.replace(/#.*$/, '')
  return stripHash(targetUrl) !== stripHash(window.location.href)
}

const handleLinkClick = (event) => {
  let target = event.target
  while (target && target.nodeName !== 'A') {
    target = target.parentNode
  }

  if (!target) return
  if (isExternal(target.href)) return
  if (isKeyPressedWithClick(event)) return

  event.preventDefault()
  const targetName = target.getAttribute('href').replace('#', '')
  scroller.scrollTo(targetName, {
    duration: 500,
    smooth: true
  })
}

export default function MainLayout ({ children }) {
  return (
    <div onClick={handleLinkClick}>
      {children}
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
    </div>
  )
}
