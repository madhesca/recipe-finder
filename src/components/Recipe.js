import React from "react";
import { Link } from "react-router-dom";

function Recipe({ recipe }, props) {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.creditsText}</p>
      <img src={recipe.image} />

      <br />
      <Link to={{ pathname: `/recipe/${recipe.id}`, state: recipe }}>View Recipe</Link>
    </div>
  );
}

export default Recipe;
