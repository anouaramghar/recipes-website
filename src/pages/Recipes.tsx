import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { recipes, recipeCategories } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { SearchBar } from "@/components/SearchBar";
import { Clock, ChefHat, Star, Filter, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = ["All", ...new Set(recipes.map(recipe => recipe.category))];
const difficulties = ["All", "Easy", "Medium", "Hard"];

const Recipes = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const searchFromUrl = searchParams.get("search");
  const [searchQuery, setSearchQuery] = useState(searchFromUrl || "");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl || "All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("newest");
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update selected category and search when URL parameters change
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [categoryFromUrl, searchFromUrl]);

  // Update URL when search query changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    
    // Update URL with search parameter
    const newSearchParams = new URLSearchParams(searchParams);
    if (newQuery) {
      newSearchParams.set("search", newQuery);
    } else {
      newSearchParams.delete("search");
    }
    navigate(`?${newSearchParams.toString()}`);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    // Search matching
    let matchesSearch = true;
    if (searchQuery.trim()) {
      const search = searchQuery.toLowerCase().trim();
      const searchTerms = search.split(/\s+/); // Split search into terms
      
      matchesSearch = searchTerms.every(term => 
        recipe.title.toLowerCase().includes(term) ||
        recipe.description.toLowerCase().includes(term) ||
        recipe.category.toLowerCase().includes(term) ||
        (recipe.tags || []).some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Category matching
    let matchesCategory = selectedCategory === "All";
    if (!matchesCategory) {
      matchesCategory = recipe.category.toLowerCase() === selectedCategory.toLowerCase();
    }

    // Difficulty matching
    const matchesDifficulty = selectedDifficulty === "All" || recipe.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  }).sort((a, b) => {
    switch (sortBy) {
      case "prep-time":
        return (parseInt(a.prepTime) || 0) - (parseInt(b.prepTime) || 0);
      case "difficulty":
        const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      case "calories":
        return (a.calories || 0) - (b.calories || 0);
      default: // "newest"
        return -1; // Keep original order
    }
  });

  const featuredRecipe = recipes[0];

  const handleFeaturedClick = () => {
    const urlTitle = encodeURIComponent(featuredRecipe.title.toLowerCase().replace(/ /g, '-'));
    navigate(`/recipe/${urlTitle}`);
  };

  const handleRecipeClick = (recipe) => {
    const urlTitle = encodeURIComponent(recipe.title.toLowerCase().replace(/ /g, '-'));
    navigate(`/recipe/${urlTitle}`);
  };

  return (
    <div className="min-h-screen bg-warmWhite/30">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-olive mb-4">Our Recipe Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of delicious recipes. From quick weeknight dinners to impressive dinner party dishes,
            find the perfect recipe for any occasion.
          </p>
        </div>

        {/* Search and Filters Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <SearchBar
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search recipes..."
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t">
            <span className="text-sm text-gray-600">Sort by:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSortBy("newest")}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  sortBy === "newest"
                    ? 'bg-terracotta text-white'
                    : 'bg-warmWhite hover:bg-warmWhite/80 text-gray-700'
                }`}
              >
                Newest
              </button>
              <button
                onClick={() => setSortBy("prep-time")}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  sortBy === "prep-time"
                    ? 'bg-terracotta text-white'
                    : 'bg-warmWhite hover:bg-warmWhite/80 text-gray-700'
                }`}
              >
                Prep Time
              </button>
              <button
                onClick={() => setSortBy("difficulty")}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  sortBy === "difficulty"
                    ? 'bg-terracotta text-white'
                    : 'bg-warmWhite hover:bg-warmWhite/80 text-gray-700'
                }`}
              >
                Difficulty
              </button>
              <button
                onClick={() => setSortBy("calories")}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  sortBy === "calories"
                    ? 'bg-terracotta text-white'
                    : 'bg-warmWhite hover:bg-warmWhite/80 text-gray-700'
                }`}
              >
                Calories
              </button>
            </div>
          </div>
        </div>

        {/* Featured Recipe */}
        <div 
          className="mb-12 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={handleFeaturedClick}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] overflow-hidden group">
              <img
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-sm font-medium">
                  Featured Recipe
                </span>
                {featuredRecipe.category && (
                  <span className="bg-olive/10 text-olive px-3 py-1 rounded-full text-sm font-medium">
                    {featuredRecipe.category}
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-serif text-olive mb-4">{featuredRecipe.title}</h2>
              <p className="text-gray-600 mb-6">{featuredRecipe.description}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {featuredRecipe.prepTime && (
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Prep: {featuredRecipe.prepTime}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <ChefHat size={16} />
                  <span>{featuredRecipe.difficulty}</span>
                </div>
                {featuredRecipe.servings && (
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>Serves {featuredRecipe.servings}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <div key={index} className="cursor-pointer" onClick={() => handleRecipeClick(recipe)}>
              <RecipeCard
                title={recipe.title}
                image={recipe.image}
                cookingTime={recipe.cookingTime}
                prepTime={recipe.prepTime}
                totalTime={recipe.totalTime}
                difficulty={recipe.difficulty}
                description={recipe.description}
                category={recipe.category}
                servings={recipe.servings}
                calories={recipe.calories}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-serif text-olive mb-2">No recipes found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedDifficulty("All");
                  setSortBy("newest");
                }}
                className="text-terracotta hover:text-terracotta/80 font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;