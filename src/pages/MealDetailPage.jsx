import MealDetail from "../components/MealDetail";
//import NavBar from "../layouts/NavBar";

import MealCard from "../components/MealCard";
import Details from "../components/Details";
import { useSelector } from 'react-redux';

const MealDetailPage = () => {
  const meals = useSelector((state) => state.meal.meals);

  
    return (
      <div className="p-4">
       <MealDetail/>
       {/* <h2 className="text-2xl font-bold mb-4 text-green-800">Meals :</h2> */}
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
  
  export default MealDetailPage;