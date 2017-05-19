// Simple crossfade images
// credit: http://css3.bradshawenterprises.com/cfimg/

const images = [
  '/static/hero-bg.jpg',
  'https://cloud.githubusercontent.com/assets/193136/26200621/2d440318-3bf9-11e7-909e-44cab5c9c4a8.jpg',
  'https://cloud.githubusercontent.com/assets/193136/26200625/3074fc04-3bf9-11e7-8764-b5c0adeb5bd2.jpg'
]
export default class SimpleCrossfadeImages extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentImageIndex: 0
    }
    this.tick = this._tick.bind(this)
  }
  componentDidMount () {
    setTimeout(this.tick, this.props.timeout)
  }
  _tick () {
    setTimeout(this.tick, this.props.timeout)
  }
  render () {
    return (
      <div className='container'>
        {images.map(image => {
          return <div className='image' style={{ backgroundImage: `url(${image})` }} />
        })}
        <style jsx>{`
            .container {
                top: 0;
                left:0;
                bottom:0;
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
                animation: SimpleCrossfade 5s linear infinite 0s;
            }
            @keyframes SimpleCrossfade {
                0% {
                    opacity:1;
                }
                27% {
                    opacity:1;
                }
                33% {
                    opacity:0;
                }
                94% {
                    opacity:0;
                }
                100% {
                    opacity:1;
                }
            }
            .container:nth-of-type(1) {
                animation-delay: 6s;
            }
            .container:nth-of-type(2) {
                animation-delay: 3s;
            }
            .container:nth-of-type(3) {
                animation-delay: 0s;
            }
      `}</style>
      </div>
    )
  }
}
