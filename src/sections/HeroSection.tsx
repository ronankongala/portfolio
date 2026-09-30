import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { NAV_LINKS, PROFILE } from '../data/profile';

export default function HeroSection() {
  return (
    <section id="top" className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] md:text-[15vw]"
        >
          {PROFILE.name}
        </FadeIn>
      </div>

      {/* Hero avatar. Transparent cutout floated frameless over the name. Swap the file
          at public/ronan-hero.png (keep the name) to change it. */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[270px] sm:w-[342px] md:w-[414px] lg:w-[468px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            magnetStrength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={`${import.meta.env.BASE_URL}ronan-hero.png`}
              alt="Ronan Kongala"
              draggable={false}
              className="block w-full h-auto select-none"
              style={{ filter: 'drop-shadow(0 26px 55px rgba(0,0,0,0.55))' }}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.4rem)' }}
          >
            {PROFILE.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
