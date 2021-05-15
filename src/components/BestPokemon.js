import React from "react";
function BestPokemon(props) {
  return (
    <div>
      <p>My favorite Pokemon is {props.pokemon} </p>
      <ul>
        {props.abilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon;
