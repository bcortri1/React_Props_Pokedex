import React from "react";
import './Pokecard.css';

const Pokecard = ({id= 4, name= 'Charmander', type= 'fire', base_experience= 62}) => (
    <span className="Pokecard">
        <div className="Poke-Title">{name}</div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <div>Type: {type}</div>
        <div>EXP: {base_experience}</div>
    </span>
);

export default Pokecard