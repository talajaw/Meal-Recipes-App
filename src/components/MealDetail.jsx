// src/components/MealDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MealCard from './MealCard.jsx';

const MealDetail = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      setMeals(response.data.meals);
    };

    fetchMealsByCategory();
  }, [category]);

  if (!meals) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold dark:text-stone-400 mt-6">{category} Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 dark:text-stone-400  items-center  border-none  ">
        {meals.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealDetail;