
import PropTypes from 'prop-types';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      className="pl-10 pr-4 py-1 text-gray-500 border border-gray-300 rounded-full w-full focus:outline-none focus:ring focus:ring-green-800 "
    />
  );
};

// Define prop types for Input
Input.propTypes = {
  value: PropTypes.string.isRequired, // Ensure value is a string and required
  onChange: PropTypes.func.isRequired, // Ensure onChange is a function and required
  placeholder: PropTypes.string, // Ensure placeholder is a string (optional)
};

export default Input;
