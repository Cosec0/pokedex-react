import React, { useEffect, useState } from 'react'

import './App.css';

import LoadingComponent from './components/LoadingComponent';
import PokeListComponent from './components/PokeListComponent';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchPokemonData = (pokemons) => {
    setLoading(false);
    pokemons.forEach((pokemon) => {
      fetch(pokemon.url)
      .then(res => res.json())
      .then(data => {
        const pokemonAbilites = data.abilities.map(ability => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.substr(1).toLowerCase());
        const pokemonTypes = data.types.map(type => type.type.name.charAt(0).toUpperCase() + type.type.name.substr(1).toLowerCase());
        const pokemonObj = {
          id: data.id,
          name: data.name,
          types: pokemonTypes.join(", "),
          abilities: pokemonAbilites.join(", "),
          pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
        };
        setPokemonData((prev) => ([...prev, pokemonObj]));
      });

      // sortPokeList();
    })
  }

  const sortPokeList = () => {
    let temp = pokemonData;
    temp.sort((a, b) => (a.id < b.id ? -1 : 1));
    console.log(temp);
  }


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(data => {
      fetchPokemonData(data.results);
    });

    return;
  }, []);


  return (
    <>
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/400px-International_Pok%C3%A9mon_logo.svg.png" alt="header" className="header-media" />
      </header>
      <main className="main-card--cointainer">
        
        {
          loading 
          ? <LoadingComponent/> 
          : pokemonData && <PokeListComponent pokemonData={pokemonData}/>
        }
      </main>
    </>
  )
  }
  

export default App;
