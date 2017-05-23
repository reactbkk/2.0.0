// Simple crossfade images
// credit: http://css3.bradshawenterprises.com/cfimg/

const images = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .slice(0, 5)
  .map(n => `static/hero-bg/hero-bg-${n}.jpg`)

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
        animation: SimpleCrossfade 20s linear infinite 0s;
        transform-origin: center;
      }
      @keyframes SimpleCrossfade {
        0% { opacity: 1; transform: scale(1); }
        15% { opacity: 1; }
        20% { opacity: 0; transform: scale(1.05); }
        50% { transform: scale(1); }
        95% { opacity: 0; }
        100% { opacity: 1; }
      }
      .image:nth-of-type(1) {
        animation-delay: 15s;
      }
      .image:nth-of-type(2) {
        animation-delay: 11s;
      }
      .image:nth-of-type(3) {
        animation-delay: 7s;
      }
      .image:nth-of-type(4) {
        animation-delay: 3s;
      }
      .image:nth-of-type(5) {
        animation-delay: -1s;
      }
    `}</style>
  </div>)

/**
 * credit: https://css-tricks.com/snippets/javascript/shuffle-array/
 */
function shuffle (array) {
  return [...array].sort(() => 0.5 - Math.random())
}
