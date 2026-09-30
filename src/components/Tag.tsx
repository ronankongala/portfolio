export default function Tag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 font-mono text-[0.68rem] sm:text-xs tracking-wide ${
        dark
          ? 'border-[#0C0C0C]/20 text-[#0C0C0C]/70'
          : 'border-[#D7E2EA]/25 text-[#D7E2EA]/75'
      }`}
    >
      {label}
    </span>
  );
}
