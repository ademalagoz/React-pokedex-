import logo from './logo.svg';
import './App.css';
import Logo from './logo';
import CaughtPokemon from './CaughtPokemon';
import BestPokemon from './BestPokemon'


// const Logo = ()=> {
// const appName = "ADEM_ALAGOZ's Pokedex"

//   return(
//     <header>
//     <h1>Welcome to the {appName}</h1>
//     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"/>
  
  
//   </header>
//   )
// }

// const CaughtPokemon = ()=> {
//   const date = new Date().toLocaleDateString()
//   return(
//     <p>Caught 0 Pokemon on{date}</p>
//   )
// }

// const BestPokemon = ()=>{
//   const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
//   return(   <div>
//     <p>My favorite Pokemon is Squirtle</p>
//       <ul>
//       {abilities.map(ability =>(
//         <li>{ability}</li>
//       )
//             )}
              
//       </ul>
    
//   </div>)
   
// }

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']

  return (
    <div>
  <Logo appName={"ADEM_ALAGOZ's Pokedex"}/>

  <BestPokemon abilities = {abilities}/>
  <CaughtPokemon date = {new Date().toLocaleDateString()}  />
    </div>
      
  );
}
export default App;
