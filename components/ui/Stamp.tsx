type StampProps = {
  label: string;
  meta?: string;
  rotation?: number;
  variant?: 'drk' | 'henry';
  className?: string;
};

export default function Stamp({
  label,
  meta,
  rotation = -4,
  variant = 'drk',
  className,
}: StampProps) {
  const color = variant === 'drk' ? 'var(--drk)' : 'var(--henry, var(--drk))';
  return (
    <div
      className={['drk-stamp', className].filter(Boolean).join(' ')}
      style={{ transform: `rotate(${rotation}deg)`, color }}
    >
      <span className="drk-stamp__label" style={{ borderColor: color }}>
        {label}
      </span>
      {meta ? <span className="drk-stamp__meta">{meta}</span> : null}
    </div>
  );
}
