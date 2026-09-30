import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import GhostButton from '../components/GhostButton';
import SignalPanel from '../components/SignalPanel';
import Tag from '../components/Tag';
import { CASE_FILES, WORK, WorkCard } from '../data/profile';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

type CardProps = {
  card: WorkCard;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

function ProjectCard({ card, index, progress, range, targetScale }: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[88vh] sticky top-24 md:top-32">
      <motion.article
        className={`relative origin-top ${RADIUS} border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9`}
        style={{ scale, top: `${index * 28}px` }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-end gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA] font-mono"
              style={{ fontSize: 'clamp(2.6rem, 9vw, 130px)' }}
            >
              {card.number}
            </span>
            <div className="flex flex-col gap-1.5 pb-1 sm:pb-2">
              <span className="text-[#79E0B8]/80 font-mono text-xs sm:text-sm tracking-wide">
                {card.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.3rem)' }}
              >
                {card.name}
              </h3>
            </div>
          </div>
          <GhostButton href={card.repo} label="View repository" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-5 sm:gap-6">
          <div className="flex flex-col justify-between gap-6">
            <p
              className="text-[#D7E2EA]/80 font-light leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.3rem)' }}
            >
              {card.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {card.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>
          <div className="min-h-[220px] sm:min-h-[260px]">
            <SignalPanel title={`${card.repo.split('/').pop()} // signal`} lines={card.stats} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="work"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Selected work
      </FadeIn>
      <FadeIn
        delay={0.1}
        className="text-center text-[#D7E2EA]/50 font-light mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        Four flagship builds. The full index of {CASE_FILES.length} is in the strip above.
      </FadeIn>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {WORK.map((card, i) => {
          const targetScale = 1 - (WORK.length - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={card.number}
              card={card}
              index={i}
              progress={scrollYProgress}
              range={[i / WORK.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
