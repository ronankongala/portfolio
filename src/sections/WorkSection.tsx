import { useRef } from 'react';
import ArrowButton from '../components/ArrowButton';
import FadeIn from '../components/FadeIn';
import Tag from '../components/Tag';
import { WORK, WorkCard } from '../data/profile';

function ProjectCard({ card }: { card: WorkCard }) {
  return (
    <article className="snap-start shrink-0 w-[82vw] max-w-[340px] sm:w-[340px] rounded-3xl border border-[#D7E2EA]/20 bg-[#111317] p-5 sm:p-6 flex flex-col gap-4 transition-colors duration-200 hover:border-[#D7E2EA]/45">
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono font-black text-[#D7E2EA] leading-none text-4xl">{card.number}</span>
        <a
          href={card.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#D7E2EA]/40 px-3 py-1.5 font-mono text-[0.65rem] tracking-widest uppercase text-[#D7E2EA]/85 transition-colors duration-200 hover:bg-[#D7E2EA]/10"
        >
          Repo &#8599;
        </a>
      </div>
      <div>
        <span className="text-[#79E0B8]/80 font-mono text-[0.7rem] tracking-wide">{card.category}</span>
        <h3 className="text-[#D7E2EA] font-medium uppercase leading-tight text-lg mt-1">{card.name}</h3>
      </div>
      <p className="text-[#D7E2EA]/70 font-light leading-relaxed text-sm line-clamp-4">{card.description}</p>
      <ul className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] px-4 py-3 flex flex-col gap-1.5">
        {card.stats.map((s) => (
          <li key={s} className="flex items-start gap-2 font-mono text-xs text-[#D7E2EA]">
            <span className="text-[#79E0B8]" aria-hidden="true">
              &#10095;
            </span>
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {card.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </article>
  );
}

export default function WorkSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const step = (sign: 1 | -1) => {
    const rail = railRef.current;
    const card = rail?.querySelector('article');
    if (!rail || !card) return;
    rail.scrollBy({ left: sign * (card.getBoundingClientRect().width + 16), behavior: 'smooth' });
  };

  return (
    <section id="work" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 pb-24">
      <div className="max-w-7xl mx-auto">
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
          className="text-center text-[#D7E2EA]/50 font-light mb-10 sm:mb-12"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
        >
          {WORK.length} flagship builds, each backed by numbers.
        </FadeIn>

        <div className="flex items-center justify-between gap-4 mb-4">
          <p className="font-mono text-xs sm:text-sm text-[#79E0B8]/80 flex items-center gap-2">
            Swipe for the next case
            <span className="inline-block motion-safe:animate-nudge" aria-hidden="true">
              &rarr;
            </span>
          </p>
          <div className="flex gap-2 shrink-0">
            <ArrowButton label="Previous project" flip onClick={() => step(-1)} />
            <ArrowButton label="Next project" onClick={() => step(1)} />
          </div>
        </div>

        <div
          ref={railRef}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
          aria-label="Selected work, swipe horizontally"
        >
          {WORK.map((card) => (
            <ProjectCard key={card.number} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
