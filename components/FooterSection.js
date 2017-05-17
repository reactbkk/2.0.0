import LevitatingLink from './LevitatingLink'

export default function TicketsSection () {
  const facebookGroup = 'https://www.facebook.com/groups/react.th/'
  return (
    <footer>
      <h2>Follow us on</h2>
      <p className='link'>
        <LevitatingLink href={facebookGroup}>ReactJS Developer Thailand</LevitatingLink>
      </p>
      <p className='facebook-icon'>
        <a href={facebookGroup}>
          <img src='static/facebook-icon.png' alt='Facebook Group' width={54} height={54} />
        </a>
      </p>
      <style jsx>{`
        footer {
          text-align: center;
          padding-bottom: 30px;
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
        .facebook-icon {
          margin: 20px 0 0;
        }
      `}</style>
    </footer>
  )
}
