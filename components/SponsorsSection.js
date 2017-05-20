import SectionTitle from './SectionTitle'

const sponsorsGold = [
  { name: 'Thai Programmer Association', image: 'programmer-thai' },
  { name: 'SPRINT3r', image: 'sprin3r' }
]
const sponsorsSliver = [
  { name: 'Cleverse', image: 'cleverse' },
  { name: 'int’genxe', image: 'integenxe' },
  { name: 'Omise', image: 'omise' },
  { name: 'Pronto Tools', image: 'pronto' },
  { name: 'Taskworld', image: 'taskworld' },
  { name: 'THiNKNET', image: 'thinknet' },
  { name: 'Wongnai', image: 'wongnai' }
]

export default function TicketsSection () {
  return (
    <div className='tickets'>
      <SectionTitle>Sponsors</SectionTitle>

      <div className='item-sponsors-box'>
        <div>
          {sponsorsGold.map(createSponsorRenderer('gold'))}
        </div>
        <div>
          {sponsorsSliver.map(createSponsorRenderer('silver'))}
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
function createSponsorRenderer (type) {
  return function renderSponsor (detail) {
    return (
      <ItemSponsor
        key={detail.name}
        name={detail.name}
        src={`static/sponsor/${detail.image}.svg`}
        type={type}
      />
    )
  }
}

function ItemSponsor ({ name, src, type }) {
  return (
    <div className={`sponsor-item-${type}`}>
      <img alt={`${name}`} src={src} width='100%' />

      <style jsx>{`
        .sponsor-item-gold, .sponsor-item-silver {
          display: inline-block;
        }
        .sponsor-item-gold {
          width: 80%;
          max-width: 300px;
          padding: 0 30px;
        }
        .sponsor-item-silver {
          width: 30%;
          max-width: 170px;
          padding: 0 20px;
        }

        @media (max-width: 767px) {
          .sponsor-item-gold {
            max-width: 40%;
            padding: 0 10px;
          }
          .sponsor-item-silver {
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
