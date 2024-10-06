//import NavBar from "../layouts/NavBar";
//import SearchBar from "../layouts/SearchBar";
import RandomMeal from "../layouts/RandomMeal";
import { useDispatch } from "react-redux";

import { resetMeals } from "../redux/mealSlice";
import { useEffect  } from "react";
//import { fetchRandomMeal } from '../redux/mealSlice'


//import {useState} from "react";
//import CategoryFilter from "../components/CategoryFilter";
//import MealList from "../components/MealList";
//import { fetchCategories} from '../redux/mealSlice'; 

//import { f fetchMealsByCategory } from '../redux/mealSlice'; // Import action to fetch categories

// Import action to fetch categories
//import { setCategories } from "../redux/mealSlice";


const Home = () => {
   // const [selectedCategory, setSelectedCategory] = useState(null); // State to manage selected category
   
   
   const dispatch = useDispatch();
   //const randomMeal = useSelector((state) => state.meal.randomMeal); // Get random meal from Redux store
 
 
   // const categories = useSelector((state) => state.meal.categories); // Get categories from Redux store
  //const meals = useSelector((state) => state.meal.meals); // Get meals from Redux store
  

  // useEffect(() => {
  //   dispatch(fetchRandomMeal()); // Fetch categories on component mount
  // }, [dispatch]);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category); // Update selected category state
//     dispatch(fetchMealsByCategory(category)); // Dispatch action to fetch meals by selected category
//   };

  useEffect(() => {
    dispatch(resetMeals()); // Reset meals on component
    
  }, [dispatch]);

  return (
    <div>
      
     
      
       {/* <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      /> */}
      {/* <MealList meals={meals} /> Pass meals as a prop to MealList */}
      

     
        <RandomMeal />
     
    </div>
  );
};

export default Home;
