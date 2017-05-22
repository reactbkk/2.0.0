/*
eslint
  jsx-a11y/click-events-have-key-events: "off",
  jsx-a11y/no-static-element-interactions: "off",
*/

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

export default function SmoothScrollContainer ({ children }) {
  return (
    <div onClick={handleLinkClick}>
      {children}
    </div>
  )
}
