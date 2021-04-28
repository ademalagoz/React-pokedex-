// import React from 'react';
const Logo = (props) => {
  // function logWhenClicked() {
  //   console.log("Hello-Merhaba");
  // }
  // const appName = "ADEM_ALAGOZ's Pokedex"

  return (
    <header>
      <h1>Welcome to the {props.appName}</h1>
      <img
        onClick={props.onClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      />
    </header>
  );
};
export default Logo;
