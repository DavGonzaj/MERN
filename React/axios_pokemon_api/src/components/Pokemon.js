import React, { useEffect, useState } from "react";

const Pokemon = (props) => {
  console.log(props.res);
  return (
    <div>
      <ul>
        {props.res.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
