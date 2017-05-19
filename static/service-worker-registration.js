'use strict';
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    if( typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport === true ){
      navigator.serviceWorker.register('/2.0.0/service-worker.js').then(function(reg) {
        reg.onupdatefound = function() {
          var installingWorker = reg.installing;
          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  // console.log('New or updated content is available.');
                } else {
                  // console.log('Content is now available offline!');
                }
                break;
              case 'redundant':
                break;
            }
          };
        };
      }).catch(function(e) {
        // console.error('Error during service worker registration:', e);
      });
    }
  });
}