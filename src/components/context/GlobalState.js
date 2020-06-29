import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    recipes: []
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const loadData = data => {
    dispatch({
      type: "LOAD_DATA",
      payload: data
    });
  };

  const loadSearch = data => {
    dispatch({
      type: "LOAD_SEARCH",
      payload: data
    });
  };

  const API_KEY = "bf7f1a40ad7e407cba6e08cc9d06ff1b";
  useEffect(() => {
    const loadRecipes = async () => {
      const data = await axios.get(`https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=${API_KEY}`);

      try {
        return loadData(data.data.recipes);
      } catch (err) {
        console.log(err);
      }
    };

    loadRecipes();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        data: state.recipes,
        loadData,
        loadSearch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
