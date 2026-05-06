interface CategoryBadgeProps {
  category: string;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-gabinete-line/45 bg-gabinete-paperLight/24 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-gabinete-brown">
      {category}
    </span>
  );
}
