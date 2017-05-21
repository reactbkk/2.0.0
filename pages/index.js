import FooterSection from '../components/FooterSection'
import HeroUnit from '../components/HeroUnit'
import MainLayout from '../components/MainLayout'
import SectionSeparator from '../components/SectionSeparator'
import SpeakersSection from '../components/SpeakersSection'
import TicketsSection from '../components/TicketsSection'
import AboutSection from '../components/AboutSection'
import SponsorsSection from '../components/SponsorsSection'
import LogoBackground from '../components/LogoBackground'

export default () => (
  <MainLayout>
    <HeroUnit />
    <SectionSeparator first />
    <LogoBackground width={820} top={100} right={-200} />
    <section id='about'><AboutSection /></section>
    <SectionSeparator />
    <section id='tickets'><TicketsSection /></section>
    <SectionSeparator />
    <section id='sponsors'><SponsorsSection /></section>
    <SectionSeparator />
    <LogoBackground width={820} top={50} left={-200} />
    <section id='speakers'><SpeakersSection /></section>
    <SectionSeparator />
    <section id='contact'><FooterSection /></section>
  </MainLayout>
)
