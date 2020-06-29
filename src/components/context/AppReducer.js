const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_SEARCH":
      return {
        ...state,
        recipes: action.payload
      };

    case "LOAD_DATA":
      return {
        ...state,
        recipes: action.payload
      };
    default:
      return state;
  }
};

export default AppReducer;
