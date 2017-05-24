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
            topic='Angular to React without breaking things'
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
        <BreakRow time='Break' />
        <ActivityRow time='17:00 - 17:20'>Fireside Chat</ActivityRow>
        <ActivityRow time='17:20 onwards'>Networking Dinner</ActivityRow>

      </div>
      <style jsx>{`
        .schedule {
          text-align: center;
        }
        .container {
          max-width: 1060px;
          margin: 0 auto;
          text-align: left;
        }
        @media (max-width: 767px){
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

const ScheduleRow = ({ children }) => (
  <div className='row'>
    {children}
    <style jsx>{`
      .row {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding-left:7.5px;
        padding-right:7.5px;
        margin-bottom: 30px;
      }
    `}</style>
  </div>
)

const ScheduleColumn = ({ children, size, alignSelf }) => {
  return (
    <div className='column' data-size={size} style={{ alignSelf }}>
      {children}
      <style jsx>{`
        .column { width: 100%; }
        @media (min-width: 768px) {
          .column[data-size="2"] { width: 16.66%; }
          .column[data-size="5"] { width: 41.65%; }
          .column[data-size="8"] { width: 66.64%; }
          .column[data-size="10"] { width: 83.33%; }
        }
      `}</style>
    </div>
  )
}

const ActivityRow = ({ time, children }) => (
  <ScheduleRow>
    <ScheduleColumn size={2} alignSelf='center'>
      <SessionItemTime>{time}</SessionItemTime>
    </ScheduleColumn>
    <ScheduleColumn size={10} alignSelf='center'>
      <div className='main'>{children}</div>
    </ScheduleColumn>
    <style jsx>{`
      .main {
        font-size:28px;
      }
    `}</style>
  </ScheduleRow>
)

const BreakRow = ({ time }) => (
  <ScheduleRow>
    <ScheduleColumn size={2} alignSelf='center'>
      <SessionItemTime>{time}</SessionItemTime>
    </ScheduleColumn>
    <ScheduleColumn size={8} alignSelf='center'>
      <div className='break' />
    </ScheduleColumn>
    <style jsx>{`
      .break {
        height: 2px;
        width: 20%;
        background-color: #3A3A3A;
        margin: 0 auto;
      }
    `}</style>
  </ScheduleRow>
)

const SessionRow = ({ time, children }) => (
  <ScheduleRow>
    <ScheduleColumn size={2} alignSelf='center'>
      <SessionItemTime>{time}</SessionItemTime>
    </ScheduleColumn>
    {children}
  </ScheduleRow>
)

const SessionItemTime = ({ children }) => (
  <div className='time'>
    {children}
    <style jsx>{`
      .time {
        font-size:28px;
      }
    `}</style>
  </div>
)

const SessionItem = ({ topic, speakerName, speakerAvatar, speakerTitle }) => (
  <ScheduleColumn size={5} alignSelf='center'>
    <div className='session'>
      <div className='avatar'>
        <img alt='Photo' aria-hidden src={getSpeakerAvatar(speakerName)} />
      </div>
      <div className='info'>
        <div className='topic'>
          {topic}
        </div>
        <div className='speaker'>
          {speakerName} {speakerTitle}
        </div>
      </div>
    </div>
    <style jsx>{`
      .session {
        display: flex;
        align-items: center;
      }
      .avatar {
        flex: none;
        margin-right: 15px;
      }
      .info { flex: auto; }
      .avatar img {
        border-radius: 50%;
        width: 60px;
      }
      .info {
        text-align: left;
      }
      .topic {
        color: #00E0FF;
        font-weight: bold;
      }
      @media (max-width: 767px){
        .topic, .speaker {
          font-size: 18px;
        }
      }
    `}</style>
  </ScheduleColumn>
)
