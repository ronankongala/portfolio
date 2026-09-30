import { useEffect, useRef, useState } from 'react';

// Geometry measured from the suspicious base image, as percentages of the image box.
const EYES = [
  { key: 'left',  cx: 45.596, cy: 43.351, spriteW: 8.134, ellCx: 45.295, ellCy: 43.086, ellRx: 4.354, ellRy: 2.698, maxDx: 1.742, maxDy: 0.985, src: 'hero-eye-left.png' },
  { key: 'right', cx: 62.909, cy: 44.695, spriteW: 8.134, ellCx: 63.357, ellCy: 44.444, ellRx: 4.312, ellRy: 2.840, maxDx: 1.725, maxDy: 1.037, src: 'hero-eye-right.png' },
];

const asset = (f: string) => `${import.meta.env.BASE_URL}${f}`;

// Precompute the constants each iris needs.
const EYE_CALC = EYES.map((e) => ({
  ...e,
  neutralLeft: (0.5 + (e.cx - e.ellCx) / (2 * e.ellRx)) * 100, // % of clip box
  neutralTop: (0.5 + (e.cy - e.ellCy) / (2 * e.ellRy)) * 100,
  gazeXRange: (e.maxDx / (2 * e.ellRx)) * 100,
  gazeYRange: (e.maxDy / (2 * e.ellRy)) * 100,
  irisWidth: (e.spriteW / (2 * e.ellRx)) * 100, // % of clip width
}));

export default function HeroAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const irisRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // eyes rest at center

    const clamp = (v: number) => Math.max(-1, Math.min(1, v));

    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const refX = window.innerWidth * 0.35;
      const refY = window.innerHeight * 0.35;
      EYE_CALC.forEach((eye, i) => {
        const iris = irisRefs.current[i];
        if (!iris) return;
        const eyeCX = r.left + (eye.ellCx / 100) * r.width;
        const eyeCY = r.top + (eye.ellCy / 100) * r.height;
        const dx = clamp((e.clientX - eyeCX) / refX);
        const dy = clamp((e.clientY - eyeCY) / refY);
        iris.style.left = `${eye.neutralLeft + dx * eye.gazeXRange}%`;
        iris.style.top = `${eye.neutralTop + dy * eye.gazeYRange}%`;
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', filter: 'drop-shadow(0 26px 55px rgba(0,0,0,0.55))' }}
    >
      {/* Suspicious layer: base with blank eyes + tracking irises */}
      <div style={{ position: 'relative', opacity: hovered ? 0 : 1, transition: 'opacity 0.25s ease' }}>
        <img src={asset('hero-suspicious-base.png')} alt="" draggable={false} className="block w-full h-auto select-none" />
        {EYE_CALC.map((eye, i) => (
          <div
            key={eye.key}
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: `${eye.ellCx}%`,
              top: `${eye.ellCy}%`,
              width: `${eye.ellRx * 2}%`,
              height: `${eye.ellRy * 2}%`,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              overflow: 'hidden',
              pointerEvents: 'none',
            }}
          >
            <img
              ref={(el) => (irisRefs.current[i] = el)}
              src={asset(eye.src)}
              alt=""
              draggable={false}
              style={{
                position: 'absolute',
                width: `${eye.irisWidth}%`,
                height: 'auto',
                left: `${eye.neutralLeft}%`,
                top: `${eye.neutralTop}%`,
                transform: 'translate(-50%, -50%)',
                transition: 'left 0.12s ease-out, top 0.12s ease-out',
              }}
            />
          </div>
        ))}
      </div>

      {/* Calm photo, revealed on hover */}
      <img
        src={asset('ronan-hero.png')}
        alt="Ronan Kongala"
        draggable={false}
        className="block w-full h-auto select-none"
        style={{ position: 'absolute', inset: 0, opacity: hovered ? 1 : 0, transition: 'opacity 0.25s ease' }}
      />
    </div>
  );
}
