import SectionTitle from './SectionTitle'

const speakers = [
  speaker('Somkiat Puisungnoen', 'somkiat.cc'),
  speaker('Thai Pangsakulyanont', 'Taskworld'),
  speaker('Zack Siri', 'Founder at Artellectual'),
  speaker('Tanakorn Numrubporn', 'CTO Planforfit'),
  speaker('Chakrit Likitkhajorn', 'Lead developer at Taskworld'),
  speaker('Panjamapong Sermsawatsri', 'CTO of TakeMeTour'),
  speaker('Jirat Kijlerdpornpailoj', 'Sprint3r / Gucode'),
  speaker('Nati Namvong', 'CTO Sellsuki'),
  speaker('Yanin Tuamsuk', 'Front-end Engineer at Jitta'),
  speaker('Chinnawat Panmongkol', 'Wongnai')
]

function speaker (name, title) {
  const photo = `static/speakers/${name.replace(' ', '')}.jpg`
  return { name, title, photo }
}

export default function TicketsSection () {
  return (
    <div className='speakers-section'>
      <SectionTitle>Speakers</SectionTitle>
      <div className='container'>
        <ul className='row'>
          {speakers.map((speaker, index) => <li className='column'>
            <Speaker {...speaker} />
          </li>)}
        </ul>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
        }
        .row {
          position: relative;
        }
        .row:after {
          content: "";
          float: none;
          display: block;
          clear: both;
        }
        .speakers-section {
          text-align: center;
        }
        ul {
          display: block;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        li {
          display: block;
          margin: 50px 0 0;
        }
        @media screen and (min-width: 1060px) {
          .container {
            width: 100%;
            width: 1060px;
          }
          .column {
            width: 33.33%;
            float: left;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </div>
  )
}

function Speaker ({ name, title, photo }) {
  return (
    <div>
      <img alt='Photo' src={photo} />
      <h3>{name}</h3>
      <p>{title}</p>
      <style jsx>{`
        img {
          overflow: hidden;
          display: block;
          margin: 0 auto;
          width: 80px;
          height: 80px;
          border: 3px solid white;
          border-radius: 50%;
        }
        h3 {
          margin: 0;
          font-size: 28px;
          font-weight: normal;
          line-height: 42px;
        }
        p {
          margin: 0;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 0.05em;
          opacity: 0.5;
        }
      `}</style>
    </div>
  )
}
