type SignalPanelProps = {
  title: string;
  lines: string[];
};

// A stylized terminal readout used in place of project screenshots.
export default function SignalPanel({ title, lines }: SignalPanelProps) {
  return (
    <div className="h-full w-full rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/15 bg-[#111317] overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#D7E2EA]/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[0.7rem] sm:text-xs text-[#D7E2EA]/45 truncate">
          {title}
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-4 px-5 sm:px-7 py-6">
        {lines.map((line, i) => (
          <div key={i} className="flex items-start gap-3 font-mono">
            <span className="text-[#79E0B8] text-sm sm:text-base leading-none pt-1">&#10095;</span>
            <span
              className="text-[#D7E2EA] leading-snug"
              style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
            >
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
