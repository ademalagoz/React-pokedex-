import { useState } from "react";

const CaughtPokemon = (props) => {
  // const date = new Date().toLocaleDateString()
  const [caught, catchPokemon] = useState([]);
  const pokeGuys = ["Greninja", "Lucario", "Mimikyu", "Charizard", "Umbreon"];
  function countPoke() {
    catchPokemon(
      caught.concat(pokeGuys[Math.floor(Math.random() * pokeGuys.length)])
    );
  }

  const [pokemonNameInput, setPokemonNameInput] = useState("");
  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  function onClicker() {
    if (pokemonNameInput !== "") {
      catchPokemon(caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }
  }
  return (
    <div>
      <p>
        <input
          type="text"
          value={pokemonNameInput}
          onChange={handleInputChange}
        />
        <button id="count" onClick={onClicker}>
          Click for New Pokemon
        </button>
        <ul>
          Caught
          {caught.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
          Pokemon on {props.date}
        </ul>
      </p>
    </div>
  );
};

export default CaughtPokemon;
