/* global __NEXT_DATA__ */
'use strict'
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    if (typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport === true) {
      navigator.serviceWorker.register('/2.0.0/service-worker.js')
    }
  })
}
