import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = { children: ReactNode; maxTilt?: number; perspective?: number };

export default function CursorTilt({ children, maxTilt = 14, perspective = 900 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const clamp = (v: number) => Math.max(-1, Math.min(1, v));
      const dx = clamp((e.clientX - cx) / (window.innerWidth / 2));
      const dy = clamp((e.clientY - cy) / (window.innerHeight / 2));
      setT({ ry: dx * maxTilt, rx: -dy * maxTilt });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [maxTilt]);
  return (
    <div
      ref={ref}
      style={{
        transform: `perspective(${perspective}px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
