import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value = '', onChange, placeholder, className, onKeyPress }: SearchBarProps) => {
  return (
    <div className="relative max-w-md w-full mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <Input
        value={value}
        className={`pl-10 bg-white ${className || ''}`}
        placeholder={placeholder || "Search recipes..."}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};