import FooterSection from '../components/FooterSection'
import HeroUnit from '../components/HeroUnit'
import MainLayout from '../components/MainLayout'
import SectionSeparator from '../components/SectionSeparator'
import SpeakersSection from '../components/SpeakersSection'
import TicketsSection from '../components/TicketsSection'
import About from '../components/About'

export default () => (
  <MainLayout>
    <HeroUnit />
    <SectionSeparator first />
    <section id='about'><About /></section>
    <SectionSeparator />
    <section id='tickets'><TicketsSection /></section>
    <SectionSeparator />
    <section id='speakers'><SpeakersSection /></section>
    <SectionSeparator />
    <section id='contact'><FooterSection /></section>
  </MainLayout>
)
