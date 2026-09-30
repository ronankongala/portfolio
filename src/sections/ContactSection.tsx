import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import GhostButton from '../components/GhostButton';
import { PROFILE } from '../data/profile';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36 border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] text-[#D7E2EA]/40 uppercase mb-6">
            Contact
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 90px)' }}
          >
            Open to Summer and Fall 2027 security roles
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            className="text-[#D7E2EA]/65 font-light max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)' }}
          >
            SOC, detection engineering, malware analysis, threat intelligence, GRC, or vulnerability
            management. If there is a fit, I would like to hear about it.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
            <ContactButton href={`mailto:${PROFILE.email}`} label="Email me" />
            <GhostButton href={PROFILE.phoneHref} label={PROFILE.phone} external={false} />
            <GhostButton href={PROFILE.linkedin} label="LinkedIn" />
            <GhostButton href={PROFILE.github} label="GitHub" />
          </div>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[#D7E2EA]/40 font-mono text-xs">&copy; 2026 Ronan Kongala</span>
        <span className="text-[#D7E2EA]/40 font-mono text-xs">
          Built with React, TypeScript, and Framer Motion
        </span>
      </div>
    </section>
  );
}
