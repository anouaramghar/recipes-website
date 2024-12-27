import { useParams, Link } from "react-router-dom";
import { Clock, ChefHat, Users, Printer, Share2, BookmarkPlus, Timer, Utensils, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { recipes } from "@/data/recipes";
import { useToast } from "@/hooks/use-toast";

export const RecipeDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const recipe = recipes.find(r => encodeURIComponent(r.title.toLowerCase().replace(/ /g, '-')) === id);

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-serif text-olive">Recipe not found</h1>
      </div>
    );
  }

  const handleSave = () => {
    toast({
      title: "Recipe Saved!",
      description: `${recipe.title} has been added to your favorites.`,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Recipe link has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-warmWhite pb-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="font-serif text-4xl text-white mb-4">{recipe.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Timer size={18} />
                <span>Prep: {recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>Total: {recipe.totalTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat size={18} />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>Serves {recipe.servings}</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils size={18} />
                <span>{recipe.calories} cal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-8 relative">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-warmWhite rounded-lg">
            <span className="text-olive font-medium">Jump to:</span>
            <a href="#ingredients" className="text-terracotta hover:underline">Ingredients</a>
            <a href="#instructions" className="text-terracotta hover:underline">Instructions</a>
            <a href="#nutrition" className="text-terracotta hover:underline">Nutrition</a>
            {recipe.tips && <a href="#tips" className="text-terracotta hover:underline">Tips</a>}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mb-8">
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer size={16} className="mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave}>
              <BookmarkPlus size={16} className="mr-2" />
              Save
            </Button>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-lg">{recipe.description}</p>

          {/* Tags */}
          {recipe.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {recipe.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-sm"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Nutrition Facts */}
          {recipe.nutritionFacts && (
            <div id="nutrition" className="mb-12 p-6 bg-warmWhite rounded-lg">
              <h2 className="font-serif text-2xl text-olive mb-4">Nutrition Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-semibold text-terracotta">{recipe.nutritionFacts.calories}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-semibold text-terracotta">{recipe.nutritionFacts.protein}g</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-semibold text-terracotta">{recipe.nutritionFacts.carbs}g</div>
                  <div className="text-sm text-gray-600">Carbs</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-semibold text-terracotta">{recipe.nutritionFacts.fat}g</div>
                  <div className="text-sm text-gray-600">Fat</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-semibold text-terracotta">{recipe.nutritionFacts.fiber}g</div>
                  <div className="text-sm text-gray-600">Fiber</div>
                </div>
              </div>
            </div>
          )}

          {/* Ingredients */}
          <div id="ingredients" className="mb-12">
            <h2 className="font-serif text-2xl text-olive mb-4">Ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-terracotta/60" />
                  {ingredient}
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div id="instructions" className="mb-12">
            <h2 className="font-serif text-2xl text-olive mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4 text-gray-600">
                  <span className="font-serif text-terracotta">{index + 1}.</span>
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Tips */}
          {recipe.tips && (
            <div id="tips" className="bg-warmWhite rounded-lg p-6">
              <h2 className="font-serif text-2xl text-olive mb-4">Tips</h2>
              <ul className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-terracotta">•</span>
                    <p>{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Similar Recipes */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-olive mb-6">Similar Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recipes
                .filter(r => r.category === recipe.category && r.title !== recipe.title)
                .slice(0, 3)
                .map((similarRecipe, index) => (
                  <Link
                    key={index}
                    to={`/recipe/${encodeURIComponent(similarRecipe.title.toLowerCase().replace(/ /g, '-'))}`}
                    className="group"
                  >
                    <div className="relative h-48 mb-3 overflow-hidden rounded-lg">
                      <img
                        src={similarRecipe.image}
                        alt={similarRecipe.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-olive group-hover:text-terracotta transition-colors">
                      {similarRecipe.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mt-2">
                      <Clock size={16} />
                      <span>{similarRecipe.totalTime}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
