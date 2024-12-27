import { useState } from "react";
import { RecipeCard } from "@/components/RecipeCard";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { recipeCollections } from "@/data/collections";
import { useNavigate } from "react-router-dom";

interface Recipe {
  title: string;
  image: string;
  cookingTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  category: string;
}

const recipes: Recipe[] = [
  {
    title: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    cookingTime: "30 mins",
    difficulty: "Easy",
    description: "A traditional Italian pizza with fresh basil, mozzarella, and tomato sauce on a perfectly crispy crust.",
    category: "Dinner"
  },
  {
    title: "Creamy Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
    cookingTime: "45 mins",
    difficulty: "Medium",
    description: "Rich and creamy arborio rice slowly cooked with mushrooms and parmesan cheese.",
    category: "Dinner"
  },
  {
    title: "Fresh Summer Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    cookingTime: "15 mins",
    difficulty: "Easy",
    description: "Light and refreshing salad with mixed greens, cherry tomatoes, and balsamic vinaigrette.",
    category: "Lunch"
  },
  {
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51",
    cookingTime: "25 mins",
    difficulty: "Medium",
    description: "Decadent chocolate cake with a warm, flowing chocolate center.",
    category: "Dessert"
  }
];

const categories = [
  {
    name: "Holiday Series",
    image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5",
  },
  {
    name: "Fall",
    image: "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb",
  },
  {
    name: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
  {
    name: "Casserole",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
  },
];

const quickCategories = [
  { 
    name: "Quick and Easy",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352"
  },
  { 
    name: "Dinner",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554"
  },
  { 
    name: "Vegetarian",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  { 
    name: "Healthy",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061"
  },
  { 
    name: "Vegan",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38"
  },
  { 
    name: "Meal Prep",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  { 
    name: "Soups",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd"
  },
  { 
    name: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recipes?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/recipes?category=${encodeURIComponent(category)}`);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (!searchQuery.trim()) return false;
    
    const search = searchQuery.toLowerCase().trim();
    const searchTerms = search.split(/\s+/); // Split search into terms
    
    // Check if all search terms match any of the recipe fields
    return searchTerms.every(term => 
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) ||
      recipe.category.toLowerCase().includes(term) ||
      (recipe.tags || []).some(tag => tag.toLowerCase().includes(term))
    );
  }).slice(0, 5); // Only show top 5 results

  return (
    <div className="min-h-screen bg-warmWhite">
      {/* Hero Section with Background Image */}
      <header className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-6xl text-white mb-6 leading-tight max-w-4xl mx-auto">
            Simple Recipes Made For Real, Actual, Everyday Life
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-12">
            Discover delicious recipes that bring joy to your kitchen and warmth to your table.
          </p>
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-2xl">
              <SearchBar 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
                placeholder="Search recipes..."
                className="w-full bg-white/90 backdrop-blur-sm"
                onKeyPress={handleKeyPress}
              />
              {/* Search Results Dropdown */}
              {searchQuery.trim() && filteredRecipes.length > 0 && (
                <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {filteredRecipes.map((recipe, index) => (
                    <div
                      key={recipe.title}
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                        index !== filteredRecipes.length - 1 ? 'border-b border-gray-100' : ''
                      }`}
                      onClick={() => {
                        const urlTitle = encodeURIComponent(recipe.title.toLowerCase().replace(/ /g, '-'));
                        setSearchQuery("");
                        navigate(`/recipe/${urlTitle}`);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{recipe.title}</h3>
                          <p className="text-sm text-gray-500 line-clamp-1">
                            {recipe.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Quick Categories - Floating Cards */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="font-serif text-2xl text-olive text-center mb-8">Quick Categories</h2>
            <div className="flex justify-center">
              <div className="flex overflow-x-auto pb-6 max-w-full gap-12 snap-x snap-mandatory scrollbar-hide">
                <div className="flex gap-12 mx-auto">
                  {quickCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryClick(category.name)}
                      className="group text-center flex-none snap-center"
                    >
                      <div className="relative w-24 h-24 mb-3">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-terracotta/20 to-sage/20 group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-2 rounded-full overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        </div>
                      </div>
                      <h3 className="font-serif text-sm text-olive group-hover:text-terracotta transition-colors whitespace-nowrap">
                        {category.name}
                      </h3>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipe of the Week */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl text-olive">Recipe of the Week</h2>
            <Button variant="ghost" className="text-terracotta hover:text-terracotta/90">
              View All Featured →
            </Button>
          </div>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1551183053-bf91a1d81141"
                  alt="Featured Recipe"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-12 space-y-6">
                <span className="inline-block px-4 py-1 rounded-full bg-terracotta/10 text-terracotta text-sm font-medium">
                  Featured
                </span>
                <h3 className="font-serif text-4xl text-olive">Homemade Sourdough Bread</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Master the art of sourdough bread making with our detailed guide. Learn the secrets to achieving that perfect crusty exterior and soft, chewy interior.
                </p>
                <div className="flex items-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">⏰</span>
                    <span>24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">👨‍🍳</span>
                    <span>Advanced</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">⭐</span>
                    <span>4.9 (203 reviews)</span>
                  </div>
                </div>
                <Button className="bg-terracotta text-white hover:bg-terracotta/90 px-8">
                  View Recipe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Collections */}
      <section className="py-24 bg-sage/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl text-olive">Popular Collections</h2>
            <Button variant="ghost" className="text-terracotta hover:text-terracotta/90">
              View All Collections →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipeCollections.map((collection) => (
              <div
                key={collection.name}
                onClick={() => handleCategoryClick(collection.type)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-serif text-xl mb-2">{collection.name}</h3>
                      <p className="text-white/80 text-sm">{collection.recipeCount} recipes</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Recipes */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl text-olive">Trending Recipes</h2>
            <Button variant="ghost" className="text-terracotta hover:text-terracotta/90">
              View All Trending →
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes.slice(0, 6).map((recipe, index) => (
              <div key={recipe.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mb-4">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-olive">
                      {index === 0 && <span className="text-lg">🔥</span>}
                      {index === 1 && <span className="text-lg">⭐</span>}
                      {index === 2 && <span className="text-lg">👨‍🍳</span>}
                      {recipe.difficulty}
                    </span>
                  </div>
                  <div className="absolute inset-x-4 bottom-4">
                    <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white/90">
                      <span className="text-lg">⏰</span>
                      {recipe.cookingTime}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-olive group-hover:text-terracotta transition-colors mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-terracotta/20 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-terracotta/20 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-terracotta/20 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">+28 made this recipe</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/recipes')}
              className="bg-terracotta text-white hover:bg-terracotta/90 px-8 py-6"
            >
              Explore All Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-olive/5">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-olive text-center mb-16">Why Cook With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Cooking Tips */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">👩‍🍳</span>
              </div>
              <h3 className="font-serif text-2xl text-olive mb-4">Expert Tips</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <p className="text-gray-600">Professional chef-curated recipes</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <p className="text-gray-600">Step-by-step video guides</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <p className="text-gray-600">Ingredient substitution tips</p>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="font-serif text-2xl text-olive mb-4">Community</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <p className="text-gray-600">Share your cooking journey</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <p className="text-gray-600">Join cooking challenges</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <p className="text-gray-600">Connect with fellow food lovers</p>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✉️</span>
              </div>
              <h3 className="font-serif text-2xl text-olive mb-4">Weekly Inspiration</h3>
              <p className="text-gray-600 mb-6">Get fresh recipes, cooking tips, and seasonal ingredients delivered to your inbox!</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                />
                <Button className="w-full bg-terracotta text-white hover:bg-terracotta/90 py-6">
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-olive py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-serif text-xl text-white mb-6">About Us</h4>
              <p className="text-white/80">Bringing joy to your kitchen with carefully curated recipes and cooking inspiration.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Categories</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Featured Recipes</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cooking Tips</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl text-white mb-6">Connect</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Pinterest</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl text-white mb-6">Newsletter</h4>
              <p className="text-white/80 mb-4">Subscribe for weekly recipe updates</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button className="w-full bg-white text-olive hover:bg-white/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/80"> 2024 Culinary Delights. All recipes are crafted with love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
