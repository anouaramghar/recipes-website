import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { 
  Clock, 
  ChefHat, 
  BookmarkPlus, 
  Users, 
  Timer,
  Gauge,
  Utensils,
  Flame,
  CalendarClock
} from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface RecipeCardProps {
  title: string;
  image: string;
  cookingTime: string;
  prepTime?: string;
  totalTime?: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  category?: string;
  servings?: number;
  calories?: number;
}

export const RecipeCard = ({ 
  title, 
  image, 
  cookingTime, 
  prepTime,
  totalTime,
  difficulty, 
  description,
  category,
  servings,
  calories
}: RecipeCardProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Recipe Saved!",
      description: `${title} has been added to your favorites.`,
    });
  };

  const handleClick = () => {
    const urlTitle = encodeURIComponent(title.toLowerCase().replace(/ /g, '-'));
    navigate(`/recipe/${urlTitle}`);
  };

  const getDifficultyColor = (difficulty: "Easy" | "Medium" | "Hard") => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-50";
      case "Medium":
        return "text-orange-600 bg-orange-50";
      case "Hard":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getDifficultyIconColor = (difficulty: "Easy" | "Medium" | "Hard") => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600";
      case "Medium":
        return "text-orange-600";
      case "Hard":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group h-full flex flex-col" 
      onClick={handleClick}
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          onClick={handleSave}
          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-olive"
          size="icon"
          variant="ghost"
        >
          <BookmarkPlus size={20} />
        </Button>
        {category && (
          <span className="absolute top-2 left-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        )}
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="font-serif text-xl text-olive mb-2 group-hover:text-terracotta transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {prepTime && (
              <div className="flex items-center gap-1.5">
                <Timer size={16} className="text-sage" />
                <span>Prep: {prepTime}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Flame size={16} className="text-sage" />
              <span>Cook: {cookingTime}</span>
            </div>
            {totalTime && (
              <div className="flex items-center gap-1.5">
                <CalendarClock size={16} className="text-sage" />
                <span>Total: {totalTime}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Gauge size={16} className={getDifficultyIconColor(difficulty)} />
              <span className={`px-2 py-0.5 rounded-full text-sm ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </span>
            </div>
            {servings && (
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Utensils size={16} className="text-sage" />
                <span>Serves {servings}</span>
              </div>
            )}
            {calories && (
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <ChefHat size={16} className="text-sage" />
                <span>{calories} cal</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};