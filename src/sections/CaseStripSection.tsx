import { useEffect, useRef, useState } from 'react';
import { CASE_FILES } from '../data/profile';
import Tag from '../components/Tag';

const HALF = Math.ceil(CASE_FILES.length / 2);
const ROW_ONE = CASE_FILES.slice(0, HALF);
const ROW_TWO = CASE_FILES.slice(HALF);

const trip = <T,>(arr: T[]) => [...arr, ...arr, ...arr];

function CaseTile({ item }: { item: (typeof CASE_FILES)[number] }) {
  return (
    <a
      href={item.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-[320px] h-[190px] shrink-0 rounded-2xl border border-[#D7E2EA]/12 bg-[#111317] p-6 flex flex-col justify-between transition-colors duration-200 hover:border-[#D7E2EA]/35"
    >
      <div>
        <span className="font-mono text-xs tracking-widest text-[#79E0B8]/80">{item.id}</span>
        <h3 className="text-[#D7E2EA] font-medium text-xl sm:text-2xl leading-tight mt-2 group-hover:opacity-90">
          {item.name}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </a>
  );
}

export default function CaseStripSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-4"
      aria-label="Case file index, 24 security builds linking to GitHub"
    >
      <div className="px-6 md:px-10 mb-2">
        <p className="font-mono text-xs tracking-[0.3em] text-[#D7E2EA]/40 uppercase">
          Case file index // 24 builds
        </p>
      </div>
      <div
        className="flex gap-4 w-max"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {trip(ROW_ONE).map((item, i) => (
          <CaseTile key={`r1-${i}`} item={item} />
        ))}
      </div>
      <div
        className="flex gap-4 w-max"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
      >
        {trip(ROW_TWO).map((item, i) => (
          <CaseTile key={`r2-${i}`} item={item} />
        ))}
      </div>
    </section>
  );
}
