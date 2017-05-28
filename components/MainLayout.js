import SmoothScrollContainer from './SmoothScrollContainer'

export default function MainLayout ({ children }) {
  return (
    <SmoothScrollContainer>
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
        .fade-enter {
          opacity: 0.01;
        }
        .fade-enter.fade-enter-active {
          opacity: 1;
          transition: opacity 500ms ease-out;
        }
        .fade-leave {
          opacity: 1;
        }
        .fade-leave.fade-leave-active {
          opacity: 0.01;
          transition: opacity 300ms ease-out;
        }
      `}</style>
    </SmoothScrollContainer>
  )
}
