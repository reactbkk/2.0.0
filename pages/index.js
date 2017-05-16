import React from 'react'

export default () => (
  <MainLayout>
    <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 720, textAlign: 'center' }}>
      <img src='static/reactbkk-logo.png' alt='[logo]' />
      <h2 style={{ textAlign: 'center' }}>
        React Bangkok 2.0.0
      </h2>
    </div>
  </MainLayout>
)

export function MainLayout ({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}
