import { Element } from 'react-scroll'
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
    <Element name='tickets' />
    <TicketsSection />
    <SectionSeparator />
    <Element name='speakers' />
    <SpeakersSection />
    <SectionSeparator />
    <Element name='contact' />
    <FooterSection />
  </MainLayout>
)
