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
  return { name, title }
}

export default function TicketsSection () {
  return (
    <div className='speakers-section'>
      <SectionTitle>Speakers</SectionTitle>
      <ul>
        {speakers.map((speaker, index) => <li>
          <Speaker {...speaker} />
        </li>)}
      </ul>
      <style jsx>{`
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
          margin: 0;
        }
      `}</style>
    </div>
  )
}

function Speaker ({ name, title }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{title}</p>
      <style jsx>{`
        h3 {
          margin: 0;
          font-size: 28px;
          line-height: 42px;
        }
        p {
          margin: 0;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 0.04em;
          opacity: 0.5;
        }
      `}</style>
    </div>
  )
}
