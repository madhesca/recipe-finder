import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Recipe from "./Recipe";
function Recipes() {
  const context = useContext(GlobalContext);

  console.log(context);

  return (
    <div>
      {context.data.map(recipe => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
}

export default Recipes;
