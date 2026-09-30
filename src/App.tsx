import { MotionConfig } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import CaseStripSection from './sections/CaseStripSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import WorkSection from './sections/WorkSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
        <HeroSection />
        <CaseStripSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}
