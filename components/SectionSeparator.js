export default function SectionSeparator ({ first }) {
  return (
    <div className='section-separator'>
      <div className='line' />
      {!!first && <div className='ball' />}
      <style jsx>{`
        .section-separator {
          margin: 30px 0;
        }
        .line {
          margin: 0 auto;
          width: 2px;
          height: 70px;
          background: #3A3A3A;
        }
        .ball {
          margin: -1px auto 0;
          width: 20px;
          height: 20px;
          background: #3A3A3A;
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}
