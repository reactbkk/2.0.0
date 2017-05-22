import LevitatingLink from './LevitatingLink'

export default function NavigationBar ({ navs = [] }) {
  return (
    <nav>
      {navs.map(nav => <NavigationLink href={nav.href} key={nav.href} disabled={nav.disabled}>{nav.label}</NavigationLink>)}
      <style jsx>{`
        nav {
          font-size: 22px;
          line-height: 30px;
        }
      `}</style>
    </nav>
  )
}

function NavigationLink ({ href, disabled = false, children }) {
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
