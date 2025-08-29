// src/components/RandomMeal.js

import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMeal } from "../redux/mealSlice.jsx";
//import Button from "../components/Button.jsx";

const RandomMeal = () => {
  const dispatch = useDispatch();
  const randomMeal = useSelector((state) => state.meal.randomMeal); // Get random meal from Redux store

  const handleRandomMeal = () => {
    console.log("suceess");
    dispatch(fetchRandomMeal()); // Dispatch action to fetch a random meal
  };

  // if (!randomMeal) {
  //   return <p>Loading...</p>; // Show loading message while fetching
  // }

  return (
   <div className="text-center">
       <button
    onClick={handleRandomMeal}
    className="px-6 py-3  bg-emerald-700 opacity-85 text-white font-semibold  rounded-md shadow-lg hover:scale-105 transform transition"
  >
    🎲 Get Random Meal
  </button>
     {/* only displays the meal details when a random meal has been fetched by clicking the button. */}
     {randomMeal && (
    <div className="mt-8 flex flex-col md:flex-row items-center gap-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/20">
      <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} className="w-full md:w-1/3 h-64 object-cover rounded-xl shadow-md" />
      <div className="md:w-2/3 text-left">
        <h2 className="text-2xl font-bold text-gray-800">{randomMeal.strMeal}</h2>
        <p className="mt-3 text-gray-800 leading-relaxed">{randomMeal.strInstructions}</p>
      </div>
    </div>
  )}
    </div>
  );
};

export default RandomMeal;
