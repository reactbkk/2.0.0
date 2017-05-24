import SectionTitle from './SectionTitle'

const sponsorsGold = [
  { name: 'Thai Programmer Association', image: 'programmer-thai', url: 'https://thaiprogrammer.org/' },
  { name: 'SPRINT3r', image: 'sprin3r', url: 'http://sprint3r.com/' }
]
const sponsorsSliver = [
  { name: 'Cleverse', image: 'cleverse', url: 'http://cleverse.com' },
  { name: 'int’genxe', image: 'integenxe', url: 'http://www.intgenxe.com/' },
  { name: 'Omise', image: 'omise', url: 'https://www.omise.co/' },
  { name: 'Pronto Tools', image: 'pronto', url: 'http://www.prontotools.io' },
  { name: 'Taskworld', image: 'taskworld', url: 'https://www.taskworld.com' },
  { name: 'THiNKNET', image: 'thinknet', url: 'https://www.thinknet.co.th/home.php' },
  { name: 'Wongnai', image: 'wongnai', url: 'https://www.wongnai.com/' }
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
        url={detail.url}
      />
    )
  }
}

function ItemSponsor ({ name, src, type, url }) {
  return (
    <div className={`sponsor-item-${type}`}>
      <a href={url} target='_blank'>
        <img alt={`${name}`} src={src} width='100%' />
      </a>
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
        a {
          display: block;
          transition: 0.2s 0s ease-in-out;
        }
        a:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  )
}
