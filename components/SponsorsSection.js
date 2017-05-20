import SectionTitle from './SectionTitle'

const sponsorsGold = [
  { name: 'Thai Programmer Association', image: 'programmer-thai', type: 'gold' },
  { name: 'SPRINT3r', image: 'sprin3r', type: 'gold' }
]
const sponsorsSliver = [
  { name: 'Cleverse', image: 'cleverse', type: 'sliver' },
  { name: 'int’genxe', image: 'integenxe', type: 'sliver' },
  { name: 'Omise', image: 'omise', type: 'sliver' },
  { name: 'Pronto Tools', image: 'pronto', type: 'sliver' },
  { name: 'Taskworld', image: 'taskworld', type: 'sliver' },
  { name: 'THiNKNET', image: 'thinknet', type: 'sliver' },
  { name: 'Wongnai', image: 'wongnai', type: 'sliver' }
]

export default function TicketsSection () {
  return (
    <div className='tickets'>
      <SectionTitle>Sponsors</SectionTitle>

      <div className='item-sponsors-box'>
        <div>
          {sponsorsGold.map(renderSponsor)}
        </div>
        <div>
          {sponsorsSliver.map(renderSponsor)}
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

function renderSponsor (detail) {
  return (
    <ItemSponsor
      key={detail.name}
      name={detail.name}
      src={`static/sponsor/${detail.image}.svg`}
      type={detail.type}
    />
  )
}

function ItemSponsor ({ name, src, type }) {
  return (
    <div className={`sponsor-item-${type}`}>
      <img alt={`${name}`} src={src} width='100%' />

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
