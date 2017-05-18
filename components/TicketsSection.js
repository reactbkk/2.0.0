import SectionTitle from './SectionTitle'

export default function TicketsSection () {
  return (
    <div className='tickets'>
      <SectionTitle>Tickets</SectionTitle>
      <TicketsTable />
      <Button href='https://www.eventpop.me/e/1809-react-bangkok-2-0-0'>Get Tickets</Button>
      <style jsx>{`
        .tickets {
          text-align: center;
        }
      `}</style>
    </div>
  )
}

function TicketsTable () {
  return (
    <div className='tickets-table'>
      <TicketsRow title='1st round' date='18 May 2017' isFull />
      <TicketsRow title='2nd round' date='25 May 2017' />
      <style jsx>{`
        .tickets-table {
          margin: 0 auto 30px;
        }
      `}</style>
    </div>
  )
}

function TicketsRow ({ title, date, isFull }) {
  return (
    <div className={`tickets-row ${isFull ? 'full' : ''}`}>
      <div className='title'>{title}</div>
      <div className='date'>{date}</div>
      <style jsx>{`
        .tickets-row {
          display: flex;
          max-width: 10em;
          font-size: 24px;
          line-height: 32px;
          margin: 0 auto;
          position: relative;
        }
        .title {
          padding-right: 1em;
        }
        .date {
          margin-left: auto;
        }
        .full {
          color: #555;
        }
        .full:after {
          position: absolute;
          left: 0;
          top: 50%;
          height: 2px;
          background: #555;
          content: "";
          width: 100%;
          display: block;
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
          transition: 0.15s all ease-out;
        }
        .button:hover {
          background: rgba(255,255,255,0.5);
          color: #222;
        }
      `}</style>
    </a>
  )
}
