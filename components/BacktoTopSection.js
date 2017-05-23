import { Link } from 'react-scroll'

export default function TopArrowSection () {
  return (
    <div>
      <Link to='herounit' spy smooth duration={500}>
        <div className='top-arrow'>
        </div>
      </Link>

      <style jsx>{`
        .top-arrow {
          position: fixed;
          left: auto;
          right: 30px;
          bottom: 40px;
          width: 50px;
          height: 50px;
          display: block;
          background: #222 url(static/arrow-up.png) no-repeat center center;
          border-radius: 60px;
          -webkit-transition: 1s;
          -moz-transition: 1s;
          transition: 1s;
        }
        .top-arrow:hover {
          background-color: #777;
        }
      `}</style>
    </div>
  )
}
