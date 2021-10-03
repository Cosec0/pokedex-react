import { useEffect } from "react";

import PokeCardComponent from "./PokeCardComponent";

function PokeListComponent({pokemonData}) {
    let pokemonList = [];

    useEffect(() => {
        pokemonData.sort((a, b) => (a.id < b.id ? -1 : 1));
    
        return;
      }, []);

    return (
        <>
            {
                pokemonData.length > 0 ? pokemonData.map((pokemon) => (<PokeCardComponent pokemon={pokemon} key={pokemon.id}/>)) : null
            }
        </>
    )
}

export default PokeListComponent;
