import SectionTitle from './SectionTitle'

const speakers = [
  speaker('Somkiat Puisungnoen', 'somkiat.cc', 'สิ่งที่ยากลำบากมาก ๆ สำหรับการนำ React มาใช้งานคือ จะเริ่มต้นศึกษาอย่างไรดี ? เนื่องจาก React มีเครื่องมือต่าง ๆ มากมาย แถมบ่อยครั้บทำให้สับสนอีกต่างหาก ดังนั้นมีดูกันว่า การเริ่มต้นศึกษา React ที่ถูกต้องและเหมาะสมเป็นอย่างไร'),
  speaker('Thai Pangsakulyanont', 'Taskworld', 'เซสชั่นนี้จะสาธิตการสร้างเว็บแอปพลิเคชั่นเล็กๆ ตั้งแต่การเซ็ตอัพโปรเจกต์ ไปจนถึงการเซ็ตอัพ CI เพื่อ Deploy แอปไปไว้บน GitHub Pages'),
  speaker('Zack Siri', 'Founder at Artellectual', "A collection of things I've learned building single page application using React, and what I did or am doing to solve the problem I faced."),
  speaker('Tanakorn Numrubporn', 'CTO Planforfit', 'คุณคิดว่า การทดสอบระบบเป็นหน้าที่ของใคร? แล้วการออกแบบระบบล่ะ? มาอัพเกรดตัวเองให้กลายเป็นนักพัฒนา mobile app ชั้นเลิศ ด้วยการเสริมทักษะ tester และ designer ด้วยวิธีการ Behavior Driven Development กันเถอะ'),
  speaker('Chakrit Likitkhajorn', 'Lead developer at Taskworld', 'การ Test React เป็นโจทย์ที่ท้าทาย หัวข้อนี้จะแชร์วิธีและ Pattern การเขียน React ให้สามารถ Test ได้ และเปรียบเทียบข้อดีข้อเสียของวิธีและ Pattern แต่ละแบบ'),
  speaker('Panjamapong Sermsawatsri', 'CTO of TakeMeTour', 'หลายคนที่เขียน SPA คงจะเจอกับปัญหาขนาดไฟล์ใหญ่เกินไปจนเว็บเริ่มโหลดช้า เราจะมาดูกันว่า Next.js จะมาช่วยเราได้แค่ไหน พร้อมกับโชว์ทุกเทคนิคที่งัดออกมาเพื่อจะทำให้เว็บเร็วขึ้น'),
  speaker('Jirat Kijlerdpornpailoj', 'Sprint3r / Gucode', 'ใครใช้ Angular แล้วอยากเปลี่ยนเป็น React.js แต่ติดปัญหาไม่สามารถเขียนใหม่ทั้งหมดได้ งานก็ต้องส่ง งั้นทำไมเราไม่เปลี่ยนมันที่ละส่วน ค่อยๆ เปลี่ยนจนจาก Angular App เป็น React App'),
  speaker('Nati Namvong', 'CTO Sellsuki', 'มาทำ Workshop React Server-side Rendering อย่างง่ายๆด้วย Next.js กันครับ'),
  speaker('Yanin Tuamsuk', 'Front-end Engineer at Jitta', 'CSS นั้นได้วิวัฒนาการไปอีกขั้นแล้ว มาเปลี่ยนวิธีการ style ด้วย css ให้เหมาะกับ mindset แบบ react กัน'),
  speaker('Chinnawat Panmongkol', 'Wongnai', 'เราจะมาเล่าประสบการณ์หลังจากที่ได้ผันตัวจาก mobile มาเขียน React ว่ามีความเหมือน หรือแตกต่างกันแค่ไหน และต้องมีการปรับ Mindset อย่างไร')
]

function speaker (name, title, description) {
  const photo = `static/speakers/${name.replace(' ', '')}.jpg`
  return { name, title, photo, description }
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
          max-width: 1060px;
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
          .column {
            width: 33.33%;
            float: left;
            margin-bottom: 30px;
          }

        }
        @media (min-width: 768px) and (max-width: 1060px) {
          .container {
            width: 750px;
          }
          .column {
            width: 50%;
            float: left;
            margin: 0 auto 30px auto;
          }
        }
      `}</style>
    </div>
  )
}

function Speaker ({ name, title, photo, description }) {
  return (
    <div className='speaker-info'>
      <img alt='Photo' src={photo} />
      <h3>{name}</h3>
      <p>{title}</p>
      <p className='description'>"{description}"</p>
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

        .speaker-info {
          max-width: 270px;
          margin: auto auto;
          height: 270px;
        }

        .description {
          margin-top: 8px;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .speaker-info {
            height: inherit;
          }
        }
      `}</style>
    </div>
  )
}
