import { useSearchStore } from "../../store/useSearch";
import { useDebouncedValue } from "../../hooks/useDebounceSearch";
import { useEffect, useState, useRef } from "react";
import { Search } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion"; 

const SearchInput = () => {
  const query = useSearchStore((state) => state.query);
  const suggestions = useSearchStore((state) => state.suggestions);
  const setQuery = useSearchStore((state) => state.setQuery);
  const setSuggestions = useSearchStore((state) => state.setSuggestions);

  const [isFocused, setIsFocused] = useState(false); 
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebouncedValue(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      const fakeData = [
        "Am khete moja",
        "Dal vat",
        "Biplob",
        "Biplob tor bou niyea vagbo",
        "Zustand",
        "Next.js",
      ];
      const filtered = fakeData.filter((item) =>
        item.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery, setSuggestions]);

  return (
    <div className="relative w-full md:w-80">
      {/* Search input with icon */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)} 
          className="w-full pl-10 border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
        />
      </div>

      {/* Suggestions dropdown with smooth animation */}
      <AnimatePresence>
        {isFocused && suggestions.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border rounded-md mt-1 shadow-lg z-50 max-h-60 overflow-auto"
          >
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-green-50 transition-colors"
                onMouseDown={() => setQuery(item)} 
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchInput;
