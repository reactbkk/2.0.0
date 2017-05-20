import SectionTitle from './SectionTitle'

const sponsorsGold = [
  'programmer-thai',
  'sprin3r'
]
const sponsorsSliver = [
  'cleverse',
  'integenxe',
  'omise',
  'pronto',
  'taskworld',
  'thinknet',
  'wongnai'
]

export default function TicketsSection () {
  return (
    <div className='tickets'>
      <SectionTitle>Sponsors</SectionTitle>

      <div className='item-sponsors-box'>
        <div>
          {sponsorsGold.map(name => (
            <ItemSponsor
              key={name}
              name={name}
              src={`static/sponsor/${name}.svg`}
              type='gold'
            />
          ))}
        </div>
        <div>
          {sponsorsSliver.map(name => (
            <ItemSponsor
              key={name}
              name={name}
              src={`static/sponsor/${name}.svg`}
              type='sliver'
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .tickets {
          text-align: center;
        }
        .item-sponsors-box {
          max-width: 960px;
          text-align: center;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

function ItemSponsor ({ name, src, type }) {
  return (
    <div className={`sponsor-item-${type}`}>
      <img alt={`${name}`} aria-hidden src={src} width='100%' />

      <style jsx>{`
        .sponsor-item-gold, .sponsor-item-sliver {
          display: inline-block;
        }
        .sponsor-item-gold {
          width: 80%;
          max-width: 300px;
          padding: 0 30px;
        }
        .sponsor-item-sliver {
          width: 30%;
          max-width: 170px;
          padding: 0 20px;
        }

        @media (max-width: 767px) {
          .sponsor-item-gold {
            max-width: 40%;
            padding: 0 10px;
          }
          .sponsor-item-sliver {
            width: 40%;
            max-width: 150px;
            padding: 0 10px;
          }
        }
        @media (max-width: 480px) {
          .sponsor-item-gold {
            max-width: 100%;
            padding: 0;
          }
        }
      `}</style>
    </div>
  )
}
