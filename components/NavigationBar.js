import LevitatingLink from './LevitatingLink'

export default function NavigationBar () {
  return (
    <nav>
      <NavigationLink href='#about' disabled>About</NavigationLink>
      <NavigationLink href='#tickets'>Tickets</NavigationLink>
      <NavigationLink href='#sponsors' disabled>Sponsors</NavigationLink>
      <NavigationLink href='#speakers' disabled>Speakers</NavigationLink>
      <NavigationLink href='#contact' disabled>Contact</NavigationLink>
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
          padding: 0 1.25em;
        }
        .disabled {
          opacity: 0.25;
          pointer-events: none;
        }
        @media (max-width: 639px) {
          span { display: block; }
        }
      `}</style>
    </span>
  )
}
