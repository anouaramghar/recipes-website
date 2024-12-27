import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-warmWhite border-b border-terracotta/20 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl text-olive">
          Culinary Delights
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-olive hover:text-terracotta transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-olive hover:text-terracotta transition-colors">
            About
          </Link>
          <Link to="/recipes" className="text-olive hover:text-terracotta transition-colors">
            Recipes
          </Link>
          <Link to="/start-here" className="text-olive hover:text-terracotta transition-colors">
            Start Here
          </Link>
          <Button variant="ghost" size="icon" className="text-olive hover:text-terracotta">
            <Search size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};