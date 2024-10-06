import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { searchMeals } from "../redux/mealSlice.jsx";
import Input from "../components/Input.jsx";

import PropTypes from "prop-types";
import "./food.jpg";
import Bar from "./Bar.jsx";
import Footer from "./footer.jsx";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(response.data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <nav className="bg-gray-800 p-4 mt-2">
      <div className="overflow-x-scroll h-30 bg-gray-300 p-4 rounded-lg mt-4 mb-2">
        <h2 className="text-md  mb-2 text-green-700 font-medium items-center ">
          Categories
        </h2>
        <ul className="flex flex-row space-x-2  lg:space-x-5">
          {categories.map((category) => (
            <li
              key={category.strCategory}
              className="flex flex-row items-center"
            >
              <Link
                to={`/meal/${category.strCategory}`}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 lg:w-24 lg:h-24   bg-green-700 rounded-full flex items-center justify-center p-1 mt-2">
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    className="rounded-full"
                  />
                </div>
                <span className="mt-1 mb-2 pt-1 ">{category.strCategory}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(e.target.value);

    // Dispatch the searchMeals action with the current search term
    if (value) {
      dispatch(searchMeals(value));
    } else {
      setSuggestions([]); // Clear suggestions when input is empty
    }
  };

  // Fetch suggestions every 3 seconds based on searchTerm
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        setSuggestions(data.meals || []);
      }
    };

    const intervalId = setInterval(fetchSuggestions, 1500);
    return () => clearInterval(intervalId);
  }, [searchTerm]);

  // Memoize suggestions to avoid unnecessary recalculations
  const memoizedSuggestions = useMemo(() => {
    return suggestions.map((meal) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      thumbnail: `${meal.strMealThumb}/preview`,
    }));
  }, [suggestions]);

  // Reset search function
  const resetSearch = () => {
    setSearchTerm("");
    setSuggestions([]); // Clear suggestions when resetting
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <span className="absolute left-3">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 3a8 8 0 100 16 8 8 0 000-16zm0 0l6 6"
            />
          </svg>
        </span>
        <Input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search meals..."
        />

        {/* {searchTerm && (
          <button onClick={resetSearch} className="ml-2 text-gray-500">
            Reset
          </button>
        )} */}


      </div>
      <ul className="absolute z-10 mt-2 w-full bg-white  rounded-lg shadow-lg max-h-60 overflow-y-auto">
        {memoizedSuggestions.map((meal) => (
          <li key={meal.id} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <img
              src={meal.thumbnail}
              alt={meal.name}
              className="inline-block mb-2 dark:text-stone-700  w-10 h-10 rounded-full"
            />
            <span className="dark:text-stone-400 ml-4">{meal.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=" bg-gray-900 text-white p-4">
        <Bar />
        <h1 className=" text-3xl  mt-1  font-bold mb-8 text-center text-white justify-center  md:justify-center items-center dark:text-green-700/65 ">
          Meals Recipe App
        </h1>
        <div className="flex justify-center  items-center mb-4">
          <SearchBar />
        </div>
      </header>

      <NavBar />
      <main className="  mx-auto p-4   ">{children}</main>
      <footer className=" bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 text-center mt-40">
        <p>&copy; 2024 Meals Recipe App</p>
        <Footer />
      </footer>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
