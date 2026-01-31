import { cn } from "@/lib/utils";

interface Category {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kategoriju filtrs">
      {categories.map((category) => (
        <button
          key={category.id}
          role="tab"
          aria-selected={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "chip transition-all",
            activeCategory === category.id
              ? "chip-active"
              : "chip-secondary hover:bg-primary/10"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
