

import PropTypes from 'prop-types';

const Button = ({ onClick, label, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`bg-gradient-to-b from-green-700 to-green-900 text-gray-300 font-semibold shadow-md scale-90 p-2 mt-2  rounded ${className}`}
    >
      {label}
    </button>
  );
};

// Define prop types for Button
Button.propTypes = {
  onClick: PropTypes.func.isRequired, // Ensure onClick is a function and required
  label: PropTypes.string.isRequired, // Ensure label is a string and required
  className: PropTypes.string, // Ensure className is a string (optional)
};

export default Button;