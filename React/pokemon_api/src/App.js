import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./components/Pokemon";
import React, { useState } from "react";

function App() {
  const [res, setRes] = useState([]);

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=400&offset=0")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setRes(response.results);
        console.log(response.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <Pokemon res={res} />
    </div>
  );
}

export default App;
