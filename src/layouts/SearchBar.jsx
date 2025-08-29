// src/components/SearchBar.js
import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { searchMeals } from "../redux/mealSlice.jsx";
import Input from "../components/Input.jsx";


const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(e.target.value);

    // Dispatch the searchMeals action with the current search term
    if (value) {
      dispatch(searchMeals(value));
    }
  };

  // Fetch suggestions every 3 seconds based on searchTerm
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        setSuggestions(data.meals || []);
      }
    };

    const intervalId = setInterval(fetchSuggestions, 1500);
    return () => clearInterval(intervalId);
  }, [searchTerm]);

  // Memoize suggestions to avoid unnecessary recalculations
  const memoizedSuggestions = useMemo(() => {
    return suggestions.map((meal) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      thumbnail: `${meal.strMealThumb}/preview`,
    }));
  }, [suggestions]);

  return (
    <div className="relative w-full md:w-1/2 ">
    
      
      <Input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="🔍Search meals..."
      />
    
   
      <ul className="absolute mt-2 w-full bg-white rounded-xl shadow-lg max-h-60 overflow-y-auto">
        {memoizedSuggestions.map((meal) => (
          <li key={meal.id} className="flex items-center p-2 hover:bg-gray-100 transition cursor-pointer">
            <img
              src={meal.thumbnail}
              alt={meal.name}
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-4 text-gray-700">{meal.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
