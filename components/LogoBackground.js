const LogoBackground = ({ width, top = 0, left, right, bottom }) => (
  <div className='top-bg-container' style={{ height: width + top }}>
    <img className='top-bg'
      src='static/reactbkk.svg'
      style={{
        width,
        top,
        left,
        right,
        bottom
      }}
    />
    <style jsx>{`
        .top-bg-container {
          position: absolute;
          left: 0;
          right: 0;          
          z-index: -1; 
          overflow: hidden;
          opacity: 0.05;
        }
        .top-bg {
          position: absolute;
          filter: grayscale(100%);   
        }
      `}</style>
  </div>
)
export default LogoBackground
