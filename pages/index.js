import FooterSection from '../components/FooterSection'
import HeroUnit from '../components/HeroUnit'
import MainLayout from '../components/MainLayout'
import SectionSeparator from '../components/SectionSeparator'
import SpeakersSection from '../components/SpeakersSection'
import TicketsSection from '../components/TicketsSection'
import AboutSection from '../components/AboutSection'
import SponsorsSection from '../components/SponsorsSection'
import ScheduleSection from '../components/ScheduleSection'

export default () => (
  <MainLayout>
    <HeroUnit />
    <SectionSeparator first />
    <section id='about'><AboutSection /></section>
    <SectionSeparator />
    <section id='tickets'><TicketsSection /></section>
    <SectionSeparator />
    <section id='sponsors'><SponsorsSection /></section>
    <SectionSeparator />
    <section id='speakers'><SpeakersSection /></section>
    <SectionSeparator />
    <section id='schedule'><ScheduleSection /></section>
    <SectionSeparator />
    <section id='contact'><FooterSection /></section>
  </MainLayout>
)
