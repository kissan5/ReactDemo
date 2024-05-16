import { useState, useEffect } from "react";

const FavPokemonComponent = () => {
  const [favPokemon, setFavPokemon] = useState({
    name: "...Loading",
  });

  const URL = "https://pokeapi.co/api/v2/pokemon/charizard";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(`The data we got is here`);
        console.log(data);
        setFavPokemon(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // if (!favPokemon) {
  //   return <div>Loading...</div>;
  // }

  return <div>My Fav pokemon is:{favPokemon.name}</div>;
};

export default FavPokemonComponent;
