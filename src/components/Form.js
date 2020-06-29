import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "./context/GlobalState";

function Form() {
  const [searchTerm, setSearchTerm] = useState("");
  const { loadSearch } = useContext(GlobalContext);

  const handleSubmit = async e => {
    e.preventDefault();
    const search = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&maxFat=25&number=10&apiKey=bf7f1a40ad7e407cba6e08cc9d06ff1b`);
    console.log("search", search.data.results);
    loadSearch(search.data.results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Form;
