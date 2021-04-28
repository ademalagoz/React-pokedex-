import { useState } from "react";

const CaughtPokemon = (props) => {
  // const date = new Date().toLocaleDateString()
  const [caught, catchPokemon] = useState([]);
  const pokeGuys = ["newPokeman", "other", "another", "another2", "other2"];
  function countPoke() {
    catchPokemon(
      caught.concat(pokeGuys[Math.floor(Math.random() * pokeGuys.length)])
    );
  }
  return (
    <div>
      <p>
        <button id="count" onClick={countPoke}>
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
