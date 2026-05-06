interface TagPillProps {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}

export function TagPill({ tag, active = false, onClick }: TagPillProps) {
  const className = active
    ? "border-brass bg-brass/20 text-bone"
    : "border-bone/15 bg-bone/5 text-bone/70 hover:border-brass/60 hover:text-bone";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`rounded-full border px-3 py-1 text-xs transition ${className}`}
      >
        {tag}
      </button>
    );
  }

  return <span className={`rounded-full border px-3 py-1 text-xs ${className}`}>{tag}</span>;
}
