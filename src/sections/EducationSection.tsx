import FadeIn from '../components/FadeIn';
import { CERTIFICATIONS, EDUCATION } from '../data/profile';

const PILL =
  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[0.7rem] sm:text-xs tracking-wide';

export default function EducationSection() {
  return (
    <section id="education" className="px-5 sm:px-8 md:px-10 pb-20 sm:pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12 border-t border-[#D7E2EA]/10 pt-10">
        <FadeIn y={20}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight whitespace-nowrap"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
          >
            Education
            <br />& Certs
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EDUCATION.map((e, i) => (
              <FadeIn key={e.degree} delay={i * 0.08} y={16}>
                <div className="h-full rounded-2xl border border-[#D7E2EA]/[0.12] bg-[#111317] px-5 py-4">
                  <span className="font-mono text-xs text-[#79E0B8]/85">{e.dates}</span>
                  <h3 className="text-[#D7E2EA] font-medium uppercase leading-tight text-base sm:text-lg mt-1.5">
                    {e.degree}
                  </h3>
                  <p className="text-[#D7E2EA]/55 font-light text-sm mt-1 leading-snug">
                    {e.school}
                    {e.note && <span className="text-[#79E0B8]"> · {e.note}</span>}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15} y={16}>
            <ul className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${PILL} border-[#D7E2EA]/25 text-[#D7E2EA]/80 transition-colors duration-200 hover:border-[#79E0B8]/60 hover:text-[#D7E2EA]`}
                    >
                      {c.name}
                      <span aria-hidden="true">&#8599;</span>
                    </a>
                  ) : (
                    <span className={`${PILL} border-dashed border-[#D7E2EA]/25 text-[#D7E2EA]/55`}>
                      {c.name}
                      {c.status && <span className="text-[#79E0B8]/80">({c.status})</span>}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
