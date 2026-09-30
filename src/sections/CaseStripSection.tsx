import { CASE_FILES } from '../data/profile';
import FadeIn from '../components/FadeIn';

function CaseTile({ item }: { item: (typeof CASE_FILES)[number] }) {
  return (
    <a
      href={item.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full rounded-xl border border-[#D7E2EA]/[0.12] bg-[#111317] px-4 py-3.5 flex flex-col gap-2 transition-colors duration-200 hover:border-[#79E0B8]/50 hover:bg-[#13171b]"
    >
      <span className="flex items-center justify-between font-mono text-[0.65rem] tracking-widest text-[#79E0B8]/80">
        {item.id}
        <span className="text-[#D7E2EA]/0 group-hover:text-[#D7E2EA]/60 transition-colors" aria-hidden="true">
          &#8599;
        </span>
      </span>
      <h3 className="text-[#D7E2EA] font-medium text-sm sm:text-base leading-snug">{item.name}</h3>
      <p className="mt-auto font-mono text-[0.65rem] text-[#D7E2EA]/40 truncate">{item.tags.join(' · ')}</p>
    </a>
  );
}

export default function CaseStripSection() {
  return (
    <section
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 md:pt-40 pb-10"
      aria-label={`Case file index, ${CASE_FILES.length} security builds linking to GitHub`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
          <p className="font-mono text-xs tracking-[0.3em] text-[#D7E2EA]/40 uppercase">
            Case file index // {CASE_FILES.length} builds
          </p>
          <p className="font-mono text-xs text-[#79E0B8]/80">Every file opens its GitHub repo. No screenshots, just the receipts.</p>
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
