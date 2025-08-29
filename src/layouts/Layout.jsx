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
import Footer from "./Footer.jsx";
import { CiSearch } from "react-icons/ci";

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
    <nav className=" p-4 mt-2">
      <div className="overflow-x-auto py-4 scrollbar-custom">
        {/* <h2 className="text-md  mb-2 text-green-700 font-medium items-center ">
          Categories
        </h2> */}
        <ul className="flex space-x-6 px-4">
          {categories.map((category) => (
            <li
              key={category.strCategory}
              className="flex flex-col items-center"
            >
              <Link to={`/meal/${category.strCategory}`} className="group ">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-md border border-white/30 transform transition duration-300 group-hover:scale-110">
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <span className="mt-2 text-sm   font-medium text-gray-800 dark:text-white  text-center block w-full">{category.strCategory}</span>
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
  // const resetSearch = () => {
  //   setSearchTerm("");
  //   setSuggestions([]); // Clear suggestions when resetting
  // };

  return (
    <div className="relative">
      <div className="flex  items-center ">
        <span className="absolute left-3">
          {/* Search Icon */}
         <CiSearch  className=" w-5 h-5 text-white"/>
        </span>
        <Input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="🔍 Search meals..."
        />

        {/* {searchTerm && (
          <button onClick={resetSearch} className="ml-2 text-gray-500">
            Reset
          </button>
        )} */}
      </div>
      <ul className="absolute z-10 mt-2 w-full bg-white  rounded-lg shadow-lg max-h-60 overflow-y-auto">
        {memoizedSuggestions.map((meal) => (
          <li
            key={meal.id}
            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
          >
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
      <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white p-6 ">
        <Bar />
        <h1 className=" mt-2 lg:text-6xl sm:text-4xl text-4xl  font-dancing font-extrabold text-center  tracking-wide drop-shadow-lg">
          Meals Recipe App
        </h1>
        <div className="flex justify-center mt-4">
          <SearchBar />
        </div>
      </header>

      <NavBar />
      <main className="  mx-auto p-4   ">{children}</main>

      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
