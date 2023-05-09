import React, { useState } from "react";

const GetPokemon = (props) => {
  console.log(props.response);
  return (
    <div>
      {props.res.map((pokemon, index) => {
        return (
          <ul>
            <li>{pokemon.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default GetPokemon;
