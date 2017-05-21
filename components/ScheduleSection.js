// Created By Wasu Winitmontri

import SectionTitle from './SectionTitle'

const sessions = [
  {
    id: 1,
    type: 'FLASH',
    time: '10:00 - 10:10', 
    session_1_topic: 'Welcome Speech by Venue', 
  },
  {
    id: 2,
    type: 'MAIN',
    time: '10:30 - 11:15', 
    session_1_topic: 'Let\'s start width React in the right way', 
    session_1_avatar: 'https://avatars2.githubusercontent.com/u/25113?v=3&s=400',
    session_1_speaker: 'Somkiat Puisungnoen (somkiat.cc)',
    session_2_topic: 'Scalable React app Architecture', 
    session_2_avatar: 'https://avatars2.githubusercontent.com/u/134488?v=3&s=460',
    session_2_speaker: 'Zack Siri (Founder at Artellectual)',
  },
  {
    id: 3,
    type: 'MAIN',
    time: '11:15 - 12:00', 
    session_1_topic: 'Live coding / mob programming session', 
    session_1_avatar: 'https://avatars1.githubusercontent.com/u/193136?v=3&s=400',
    session_1_speaker: 'Thai Pangsakulyanont (Task World)',
    session_2_topic: 'Behavior Driven Development in React Native', 
    session_2_avatar: 'https://avatars1.githubusercontent.com/u/19698625?v=3&s=400',
    session_2_speaker: 'Tanakorn numrubporn (CTO at Planforfit)',
  },
  {
    id: 4,
    type:'BREAK',
    time: 'Lunch Break', 
  },
  {
    id: 5,
    type: 'FLASH',
    time: '13:00 - 14:10', 
    session_1_topic: 'Lightning Talk', 
  },
  {
    id: 6,
    type: 'MAIN',
    time: '14:15 - 15:00', 
    session_1_topic: 'Switching from Mobile to React Web Developer', 
    session_1_avatar: 'http://upic.me/i/5h/18489682_10211021272026019_3559519120929813202_o.jpg',
    session_1_speaker: 'Chinnawat Panmonkol (Wongnai)',
    session_2_topic: 'Styled Components: Change your CSS styling mindset', 
    session_2_avatar: 'http://upic.me/i/6u/18556898_1436098509744650_6799324924419962365_o.jpg',
    session_2_speaker: 'Yanin Tuamsuk (Front-end Engineer at Jitta)',
  },
  {
    id: 7,
    type:'BREAK',
    time: 'Break', 
  },
  {
    id: 8,
    type: 'MAIN',
    time: '15:15 - 16:00', 
    session_1_topic: 'Angualat to React without breakingthings', 
    session_1_avatar: 'https://avatars3.githubusercontent.com/u/155392?v=3&s=400',
    session_1_speaker: 'Jirat Kijlerdpornpailoj (SPRINT3r / Gucode)',
    session_2_topic: 'Testabled React: Patterns and comparison', 
    session_2_avatar: 'http://upic.me/t/b3/15965740_10154900014726797_4415870819464215979_n.jpg',
    session_2_speaker: 'Chakrit Likitkhajorn (Lead Developer at Taskworld)',
  },
  {
    id: 9,
    type: 'MAIN',
    time: '16:00 - 16:45', 
    session_1_topic: 'Workshop with Next.js', 
    session_1_avatar: 'http://upic.me/t/3j/18485743_10213102449583027_7199744295355607870_n.jpg',
    session_1_speaker: 'Nati Namvong (CTO at Sellsuki)',
    session_2_topic: 'Lessons Learned from using Next.js in Production', 
    session_2_avatar: 'http://upic.me/i/pb/18589022_10209316039524510_1628867117219649509_o.jpg',
    session_2_speaker: 'Panjamapong (PanJ) Sermsawatsri (CTO at TakeMeTour)',
  },
  
]


export default function ScheduleSection () {
  return (
    <div className='schedule'>
      <SectionTitle>Schedule</SectionTitle>
      <div className='container'>
        {
          sessions.map(session => <Session key={session.id} {...session} />)
        }
      </div>
      <style jsx>{`
        .schedule {
          text-align: center;
        }
        .container {
          max-width: 1060px;
          width: 100%;
          margin: 0 auto;
          text-align: left;
        }
        @media (max-width: 768px){
          .container {
            max-width: 750px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}

const Session = (props) => {
  const {
    type,
    time,
    session_1_topic, 
    session_1_speaker, 
    session_1_avatar,
    session_2_topic, 
    session_2_speaker, 
    session_2_avatar,
  } = props;
  return (
    <div className='session'>
      { type === 'MAIN' &&
        <div className='row _margin-bottom-30'>
          <div className='column-md-2 column-xs-12 time'>{time}</div>
          <div className='column-md-5 column-xs-12'>
            <div className='row'>
              <div className='column-md-2'>
                <img className="speaker-avatar" src={session_1_avatar} />
              </div>
              <div className='column-md-10'>
                <div className='topic'>
                  {session_1_topic}
                </div>
                <div className='speaker'>
                  {session_1_speaker}
                </div>
              </div>
            </div>
          </div>
          <div className='column-md-5 column-xs-12'>
            <div className='row'>
              <div className='column-md-2'>
                <img className="speaker-avatar" src={session_2_avatar} />
              </div>
              <div className='column-md-10'>
                <div className='topic'>
                  {session_2_topic}
                </div>
                <div className='speaker'>
                  {session_2_speaker}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {
        type === 'BREAK' &&
        <div className='row _margin-bottom-30'>
          <div className='column-md-2 column-xs-12 time'>{time}</div>
          <div className='column-md-8 column-xs-12 container-break'><div className='break' /></div>
        </div>
      }
      {
        type === 'FLASH' &&
        <div className='row _margin-bottom-30'>
          <div className='column-md-2 column-xs-12 time'>{time}</div>
          <div className='column-md-5 column-xs-12 main'>{session_1_topic}</div>
        </div>
      }
      <style jsx>{`
        .row {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            padding-left:7.5px;
            padding-right:7.5px;
          }
          .column-md-5 {
            width: 41.65%;
          }
          .column-md-2 {
            width: 16.66%;
          }
          .column-md-8 {
            width: 66.64%;
          }
          .column-md-10 {
            width: 83.33%;
          }
          .topic {
            color:#00E0FF;
            font-weight: bold;
            text-align: left;
          }
          .speaker {
            text-align: left;
          }
          .time, .main {
            font-size:28px;
          }
          ._margin-bottom-30 {
            margin-bottom: 30px;
          }
          .break {
            height: 2px;
            width: 20%;
            background-color: #3A3A3A;
          }
          .container-break {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .speaker-avatar {
            width: 80%;
            border-radius: 50px
          }
          @media (max-width: 768px){
            .container {
              max-width: 750px;
              text-align: center;
            }
            .container-break {
              margin-top: 15px;
            }
            .column-xs-12 {
              width: 100%;
            }
            .topic, .speaker {
              font-size: 18px;
            }
          }
        `}</style>
    </div>
  )
}