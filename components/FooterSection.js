import LevitatingLink from './LevitatingLink'

export default function TicketsSection () {
  return (
    <footer>
      <h2>Follow us on</h2>
      <p className='link'>
        <LevitatingLink href='https://www.facebook.com/groups/react.th/'>ReactJS Developer Thailand</LevitatingLink>
      </p>
      <style jsx>{`
        footer {
          text-align: center;
        }
        h2 {
          text-transform: uppercase;
        }
        h2, .link {
          margin: 0;
          font-size: 24px;
          line-height: 36px;
          font-weight: normal;
        }
      `}</style>
    </footer>
  )
}
