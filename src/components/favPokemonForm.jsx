import { useState } from "react";

function favPokemonForm() {
  //pokemon state
  const [favPokemon, setFavPokemon] = useState("");

  //pokemon fetcher fuction
  const favPokemonHandler = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${favPokemon}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(`The data we got is here`);
        console.log(data);
        setFavPokemon(data);
      });
  };

  //preventDefault function comes from the event object
  const setPokemonHandler = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(`${event.target.value}`);
    setFavPokemon(event.target.value);
  };

  return (
    <div>
      <form onSubmit={favPokemonHandler}>
        <label htmlFor="">Enter your fav pokemon</label>
        <input type="text" value={favPokemon} onChange={setPokemonHandler} />
        <button type="button" onClick={favPokemonHandler}>
          fetch my fav pokemon
        </button>
      </form>
    </div>
  );
}

export default favPokemonForm;
