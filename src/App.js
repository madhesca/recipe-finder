import React from "react";
import Index from "./components/Index";
import SingleRecipe from "./components/SingleRecipe";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Search for a Recipe</h2>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/recipe/:id" component={SingleRecipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
