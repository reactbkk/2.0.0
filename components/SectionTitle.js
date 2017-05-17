export default function SectionTitle ({ children }) {
  return (
    <h2>
      {children}
      <style jsx>{`
        h2 {
          font-size: 36px;
          line-height: 48px;
          text-transform: uppercase;
          margin: 0 0 30px;
        }
      `}</style>
    </h2>
  )
}
