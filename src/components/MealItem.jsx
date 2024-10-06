
import PropTypes from 'prop-types';

const MealItem = ({ meal, onSelect }) => {
  const handleClick = () => {
    onSelect(meal); // Call the onSelect function passed as a prop
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center cursor-pointer" onClick={handleClick}>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{meal.strMeal}</h3>
    </div>
  );
};

// PropTypes for type checking
MealItem.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MealItem;

//This component will display individual meal items. We will use props to pass the meal data and handle any actions like selecting a meal.