
import PropTypes from 'prop-types';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {categories.map((category) => (
        <button
          key={category.idCategory}
          className={`px-4 py-2  mt-6   rounded ${selectedCategory === category.strCategory ? 'bg-green-800  shadow-lg  scale-100  text-white' : 'bg-gray-400 '}`}
          onClick={() => onCategoryChange(category.strCategory)}
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
};

// PropTypes for type checking
CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      idCategory: PropTypes.string.isRequired,
      strCategory: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

//This component will display a list of categories and allow users to filter meals based on selected categories.