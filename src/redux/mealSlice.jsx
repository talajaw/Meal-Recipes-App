import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchMeals = createAsyncThunk("meals/search", async (name) => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  return response.data.meals || [];
});

export const fetchCategories = createAsyncThunk(
  "meals/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return response.data.categories; // Return categories from API response
  }
);

// Async thunk to fetch meals by category
export const fetchMealsByCategory = createAsyncThunk(
  "meals/fetchByCategory",
  async (category) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    return response.data.meals; // Return meals array from API response
  }
);

export const fetchRandomMeal = createAsyncThunk(
  "meals/fetchRandom",
  async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    return response.data.meals[0]; // Return the random meal object
  }
);


// Simulate an API call with static data
// export const fetchRandomMeal = createAsyncThunk('meals/fetchRandom', async () => {

//   return {
//     strMeal: "Test Meal",
//     strMealThumb: "https://via.placeholder.com/150"
//   };
// });


//action to fetch meal details based on the meal ID. 
export const fetchMealDetails = createAsyncThunk(
  "meals/fetchDetails",
  async (id) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(response.data); // Log the response
    return response.data.meals[0]; // Return the meal object
  }
);

const mealSlice = createSlice({
  name: "meal",
  initialState: {
    meals: [],
    mealDetail: null,
    categories: [],
    randomMeal: null, // Add state for random meal
  },
  reducers: {
    setMeals: (state, action) => {
      state.meals = action.payload; // Update meals in state
    },
    // setMealDetail: (state, action) => {
    //   state.mealDetail = action.payload; // Update meal detail in state
    // },
    setCategories: (state, action) => {
      state.categories = action.payload; // Update categories in state
    },


    // setRandomMeal: (state, action) => {
    //   state.randomMeal = action.payload; // Set random meal in state
    // },

    resetMeals: (state) => {
      state.meals = []; // Reset meals on refresh
      state.randomMeal = null; // Reset random meal
      state.mealDetail = null; //Reset meal details
    },
  },


    // extraReducers: (builder) => {
    //   builder
    //     .addCase(fetchCategories.fulfilled, (state, action) => {
    //       state.categories = action.payload; // Set categories in state
    //     });
    // },

    extraReducers: (builder) => {
      builder.addCase(fetchRandomMeal.fulfilled, (state, action) => {
        console.log("Random meal fetched:", action.payload); // Log the fetched meal
        state.randomMeal = action.payload; // Set fetched random meal in state  // Optionally reset meals here if you want to clear them after fetching a random meal
        // state.meals = []; 
      })
      .addCase(fetchMealDetails.fulfilled, (state, action) => {
        state.mealDetail = action.payload; // Set fetched meal detail in state
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        console.log("Categories fetched:", action.payload); // Log the fetched categories
        state.categories = action.payload; // Set fetched categories in state
      })
      .addCase(fetchMealsByCategory.fulfilled, (state, action) => {
        console.log("Meals fetched by category:", action.payload);
        state.meals = action.payload; // Set fetched meals in state based on selected category
      })
      .addCase(fetchRandomMeal.rejected, (state, action) => {
        console.error("Failed to fetch random meal:", action.error.message); // Log any error message
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        console.error("Failed to fetch categories:", action.error.message); // Log any error message
      })
      .addCase(fetchMealsByCategory.rejected, (state, action) => {
        console.error("Failed to fetch meals by category:", action.error.message);
      });
    
  },
});
// Exporting actions for use in components
export const {
  setMeals,
  
  setMealDetail,
  
  
  resetMeals,
} = mealSlice.actions;

// Exporting reducer for store configuration
export default mealSlice.reducer;
