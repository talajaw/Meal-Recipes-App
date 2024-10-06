import { fetchMealDetails } from "../redux/mealSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link for navigation
//use the Link component from react-router-dom to navigate to the details page when the button is clicked. You should also pass the meal ID as a route parameter.
const MealCard = ({ meal }) => {
  //add a "See More Details" button that dispatches the fetchMealDetails action when clicked.
  const dispatch = useDispatch();

  const handleSeeMoreDetails = () => {
    dispatch(fetchMealDetails(meal.idMeal)); // Dispatch action to fetch details
  };

  // Function to truncate the meal name
  const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
      return `${name.slice(0, maxLength)}...`; // Truncate and add ellipsis
    }
    return name;
  };

  return (
    <div className="border border-zinc-600 rounded-lg overflow-hidden shadow-lg flex flex-col h-64">
      {" "}
      {/* Fixed height for uniformity */}
      <img
        src={`${meal.strMealThumb}/preview`}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="flex justify-between items-center p-4 ">
        <h3 className="text-lg font-semibold truncate">
          {truncateName(meal.strMeal, 20)}
        </h3>
        <Link to={`/meal/${meal.idMeal}`}>
          <button
            onClick={handleSeeMoreDetails}
            className="bg-green-800 text-white px-2 py-1  rounded hover:bg-green-600 "
          >
            See More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

// Define prop types for MealCard
MealCard.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealCard;
