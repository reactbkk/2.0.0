import FooterSection from '../components/FooterSection'
import HeroUnit from '../components/HeroUnit'
import MainLayout from '../components/MainLayout'
import SectionSeparator from '../components/SectionSeparator'
import SpeakersSection from '../components/SpeakersSection'
import TicketsSection from '../components/TicketsSection'
import AboutSection from '../components/AboutSection'
import SponsorsSection from '../components/SponsorsSection'
import LogoBackground from '../components/LogoBackground'
import MobileNavigation from '../components/MobileNavigation'
import ScheduleSection from '../components/ScheduleSection'

const navs = [
  { href: '#about', label: 'About' },
  { href: '#tickets', label: 'Tickets' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#contact', label: 'Contact' }
]

export default () => (
  <MainLayout>
    <MobileNavigation navs={navs} />
    <HeroUnit navs={navs} />
    <SectionSeparator first />
    <LogoBackground offsetTop={100} right={-200} />
    <section id='about'><AboutSection /></section>
    <SectionSeparator />
    <section id='tickets'><TicketsSection /></section>
    <SectionSeparator />
    <section id='sponsors'><SponsorsSection /></section>
    <SectionSeparator />
    <LogoBackground offsetTop={50} left={-200} />
    <section id='speakers'><SpeakersSection /></section>
    <SectionSeparator />
    <section id='schedule'><ScheduleSection /></section>
    <SectionSeparator />
    <section id='contact'><FooterSection /></section>
  </MainLayout>
)
