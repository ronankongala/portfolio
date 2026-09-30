import { animate } from 'framer-motion';
import { PointerEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { CASE_FILES } from '../data/profile';
import Tag from '../components/Tag';

const HALF = Math.ceil(CASE_FILES.length / 2);
const ROW_ONE = CASE_FILES.slice(0, HALF);
const ROW_TWO = CASE_FILES.slice(HALF);

const trip = <T,>(arr: T[]) => [...arr, ...arr, ...arr];
const mod = (v: number, m: number) => ((v % m) + m) % m;

// Card width (320) plus the gap-4 between cards, used by the arrow buttons.
const STEP = 336;
const DRAG_THRESHOLD = 6;

function CaseTile({ item }: { item: (typeof CASE_FILES)[number] }) {
  return (
    <a
      href={item.repo}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
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

type RowProps = {
  items: (typeof CASE_FILES)[number][];
  dir: 1 | -1;
  offset: number;
  nudge: number;
  onNudge: (next: number) => void;
};

// One looping row. Position = scroll parallax + whatever the visitor dragged, wrapped
// inside the tripled list so it never runs out of cards in either direction.
function Row({ items, dir, offset, nudge, onNudge }: RowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const drag = useRef({ active: false, moved: false, startX: 0, startNudge: 0, id: 0 });
  const nudgeRef = useRef(nudge);
  nudgeRef.current = nudge;

  useLayoutEffect(() => {
    const measure = () => trackRef.current && setSetWidth(trackRef.current.scrollWidth / 3);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Trackpad sideways swipes and shift+wheel move the row; a plain vertical wheel still scrolls the page.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      onNudge(nudgeRef.current - e.deltaX);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [onNudge]);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    drag.current = { active: true, moved: false, startX: e.clientX, startNudge: nudge, id: e.pointerId };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > DRAG_THRESHOLD) {
      d.moved = true;
      trackRef.current?.setPointerCapture(d.id);
    }
    if (d.moved) onNudge(d.startNudge + dx);
  };
  const endDrag = () => {
    drag.current.active = false;
  };

  const raw = dir * (offset - 200) + nudge;
  const x = setWidth ? -2 * setWidth + mod(raw, setWidth) : 0;

  return (
    <div
      ref={trackRef}
      className="flex gap-4 w-max select-none touch-pan-y cursor-grab active:cursor-grabbing"
      style={{ transform: `translateX(${x}px)`, willChange: 'transform' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={(e) => {
        // A drag that ends over a card should not open its repo.
        if (drag.current.moved) {
          e.preventDefault();
          e.stopPropagation();
          drag.current.moved = false;
        }
      }}
    >
      {trip(items).map((item, i) => (
        <CaseTile key={`${item.id}-${i}`} item={item} />
      ))}
    </div>
  );
}

function ArrowButton({ label, flip, onClick }: { label: string; flip?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA]/80 flex items-center justify-center transition-colors duration-200 hover:border-[#D7E2EA]/60 hover:text-[#D7E2EA]"
    >
      <svg
        viewBox="0 0 24 24"
        className={`w-4 h-4 ${flip ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

const EDGE_FADE = 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)';

export default function CaseStripSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [nudgeOne, setNudgeOne] = useState(0);
  const [nudgeTwo, setNudgeTwo] = useState(0);

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

  // The arrows slide both rows one card, content moving left on "next".
  const step = (sign: 1 | -1) => {
    const opts = { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const };
    animate(nudgeOne, nudgeOne - sign * STEP, { ...opts, onUpdate: setNudgeOne });
    animate(nudgeTwo, nudgeTwo - sign * STEP, { ...opts, onUpdate: setNudgeTwo });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-4"
      aria-label={`Case file index, ${CASE_FILES.length} security builds linking to GitHub`}
    >
      <div className="px-6 md:px-10 mb-2 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs tracking-[0.3em] text-[#D7E2EA]/40 uppercase">
            Case file index // {CASE_FILES.length} builds
          </p>
          <p className="font-mono text-xs sm:text-sm text-[#79E0B8]/80 flex items-center gap-2">
            <span className="hidden sm:inline">Drag, swipe, or shift-scroll to dig through the evidence</span>
            <span className="sm:hidden">Swipe for more evidence</span>
            <span className="inline-block motion-safe:animate-nudge" aria-hidden="true">
              &rarr;
            </span>
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <ArrowButton label="Previous case files" flip onClick={() => step(-1)} />
          <ArrowButton label="Next case files" onClick={() => step(1)} />
        </div>
      </div>
      <div
        className="flex flex-col gap-4 overflow-hidden"
        style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
      >
        <Row items={ROW_ONE} dir={1} offset={offset} nudge={nudgeOne} onNudge={setNudgeOne} />
        <Row items={ROW_TWO} dir={-1} offset={offset} nudge={nudgeTwo} onNudge={setNudgeTwo} />
      </div>
      <p className="px-6 md:px-10 font-mono text-xs text-[#D7E2EA]/35">
        Every file opens its GitHub repo. No screenshots, just the receipts.
      </p>
    </section>
  );
}
