// import React from "react";
// function Logo(props) {
//   let appName = `Erick's Pokedex`;

//   return (
//     <header>
//       <h1>Welcome to the {appName}</h1>
//       <img
//         src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
//         alt="poke"
//       ></img>
//     </header>
//   );
// }

// export default Logo;

import React from "react";
function Logo(props) {
  return (
    <header>
      <h1>
        Welcome to {props.name} {props.erick} {props.appName}
      </h1>
      <img src={props.src} alt="poke"></img>
    </header>
  );
}

export default Logo;
