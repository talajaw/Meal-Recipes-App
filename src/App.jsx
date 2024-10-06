import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDetailPage from "./pages/MealDetailPage";
import DetailsPage from "./pages/DetailsPage";
import Layout from "./layouts/Layout";
import "./index.css";
import ScrollToTopButton from "./components/ScrollToTopButton";


// import SearchBar from "./layouts/SearchBar";
// import RandomMeal from "./layouts/RandomMeal";
//import SearchBar from "./layouts/SearchBar";
//import RandomMeal from "./layouts/RandomMeal";
//import NavBar from "./layouts/NavBar";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4 bg-green-500 dark:bg-gray-900 transition duration-300 ease-in-out">
       
        <Layout>

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/meal/:category" element={<MealDetailPage />} />
          <Route path="/meal/:id" element={<DetailsPage />} />
        </Routes>

        </Layout>
        <ScrollToTopButton />
        {/* <SearchBar /> */}

       

        {/* <RandomMeal /> */}
        

      </div>
    </Router>
  );
}

export default App;
