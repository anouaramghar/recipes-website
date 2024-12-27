export interface RecipeCollection {
  name: string;
  image: string;
  recipeCount: number;
  type: string;
}

export const recipeCollections: RecipeCollection[] = [
  {
    name: "Vegan Recipes",
    image: "https://images.unsplash.com/photo-1540914124281-342587941389",
    recipeCount: 127,
    type: "vegan"
  },
  {
    name: "Meal Prep Recipes",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    recipeCount: 54,
    type: "meal-prep"
  },
  {
    name: "Quick and Easy Recipes",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352",
    recipeCount: 428,
    type: "quick-and-easy"
  },
  {
    name: "Pasta Recipes",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    recipeCount: 89,
    type: "pasta"
  },
  {
    name: "Soup Recipes",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    recipeCount: 95,
    type: "soup"
  },
  {
    name: "Most Popular Recipes",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    recipeCount: 85,
    type: "most-popular"
  }
];
