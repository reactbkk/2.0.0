import React from 'react'

export function Homepage () {
  return (
    <MainLayout>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 720 }}>
        <h2 style={{ margin: 0, textAlign: 'center', fontSize: 48, fontWeight: 300 }} className='สีนกเป็ดน้ำ คณิต'>Call for Speakers!</h2>
        <p style={{ fontSize: 24, lineHeight: '40px' }}>
          งาน <strong>React Bangkok 2.0.0</strong> จะจัดขึ้นในวันเสาร์ที่ 3 มิถุนายน 2017 (มั้ง)
          ที่ไหนยังไม่รู้
        </p>
        <p style={{ fontSize: 24, lineHeight: '40px' }}>
          หากคุณสนใจแบ่งปันประสบการณ์ในงาน React Bangkok 2.0.0
          กรุณาติดต่อเราเลย~
        </p>
      </div>
    </MainLayout>
  )
}

export function MainLayout ({ children }) {
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
            height: 224,
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
              transform: 'rotate(-4deg)',
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
            className='คณิต สีนกเป็ดน้ำ'
            style={{
              fontSize: 64,
              fontWeight: 300,
              margin: '0 0 0 20px'
            }}
          >
            React Bangkok 2.0.0
          </h1>
        </div>
        {children}
      </div>
    </div>
  )
}
