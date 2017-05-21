import SectionTitle from './SectionTitle'

const sessions = [
  {
    id: 1,
    type: 'FLASH',
    time: '10:00 - 10:10',
    sessionFirstTopic: 'Welcome Speech by Venue'
  },
  {
    id: 2,
    type: 'MAIN',
    time: '10:30 - 11:15',
    sessionFirstTopic: 'Let\'s start width React in the right way',
    sessionFirstAvatar: 'https://avatars2.githubusercontent.com/u/25113?v=3&s=400',
    sessionFirstSpeaker: 'Somkiat Puisungnoen (somkiat.cc)',
    sessionSecondTopic: 'Scalable React app Architecture',
    sessionSecondAvatar: 'https://avatars2.githubusercontent.com/u/134488?v=3&s=460',
    sessionSecondSpeaker: 'Zack Siri (Founder at Artellectual)'
  },
  {
    id: 3,
    type: 'MAIN',
    time: '11:15 - 12:00',
    sessionFirstTopic: 'Live coding / mob programming session',
    sessionFirstAvatar: 'https://avatars1.githubusercontent.com/u/193136?v=3&s=400',
    sessionFirstSpeaker: 'Thai Pangsakulyanont (Task World)',
    sessionSecondTopic: 'Behavior Driven Development in React Native',
    sessionSecondAvatar: 'https://avatars1.githubusercontent.com/u/19698625?v=3&s=400',
    sessionSecondSpeaker: 'Tanakorn numrubporn (CTO at Planforfit)'
  },
  {
    id: 4,
    type: 'BREAK',
    time: 'Lunch Break'
  },
  {
    id: 5,
    type: 'FLASH',
    time: '13:00 - 14:10',
    sessionFirstTopic: 'Lightning Talk'
  },
  {
    id: 6,
    type: 'MAIN',
    time: '14:15 - 15:00',
    sessionFirstTopic: 'Switching from Mobile to React Web Developer',
    sessionFirstAvatar: 'http://upic.me/i/5h/18489682_10211021272026019_3559519120929813202_o.jpg',
    sessionFirstSpeaker: 'Chinnawat Panmonkol (Wongnai)',
    sessionSecondTopic: 'Styled Components: Change your CSS styling mindset',
    sessionSecondAvatar: 'http://upic.me/i/6u/18556898_1436098509744650_6799324924419962365_o.jpg',
    sessionSecondSpeaker: 'Yanin Tuamsuk (Front-end Engineer at Jitta)'
  },
  {
    id: 7,
    type: 'BREAK',
    time: 'Break'
  },
  {
    id: 8,
    type: 'MAIN',
    time: '15:15 - 16:00',
    sessionFirstTopic: 'Angualat to React without breakingthings',
    sessionFirstAvatar: 'https://avatars3.githubusercontent.com/u/155392?v=3&s=400',
    sessionFirstSpeaker: 'Jirat Kijlerdpornpailoj (SPRINT3r / Gucode)',
    sessionSecondTopic: 'Testabled React: Patterns and comparison',
    sessionSecondAvatar: 'http://upic.me/t/b3/15965740_10154900014726797_4415870819464215979_n.jpg',
    sessionSecondSpeaker: 'Chakrit Likitkhajorn (Lead Developer at Taskworld)'
  },
  {
    id: 9,
    type: 'MAIN',
    time: '16:00 - 16:45',
    sessionFirstTopic: 'Workshop with Next.js',
    sessionFirstAvatar: 'http://upic.me/t/3j/18485743_10213102449583027_7199744295355607870_n.jpg',
    sessionFirstSpeaker: 'Nati Namvong (CTO at Sellsuki)',
    sessionSecondTopic: 'Lessons Learned from using Next.js in Production',
    sessionSecondAvatar: 'http://upic.me/i/pb/18589022_10209316039524510_1628867117219649509_o.jpg',
    sessionSecondSpeaker: 'Panjamapong (PanJ) Sermsawatsri (CTO at TakeMeTour)'
  }

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
    sessionFirstTopic,
    sessionFirstSpeaker,
    sessionFirstAvatar,
    sessionSecondTopic,
    sessionSecondSpeaker,
    sessionSecondAvatar
  } = props
  return (
    <div className='session'>
      { type === 'MAIN' &&
        <div className='row _margin-bottom-30'>
          <div className='column-md-2 column-xs-12 time'>{time}</div>
          <div className='column-md-5 column-xs-12'>
            <div className='row'>
              <div className='column-md-2'>
                <img className='speaker-avatar' src={sessionFirstAvatar} />
              </div>
              <div className='column-md-10'>
                <div className='topic'>
                  {sessionFirstTopic}
                </div>
                <div className='speaker'>
                  {sessionFirstSpeaker}
                </div>
              </div>
            </div>
          </div>
          <div className='column-md-5 column-xs-12'>
            <div className='row'>
              <div className='column-md-2'>
                <img className='speaker-avatar' src={sessionSecondAvatar} />
              </div>
              <div className='column-md-10'>
                <div className='topic'>
                  {sessionSecondTopic}
                </div>
                <div className='speaker'>
                  {sessionSecondSpeaker}
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
          <div className='column-md-5 column-xs-12 main'>{sessionFirstTopic}</div>
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
