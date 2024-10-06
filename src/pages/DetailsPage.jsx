// src/pages/DetailsPage.jsx
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';
// import { fetchMealDetails } from '../redux/mealSlice';
// import { useParams } from 'react-router-dom';

// const DetailsPage = () => {
//   const dispatch = useDispatch();
//   const mealDetail = useSelector((state) => state.meal.mealDetail); // Get meal detail from Redux store
//   const { id } = useParams(); // Get the meal ID from URL parameters

//   useEffect(() => {
//     dispatch(fetchMealDetails(id)); // Fetch meal details when component mounts
//   }, [dispatch, id]);
//   console.log(mealDetail);

//   if (!mealDetail) {
//     return <p>Loading...</p>; // Show loading message while fetching
//   }

//   return (
//     <div className="p-4 border border-gray-300 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold">{mealDetail.strMeal}</h2>
//       <img src={mealDetail.strMealThumb} alt={mealDetail.strMeal} className="w-full h-64 object-cover rounded" />
//       <h3 className="text-xl mt-4">Instructions:</h3>
//       <p>{mealDetail.strInstructions}</p>
//       {/* Optionally display ingredients or other details */}
//     </div>
   
//   );
// };

// export default DetailsPage;

import MealCard from "../components/MealCard";
import Details from "../components/Details";
import { useSelector } from 'react-redux';

const DetailsPage = () => {

    const meals = useSelector((state) => state.meal.meals); // Get meals from Redux store

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {/* Display Meal Details */}
      <Details />
    </div>
  );

 };

export default DetailsPage;
