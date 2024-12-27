import { Button } from "./ui/button";

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Vegetarian"];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 my-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className="bg-terracotta text-warmWhite hover:bg-terracotta/90"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};