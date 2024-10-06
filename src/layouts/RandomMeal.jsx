// src/components/RandomMeal.js

import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMeal } from "../redux/mealSlice.jsx";
import Button from "../components/Button.jsx";

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
    <>
      <Button onClick={() => handleRandomMeal()} label="Get Random Meal" />
     {/* only displays the meal details when a random meal has been fetched by clicking the button. */}
      { randomMeal && (<div className=" mt-5 flex flex-col items-center md:flex-row space-x-4 p-4 border border-gray-700 rounded-lg shadow-lg">
      {/* Meal Image */}
      <div className="relative mb-4 md:mb-0  md:w-1/3">
        <img 
          src={randomMeal.strMealThumb} 
          alt={randomMeal.strMeal} 
          className="w-full h-80 object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-105" 
        />
      </div>
      
      {/* Meal Details */}
      <div className="flex flex-col justify-between md:w-2/3 ">
        <h2 className="text-xl text-stone-600 font-bold">{randomMeal.strMeal}</h2>
        <p className="mt-2 text-stone-600 font-medium">{randomMeal.strInstructions}</p>
        {/* Add more details about the random meal if needed */}
      </div>
    </div>
      )}
    </>
  );
};

export default RandomMeal;
