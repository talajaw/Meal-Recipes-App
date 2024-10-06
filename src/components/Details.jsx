// src/components/Details.jsx

import { useSelector } from 'react-redux';

const Details = () => {
  const mealDetail = useSelector((state) => state.meal.mealDetail); // Get meal detail from Redux store

  if (!mealDetail) {
    return <p>No details available.</p>; // Show loading message or placeholder
  }

  return (
    <div className="flex flex-col md:flex-row border border-gray-800 rounded-lg shadow-lg p-5">
    {/* Meal Image */}
    <div className="w-full md:w-1/3">
      <img 
        src={mealDetail.strMealThumb} 
        alt={mealDetail.strMeal} 
        className="w-full h-64 object-cover rounded" 
      />
    </div>
    
    {/* Meal Details */}
    <div className="w-full md:w-2/3 p-4 text-stone-600">
      <h2 className="text-2xl font-bold">{mealDetail.strMeal}</h2>
      <h3 className="text-xl mt-4">Instructions:</h3>
      <p>{mealDetail.strInstructions}</p>
      {/* Optionally, you can display ingredients or other details here */}
    </div>
  </div>
  );
};

export default Details;