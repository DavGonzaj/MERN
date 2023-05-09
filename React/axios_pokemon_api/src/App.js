import "./App.css";
import Pokemon from "./components/Pokemon";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [res, setRes] = useState([]);

  const handleFetch = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setRes(response.data.results);
      });
  };
  return (
    <div className="App">
      <button onClick={handleFetch}>Fetch Pokemon</button>
      <Pokemon res={res} />
    </div>
  );
}

export default App;
