const LogoBackground = ({ size = 820, offsetTop = 0, left, right }) => (
  <div aria-hidden className='top-bg-container' style={{ height: size + offsetTop }}>
    <img className='top-bg'
      src='static/reactbkk-white.svg'
      alt=''
      style={{ width: size, top: offsetTop, left, right }}
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
      }
    `}</style>
  </div>
)
export default LogoBackground
