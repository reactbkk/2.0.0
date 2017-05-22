import SectionTitle from './SectionTitle'

export default function ScheduleSection () {
  return (
    <div className='schedule'>
      <SectionTitle>Schedule</SectionTitle>
      <div className='container'>
        <ActivityRow time='10:00 - 10:10'>Welcome Speech by Venue</ActivityRow>
        <SessionRow time='10:30 - 11:15'>
          <SessionItem
            topic='Let’s start with React in the right way'
            speakerName='Somkiat Puisungnoen'
            speakerTitle='(somkiat.cc)'
          />
          <SessionItem
            topic='Scalable React app architecture'
            speakerName='Zack Siri'
            speakerTitle='(Founder at Artellectual)'
          />
        </SessionRow>
        <SessionRow time='11:15 - 12:00'>
          <SessionItem
            topic='Live coding / mob programming session'
            speakerName='Thai Pangsakulyanont'
            speakerTitle='(Taskworld)'
          />
          <SessionItem
            topic='Behavior Driven Development in React Native'
            speakerName='Tanakorn Numrubporn'
            speakerTitle='(CTO at Planforfit)'
          />
        </SessionRow>
        <BreakRow time='Lunch Break' />
        <ActivityRow time='13:00 - 14:10'>Lightning Talks</ActivityRow>
        <SessionRow time='14:15 - 15:00'>
          <SessionItem
            topic='Switching from Mobile to React Web Developer'
            speakerName='Chinnawat Panmongkol'
            speakerTitle='(Wongnai)'
          />
          <SessionItem
            topic='Styled Components: Change your CSS styling mindset'
            speakerName='Yanin Tuamsuk'
            speakerTitle='(Front-end Engineer at Jitta)'
          />
        </SessionRow>
        <BreakRow time='Break' />
        <SessionRow time='15:15 - 16:00'>
          <SessionItem
            topic='Angualar to React without breakingthings'
            speakerName='Jirat Kijlerdpornpailoj'
            speakerTitle='(SPRINT3r / Gucode)'
          />
          <SessionItem
            topic='Testable React: Patterns and comparison'
            speakerName='Chakrit Likitkhajorn'
            speakerTitle='(Lead Developer at Taskworld)'
          />
        </SessionRow>
        <SessionRow time='16:00 - 16:45'>
          <SessionItem
            topic='Workshop with Next.js'
            speakerName='Nati Namvong'
            speakerTitle='(CTO at Sellsuki)'
          />
          <SessionItem
            topic='Lessons Learned from using Next.js in Production'
            speakerName='Panjamapong Sermsawatsri'
            speakerTitle='(CTO at TakeMeTour)'
          />
        </SessionRow>
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

const getSpeakerAvatar = (name) => {
  return `static/speakers/${name.replace(' ', '')}.jpg`
}

const ActivityRow = ({ time, children }) => (
  <div className='row _margin-bottom-30'>
    <div className='column-md-2 column-xs-12 time'>{time}</div>
    <div className='column-md-5 column-xs-12 main'>{children}</div>
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
      .time, .main {
        font-size:28px;
      }
      ._margin-bottom-30 {
        margin-bottom: 30px;
      }
      @media (max-width: 768px){
        .column-xs-12 {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

const BreakRow = ({ time }) => (
  <div className='row _margin-bottom-30'>
    <div className='column-md-2 column-xs-12 time'>{time}</div>
    <div className='column-md-8 column-xs-12 container-break'><div className='break' /></div>
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
      .time {
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
      @media (max-width: 768px){
        .container-break {
          margin-top: 15px;
        }
        .column-xs-12 {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

const SessionRow = ({ time, children }) => (
  <div className='row _margin-bottom-30'>
    <div className='column-md-2 column-xs-12 time'>{time}</div>
    {children}
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
      .time {
        font-size:28px;
      }
      ._margin-bottom-30 {
        margin-bottom: 30px;
      }
      @media (max-width: 768px){
        .column-xs-12 {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

const SessionItem = ({ topic, speakerName, speakerAvatar, speakerTitle }) => {
  return (
    <div className='column-md-5 column-xs-12'>
      <div className='row'>
        <div className='column-md-2'>
          <img className='speaker-avatar' src={getSpeakerAvatar(speakerName)} />
        </div>
        <div className='column-md-10'>
          <div className='topic'>
            {topic}
          </div>
          <div className='speaker'>
            {speakerName} {speakerTitle}
          </div>
        </div>
      </div>
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
        ._margin-bottom-30 {
          margin-bottom: 30px;
        }
        .speaker-avatar {
          width: 80%;
          border-radius: 50px
        }
        @media (max-width: 768px){
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
