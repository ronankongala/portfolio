import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { ABOUT_TEXT } from '../data/profile';

export default function AboutSection() {
  return (
    <section id="about" className="px-5 sm:px-8 md:px-10 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12 border-t border-[#D7E2EA]/10 pt-10">
        <FadeIn y={20}>
          <p className="font-mono text-xs tracking-[0.3em] text-[#D7E2EA]/40 uppercase">About</p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mt-2 whitespace-nowrap"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
          >
            Who I am
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-3 max-w-3xl">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
          />
          <FadeIn
            delay={0.1}
            className="text-[#D7E2EA]/55 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.88rem, 1.3vw, 1rem)' }}
          >
            MS Cybersecurity candidate at Northeastern University, currently an AI Cybersecurity
            Intern at Abbott in Madison, Wisconsin, following a co-op at Exact Sciences. First-author
            on an IEEE ICAISS 2025 paper. A BTech in AI and Data Science still shapes how I approach
            security work: as a data problem first.
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
