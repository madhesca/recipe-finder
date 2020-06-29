import React, { useContext } from "react";
import { Link } from "react-router-dom";

function SingleRecipe(props) {
  console.log("here", props);

  return (
    <div>
      <h1>Single Recipe</h1>
      <h2>{props.location.state.title}</h2>
      <img src={props.location.state.image} />
      <br />
      <p>{props.location.state.summary}</p>
      <Link to="/">Back to Recipes</Link>
    </div>
  );
}

export default SingleRecipe;
