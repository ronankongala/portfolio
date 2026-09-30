type ArrowButtonProps = { label: string; flip?: boolean; onClick: () => void };

export default function ArrowButton({ label, flip, onClick }: ArrowButtonProps) {
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
