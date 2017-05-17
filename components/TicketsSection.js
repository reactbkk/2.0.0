export default function TicketsSection () {
  return (
    <div className='tickets'>
      <Button href='https://www.eventpop.me/e/1809-react-bangkok-2-0-0'>Tickets</Button>
      <style jsx>{`
        .tickets {
          text-align: center;
        }
      `}</style>
    </div>
  )
}

function Button ({ children, href }) {
  return (
    <a className='button' href={href}>
      {children}
      <style jsx>{`
        .button {
          display: inline-block;
          font-size: 18px;
          line-height: 33px;
          color: rgba(255,255,255,0.5);
          border: 2px solid rgba(255,255,255,0.5);
          padding: 0 30px;
          border-radius: 35px;
          text-transform: uppercase;
          text-decoration: none;
        }
        .button:hover {
          background: rgba(255,255,255,0.5);
          color: #222;
        }
      `}</style>
    </a>
  )
}
