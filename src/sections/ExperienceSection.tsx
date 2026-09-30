import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import { EXPERIENCE, Role } from '../data/profile';

// Numbers like 22,000+ / 27-day / 30% get the accent color. Skips standard IDs such as ISO 9001:2015.
const NUMBER = /((?<!ISO |:)\b\d[\d,]*(?:\+|%)?(?:-(?:day|hour))?(?![\d:]))/g;

function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split(NUMBER).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-[#79E0B8] font-normal">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

function Node({ current }: { current?: boolean }) {
  return (
    <span className="absolute left-0 md:left-[220px] top-2 -translate-x-1/2 flex items-center justify-center w-4 h-4">
      {current && (
        <span className="absolute inline-flex w-full h-full rounded-full bg-[#79E0B8] opacity-60 motion-safe:animate-ping" />
      )}
      <motion.span
        className="relative w-3 h-3 rounded-full border-2 border-[#79E0B8]"
        initial={{ backgroundColor: 'rgba(121,224,184,0)', scale: 0.6 }}
        whileInView={{ backgroundColor: 'rgba(121,224,184,1)', scale: 1 }}
        viewport={{ once: true, margin: '0px 0px -45% 0px' }}
        transition={{ duration: 0.35 }}
      />
    </span>
  );
}

function Entry({ item, index }: { item: Role; index: number }) {
  return (
    <li className="relative pl-8 md:pl-0 md:grid md:grid-cols-[220px_1fr] pb-14 sm:pb-16 last:pb-0">
      <Node current={item.current} />
      <FadeIn x={-20} y={0} delay={0.05} className="md:pr-10 md:text-right mb-3 md:mb-0">
        <span className="font-mono text-xs sm:text-sm tracking-wide text-[#79E0B8]/85">{item.date}</span>
        <span className="block font-mono text-[0.68rem] text-[#D7E2EA]/30 mt-1">
          log.{String(EXPERIENCE.length - index).padStart(2, '0')}
        </span>
      </FadeIn>
      <FadeIn delay={0.1} className="md:pl-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-10">
          <div className="flex-1 min-w-0">
            <h3
              className="text-[#D7E2EA] font-medium uppercase leading-tight"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.8rem)' }}
            >
              {item.role}
              {item.current && (
                <span className="ml-3 align-middle inline-block rounded-full border border-[#79E0B8]/50 px-2.5 py-0.5 font-mono text-[0.65rem] tracking-widest text-[#79E0B8]">
                  NOW
                </span>
              )}
            </h3>
            <p className="text-[#D7E2EA]/50 font-light mt-1 text-sm sm:text-base">{item.org}</p>
            <p
              className="text-[#D7E2EA]/75 font-light leading-relaxed mt-4 max-w-2xl"
              style={{ fontSize: 'clamp(0.92rem, 1.4vw, 1.08rem)' }}
            >
              <Highlighted text={item.desc} />
            </p>
          </div>
          {item.stat && (
            <div className="shrink-0 lg:w-[200px] rounded-2xl border border-[#D7E2EA]/[0.12] bg-[#111317] px-5 py-4">
              <span className="block font-mono text-[#D7E2EA] leading-none" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                {item.stat.value}
              </span>
              <span className="block font-mono text-xs text-[#D7E2EA]/45 mt-2">{item.stat.label}</span>
            </div>
          )}
        </div>
      </FadeIn>
    </li>
  );
}

export default function ExperienceSection() {
  const listRef = useRef<HTMLOListElement>(null);
  // The accent line draws down the timeline as the visitor scrolls through it.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 60%', 'end 55%'] });

  return (
    <section id="experience" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 pb-32 sm:pb-40">
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>
      <FadeIn
        delay={0.1}
        className="text-center text-[#D7E2EA]/50 font-light mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        {EXPERIENCE.length} entries in the log, newest first. Keep scrolling to trace it back.
      </FadeIn>

      <div className="relative max-w-6xl mx-auto">
        <span className="absolute left-0 md:left-[220px] top-2 bottom-2 w-px bg-[#D7E2EA]/[0.12]" aria-hidden="true" />
        <motion.span
          className="absolute left-0 md:left-[220px] top-2 bottom-2 w-px bg-[#79E0B8] origin-top"
          style={{ scaleY: scrollYProgress }}
          aria-hidden="true"
        />
        <ol ref={listRef} className="relative">
          {EXPERIENCE.map((item, i) => (
            <Entry key={`${item.org}-${item.date}`} item={item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
