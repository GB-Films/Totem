interface CategoryBadgeProps {
  category: string;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-copper/40 bg-copper/10 px-3 py-1 text-xs font-medium text-bone">
      {category}
    </span>
  );
}
