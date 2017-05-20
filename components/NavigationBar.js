import LevitatingLink from './LevitatingLink'

export default function NavigationBar () {
  return (
    <nav>
      <NavigationLink href='#about' disabled>About</NavigationLink>
      <NavigationLink href='tickets'>Tickets</NavigationLink>
      <NavigationLink href='#sponsors' disabled>Sponsors</NavigationLink>
      <NavigationLink href='speakers'>Speakers</NavigationLink>
      <NavigationLink href='#schedule' disabled>Schedule</NavigationLink>
      <NavigationLink href='contact'>Contact</NavigationLink>
      <style jsx>{`
        nav {
          font-size: 22px;
          line-height: 30px;
        }
      `}</style>
    </nav>
  )
}

function NavigationLink ({ href, disabled, children }) {
  return (
    <span className={disabled ? 'disabled' : ''}>
      <LevitatingLink href={href}>{children}</LevitatingLink>
      <style jsx>{`
        span {
          text-transform: uppercase;
          padding: 0 1.5em;
        }
        .disabled {
          opacity: 0.25;
          pointer-events: none;
        }
        @media (max-width: 899px) {
          span { padding: 0 1em; }
        }
        @media (max-width: 719px) {
          span { display: block; }
        }
      `}</style>
    </span>
  )
}
