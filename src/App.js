import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";

function App() {
  let appName = "Pokedex";
  let abilities = {
    Blastoise: ["Shellfish", "Abilities", "Torrent"],
    Charizard: ["Flame", "Abilities", "Blaze"],
    Charmeleon: ["Flame", "Abilities", "Blaze"],
  };
  let date = new Date().toLocaleDateString();
  let images = [
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
  ];
  return (
    <div>
      <Logo name="Erick's" appName={appName} src={images[0]} />
      <BestPokemon
        abilities={abilities["Blastoise"]}
        pokemon={Object.keys(abilities)[0]}
      />
      <CaughtPokemon date={date} />

      <Logo name="Jonathan's" appName={appName} src={images[1]} />
      <BestPokemon
        abilities={abilities["Charizard"]}
        pokemon={Object.keys(abilities)[1]}
      />
      <CaughtPokemon date={date} />

      <Logo name="Jarrod's" appName={appName} src={images[2]} />
      <BestPokemon
        abilities={abilities["Charmeleon"]}
        pokemon={Object.keys(abilities)[2]}
      />
      <CaughtPokemon date={date} />
    </div>
  );
}
export default App;
