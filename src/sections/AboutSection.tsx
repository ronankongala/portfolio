import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { ABOUT_TEXT } from '../data/profile';

// Monoline security glyphs replace the original's hotlinked 3D corner art.
const STROKE = '#646973';

function Shield() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke={STROKE} strokeWidth="1.4" className="w-full h-auto">
      <path d="M24 4 6 11v11c0 11 8 18 18 22 10-4 18-11 18-22V11L24 4Z" />
      <path d="M17 24l5 5 9-10" />
    </svg>
  );
}
function Terminal() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke={STROKE} strokeWidth="1.4" className="w-full h-auto">
      <rect x="5" y="9" width="38" height="30" rx="3" />
      <path d="M13 20l6 5-6 5M26 30h9" />
    </svg>
  );
}
function Graph() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke={STROKE} strokeWidth="1.4" className="w-full h-auto">
      <circle cx="10" cy="12" r="4" />
      <circle cx="38" cy="16" r="4" />
      <circle cx="24" cy="36" r="4" />
      <circle cx="12" cy="34" r="3" />
      <path d="M13.5 14.5 34 16M36 19.5 26 33M21.5 35 14.5 33.5M13 31l9-14" />
    </svg>
  );
}
function Fingerprint() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke={STROKE} strokeWidth="1.4" className="w-full h-auto">
      <path d="M14 20a12 12 0 0 1 20 0M18 22a8 8 0 0 1 14 5M24 22a4 4 0 0 1 4 6M24 22v10M20 30v6M28 28v8" />
    </svg>
  );
}

const DECOR = [
  {
    node: <Shield />,
    className:
      'w-[80px] sm:w-[110px] md:w-[140px] top-[6%] left-[2%] sm:left-[3%] md:left-[5%]',
    delay: 0.1,
    x: -80,
  },
  {
    node: <Graph />,
    className:
      'w-[80px] sm:w-[110px] md:w-[140px] bottom-[10%] left-[4%] sm:left-[7%] md:left-[10%]',
    delay: 0.25,
    x: -80,
  },
  {
    node: <Terminal />,
    className:
      'w-[80px] sm:w-[110px] md:w-[140px] top-[6%] right-[2%] sm:right-[3%] md:right-[5%]',
    delay: 0.15,
    x: 80,
  },
  {
    node: <Fingerprint />,
    className:
      'w-[80px] sm:w-[110px] md:w-[140px] bottom-[10%] right-[4%] sm:right-[7%] md:right-[10%]',
    delay: 0.3,
    x: 80,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {DECOR.map((item, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none opacity-70 ${item.className}`}
          aria-hidden="true"
        >
          <FadeIn delay={item.delay} x={item.x} y={0} duration={0.9}>
            {item.node}
          </FadeIn>
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24 max-w-4xl">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </FadeIn>
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[600px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <FadeIn
            delay={0.1}
            className="text-[#D7E2EA]/55 font-light text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)' }}
          >
            MS Cybersecurity candidate at Northeastern University, currently an AI Cybersecurity
            Intern at Abbott in Madison, Wisconsin, following a co-op at Exact Sciences. First-author
            on an IEEE ICAISS 2025 paper. A BTech in AI and Data Science still shapes how I approach
            security work: as a data problem first.
          </FadeIn>
        </div>
        <FadeIn>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
