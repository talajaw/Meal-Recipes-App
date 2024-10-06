
import MealItem from './MealItem'; 
import { useSelector } from 'react-redux';

const MealList = () => {
  const meals = useSelector((state) => state.meal.meals); // Get meals from Redux store

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {meals && meals.length > 0 ? (
        meals.map((meal) => (
          <MealItem 
            key={meal.idMeal} 
            meal={meal} 
            onSelect={(selectedMeal) => console.log(selectedMeal)} 
          />
        ))
      ) : (
        <p>No meals found for this category.</p> // Display message if no meals are found
      )}
    </div>
  );
};

export default MealList;

//MealList component that displays a list of meals