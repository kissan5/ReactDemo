import { useEffect, /*useInsertionEffect*/ useState } from "react";

function favPokemonForm() {
  //pokemon state
  const [favPokemon, setFavPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleInputChange = (event) => {
    setFavPokemon(event.target.value);
  };

  const fetchPokemonData = () => {
    if (!favPokemon) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${favPokemon}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(`weight: `);
        console.log(data.weight);
        setPokemonData(data);
      })

      .catch((err) => console.log(`Error while fetching data ${err}`));
  };

  //pokemon fetcher fuction
  // const favPokemonHandler = () => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${favPokemon}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(`The data we got is here`);
  //       console.log(data);
  //       setFavPokemon(data);
  //     });
  // };

  //preventDefault function comes from the event object
  // const setPokemonHandler = (event) => {
  //   console.log(event);
  //   event.preventDefault();
  //   console.log(`${event.target.value}`);
  //   setFavPokemon(event.target.value);
  // };

  useEffect(() => {
    fetchPokemonData();
  }, [favPokemon]);

  return (
    <div>
      <label htmlFor="">Enter your fav pokemon</label>
      <input type="text" value={favPokemon} onChange={handleInputChange} />
      {/* <button type="button" onClick={fetchPokemonData}>
        fetch my fav pokemon
      </button> */}
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <p>weight: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
}

export default favPokemonForm;
