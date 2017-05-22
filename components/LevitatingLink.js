export default function LevitatingLink ({ href, offset, children }) {
  return (
    <a href={href} data-offset={offset} >
      <span className='text'>{children}</span>
      <style jsx>{`
        a {
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
        a:hover .text {
          transform: translateY(-2px);
        }
        a::after {
          content: '';
          position: absolute;
          display: block;
          height: 2px; right: 0; bottom: 0; left: 0;
          background: #fff;
          opacity: 0;
          transition: 0.2s transform, 0.2s opacity;
          transform: scaleX(0.5);
        }
        a:hover::after {
          opacity: 1;
          transform: scaleX(1);
        }
      `}</style>
    </a>
  )
}
