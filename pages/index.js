import FooterSection from '../components/FooterSection'
import HeroUnit from '../components/HeroUnit'
import MainLayout from '../components/MainLayout'
import SectionSeparator from '../components/SectionSeparator'
import SpeakersSection from '../components/SpeakersSection'
import TicketsSection from '../components/TicketsSection'

export default () => (
  <MainLayout>
    <HeroUnit />
    <SectionSeparator first />
    <selection id='tickets'><TicketsSection /></selection>
    <SectionSeparator />
    <selection id='speakers'><SpeakersSection /></selection>
    <SectionSeparator />
    <selection id='contact'><FooterSection /></selection>
  </MainLayout>
)
