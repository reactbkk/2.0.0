import Scroll from 'react-scroll'
var Link = Scroll.Link


export default function LevitatingLink ({ href, children }) {
  return (
    <Link to={href} spy smooth duration={500}>
      <span className='listBlock'>
        <span className='text'>{children}</span>
      </span>
      <style jsx>{`
        .listBlock {
          color: #fff;
          text-decoration: none;
          display: inline-block;
          position: relative;
        }
        .text {
          display: block;
          position: relative;
          transition: 0.2s transform;
          transform: translateY(0);
        }
	.listBlock:hover {
	  cursor: pointer;
	}
        .listBlock:hover .text {
          transform: translateY(-2px);
        }
        .listBlock::after {
          content: '';
          position: absolute;
          display: block;
          height: 2px; right: 0; bottom: 0; left: 0;
          background: #fff;
          opacity: 0;
          transition: 0.2s transform, 0.2s opacity;
          transform: scaleX(0.5);
        }
        .listBlock:hover::after {
          opacity: 1;
          transform: scaleX(1);
        }
      `}</style>
    </Link>
  )
}
