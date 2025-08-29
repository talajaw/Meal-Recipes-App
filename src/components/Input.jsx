import PropTypes from "prop-types";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-full lg:mt-4 pl-6 lg:pr-72 pr-28 py-2 bg-white/25 backdrop-blur-md border border-white/20 text-gray-200 placeholder-gray-200 shadow-md hover:opacity-90 focus:ring-2 focus:ring-yellow-400 outline-none"
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
