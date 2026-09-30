import { MotionConfig } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import CaseStripSection from './sections/CaseStripSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import WorkSection from './sections/WorkSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <CaseStripSection />
        <WorkSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}
