import { useState } from 'react';
import { CASE_FILES } from '../data/profile';
import FadeIn from '../components/FadeIn';

type Case = (typeof CASE_FILES)[number];

// Both faces share one grid cell, so the card is as tall as its taller face and never clips.
const FACE =
  'col-start-1 row-start-1 rounded-xl border bg-[#111317] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]';

function FlipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.6M20 4v4.6h-4.6M20 12a8 8 0 0 1-13.7 5.7L4 15.4M4 20v-4.6h4.6" />
    </svg>
  );
}

function FlipButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      tabIndex={active ? 0 : -1}
      onClick={onClick}
      className="w-7 h-7 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/60 flex items-center justify-center transition-colors duration-200 hover:border-[#79E0B8]/70 hover:text-[#79E0B8]"
    >
      <FlipIcon />
    </button>
  );
}

function CaseTile({ item }: { item: Case }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="h-full [perspective:900px]">
      <div
        className={`grid h-full transition-transform duration-500 ease-out motion-reduce:transition-none [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front: the whole card opens the repo; the corner button flips it. */}
        <div
          className={`${FACE} relative border-[#D7E2EA]/[0.12] transition-colors duration-200 hover:border-[#79E0B8]/50`}
          aria-hidden={flipped}
        >
          <a
            href={item.repo}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={flipped ? -1 : 0}
            className="h-full rounded-xl px-4 py-3.5 flex flex-col gap-2"
          >
            <span className="font-mono text-[0.65rem] tracking-widest text-[#79E0B8]/80 pr-8">{item.id}</span>
            <h3 className="text-[#D7E2EA] font-medium text-sm sm:text-base leading-snug">{item.name}</h3>
            <p className="mt-auto font-mono text-[0.65rem] text-[#D7E2EA]/40 truncate">{item.tags.join(' · ')}</p>
          </a>
          <div className="absolute top-2 right-2">
            <FlipButton label={`Show summary of ${item.name}`} active={!flipped} onClick={() => setFlipped(true)} />
          </div>
        </div>

        {/* Back: short summary, repo link, and a button to flip back. */}
        <div
          className={`${FACE} [transform:rotateY(180deg)] border-[#79E0B8]/40 px-4 py-3.5 flex flex-col gap-2`}
          aria-hidden={!flipped}
        >
          <div className="flex items-start justify-between gap-2">
            <span className="font-mono text-[0.65rem] tracking-widest text-[#79E0B8]/80 pt-1">{item.id}</span>
            <FlipButton label={`Back to ${item.name}`} active={flipped} onClick={() => setFlipped(false)} />
          </div>
          <p className="text-[#D7E2EA]/80 font-light text-[0.72rem] sm:text-xs leading-snug">{item.summary}</p>
          <a
            href={item.repo}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={flipped ? 0 : -1}
            className="mt-auto self-start font-mono text-[0.65rem] tracking-wide text-[#79E0B8] hover:underline"
          >
            Open repo &#8599;
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CaseStripSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-4 pb-12"
      aria-label={`Case file index, ${CASE_FILES.length} security builds linking to GitHub`}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-12"
          style={{ fontSize: 'clamp(2.85rem, 11.4vw, 152px)' }}
        >
          Projects
        </FadeIn>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
          <p className="font-mono text-xs tracking-[0.3em] text-[#D7E2EA]/40 uppercase">
            Case file index // {CASE_FILES.length} builds
          </p>
          <p className="font-mono text-xs text-[#79E0B8]/80">
            Click a file to open its repo, or flip it for the short version.
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2.5 sm:gap-3">
          {CASE_FILES.map((item, i) => (
            <li key={item.id}>
              <FadeIn y={16} delay={(i % 6) * 0.04} duration={0.5} className="h-full">
                <CaseTile item={item} />
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
