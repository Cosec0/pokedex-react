import React from 'react'

function PokeCardComponent({ pokemon }) {
    return (
        <div className="card-container" key={pokemon.id}>
          <div className="card">
            <div className="card-body">
              <span className="card-number subtle">{pokemon.id}</span>
              <span className="card-author subtle">{pokemon.types}</span>
              <h2 className="card-title">{pokemon.name}</h2>
              <span className="card-description subtle">
                {pokemon.abilities}
              </span>
            </div>
            <img src={pokemon.pic} alt={pokemon.name} className="card-media" />
          </div>
        </div>
    )
}

export default PokeCardComponent;