
// src/layouts/Bar.jsx
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <div className="bg-gray-900 p-4">
      {/* Hamburger Menu for Small and Medium Screens */}
      <div className="md:hidden flex justify-end items-center">
        
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menu Items for Large Screens */}
      <div className="hidden md:flex md:justify-center  lg:justify-end md:space-x-10   ">
        <Link to="/" className="text-green-800  font-semibold hover:text-white hover:border-b-2 hover:border-green-700 drop-shadow-xl  ">Home</Link>
        <Link to="/about" className="text-green-800 font-semibold hover:text-white  hover:border-b-2 hover:border-green-400">About</Link>
        <Link to="/support" className="text-green-800 font-semibold hover:text-white  hover:border-b-2 hover:border-green-400">Support</Link>
        <Link to="/contact" className="text-green-800 font-semibold hover:text-white  hover:border-b-2 hover:border-green-400">Contact Us</Link>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2">
          <Link to="/" className="block text-white bg-gray-700 p-2 rounded hover:bg-gray-600">Home</Link>
          <Link to="/about" className="block text-white bg-gray-700 p-2 rounded hover:bg-gray-600">About</Link>
          <Link to="/support" className="block text-white bg-gray-700 p-2 rounded hover:bg-gray-600">Support</Link>
          <Link to="/contact" className="block text-white bg-gray-700 p-2 rounded hover:bg-gray-600">Contact Us</Link>
        </div>
      )}
    </div>
  );
};

export default Bar;