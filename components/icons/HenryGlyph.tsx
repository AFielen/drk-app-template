type Props = { size?: number; className?: string };

export default function HenryGlyph({ size = 24, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 4v16" />
      <path d="M19 4v16" />
      <path d="M5 12h14" />
      <path d="M12 10.5v3" />
    </svg>
  );
}
