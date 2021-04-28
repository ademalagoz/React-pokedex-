const BestPokemon = (props)=>{
    // const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
    return(   
    <div>
      <p>My favorite Pokemon is Squirtle</p>
        <ul>
        {props.abilities.map(ability =>(
          <li>{ability}</li>
        )
              )}
                
        </ul>
      
    </div>)
     
  }

  export default BestPokemon;