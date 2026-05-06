interface TagPillProps {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}

export function TagPill({ tag, active = false, onClick }: TagPillProps) {
  const className = active ? "tag-pill tag-pill-active" : "tag-pill hover:border-gabinete-brown";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${className} px-3 py-1.5`}>
        {tag}
      </button>
    );
  }

  return <span className={`${className} inline-flex px-3 py-1.5`}>{tag}</span>;
}
