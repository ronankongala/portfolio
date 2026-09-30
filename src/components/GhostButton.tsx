type GhostButtonProps = {
  href?: string;
  label?: string;
  external?: boolean;
};

export default function GhostButton({
  href = '#',
  label = 'View repository',
  external = true,
}: GhostButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-block shrink-0 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      {label}
    </a>
  );
}
