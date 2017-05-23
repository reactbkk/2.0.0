// Simple crossfade images
// credit: http://css3.bradshawenterprises.com/cfimg/

const images = [
  'static/hero-bg.jpg',
  'static/hero-bg-2.jpg',
  'static/hero-bg-3.jpg'
]

export default () => (
  <div className='container'>
    {images.map(image => {
      return <div key={image} className='image' style={{ backgroundImage: `url(${image})` }} />
    })}
    <style jsx>{`
      .container {
        top: 0;
        left:0;
        bottom:0;
        overflow:hidden;
        right:0;
        position: absolute;
      }
      .image {
        top: 0;
        left:0;
        bottom:0;
        right:0;
        background-size: cover;
        background-position: center center;
        position: absolute;
        animation: SimpleCrossfade 12s linear infinite 0s;
        transform-origin: center;
      }
      @keyframes SimpleCrossfade {
        0% { opacity:1; transform: scale(1); }
        25% { opacity:1; }
        33.3333% { opacity:0; transform: scale(1.05); }
        50% { transform: scale(1); }
        91.66667% { opacity: 0; }
        100% { opacity:1;  }
      }
      .image:nth-of-type(1) {
        animation-delay: 7s;
      }
      .image:nth-of-type(2) {
        animation-delay: 3s;
      }
      .image:nth-of-type(3) {
        animation-delay: -1s;
      }
    `}</style>
  </div>)
