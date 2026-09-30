import FadeIn from '../components/FadeIn';
import { CAPABILITIES } from '../data/profile';

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Capabilities
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {CAPABILITIES.map((cap, i) => (
          <FadeIn
            key={cap.number}
            delay={i * 0.1}
            className="flex items-start sm:items-center gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
            style={i > 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : undefined}
          >
            <span
              className="font-black leading-none shrink-0 text-[#0C0C0C] font-mono"
              style={{ fontSize: 'clamp(2.4rem, 9vw, 120px)' }}
            >
              {cap.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3 text-[#0C0C0C]">
              <h3
                className="font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {cap.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {cap.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
