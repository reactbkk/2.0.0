import React from 'react'

export function Homepage () {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: 256,
            left: 0
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '-100%',
              top: '-100%',
              right: '-100%',
              transformOrigin: 'bottom',
              transform: 'rotate(-5deg)',
              background: '#222'
            }}
          />
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            height: 192,
            maxWidth: 960,
            marginRight: 'auto',
            marginBottom: 64,
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            src={require('./reactbkk-logo.png')}
            alt='[logo]'
            width={100}
            height={89}
          />
          <h1
            className='ค'
            style={{ fontSize: 64, fontWeight: 300, color: '#00D7FF', margin: '0 0 0 20px' }}
          >
            React Bangkok 2.0.0
          </h1>
        </div>
      </div>
    </div>
  )
}
