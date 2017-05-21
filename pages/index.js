import FooterSection from '../components/FooterSection'
import HeroUnit from '../components/HeroUnit'
import MainLayout from '../components/MainLayout'
import SectionSeparator from '../components/SectionSeparator'
import TicketsSection from '../components/TicketsSection'
import ScheduleSection from '../components/ScheduleSection'

export default () => (
  <MainLayout>
    <HeroUnit />
    <SectionSeparator first />
    <section id='tickets'><TicketsSection /></section>
    <SectionSeparator />
    <section id='schedule'><ScheduleSection /></section>
    <SectionSeparator />
    <section id='contact'><FooterSection /></section>
  </MainLayout>
)
