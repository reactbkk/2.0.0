import { Link } from 'react-scroll'

export default function LevitatingLink ({ href, withScrollTaget, children }) {
  const scrollTarget = href.replace('#', '')
  const childrenDOM = <span className='text'>{children}</span>
  return (
    <span>
      {
        withScrollTaget
          ? <Link to={scrollTarget} spy smooth duration={500} className='link-to'>{childrenDOM}</Link>
          : <a href={href} className='link-to'>{childrenDOM}</a>
      }
      <style jsx>{`
        span :global(.link-to) {
          color: #fff;
          text-decoration: none;
          display: inline-block;
          position: relative;
          cursor: pointer;
        }
        .text {
          display: block;
          position: relative;
          transition: 0.2s transform;
          transform: translateY(0);
        }
        span :global(.link-to):hover .text {
          transform: translateY(-2px);
        }
        span :global(.link-to)::after {
          content: '';
          position: absolute;
          display: block;
          height: 2px; right: 0; bottom: 0; left: 0;
          background: #fff;
          opacity: 0;
          transition: 0.2s transform, 0.2s opacity;
          transform: scaleX(0.5);
        }
        span :global(.link-to):hover::after {
          opacity: 1;
          transform: scaleX(1);
        }
      `}</style>
    </span>
  )
}
