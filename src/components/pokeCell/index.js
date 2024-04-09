import React from "react";
import './PokeCell.css'

const PokeCell = ({ pokemon, handleOnClick }) => {
    const { id, name, sprite } = pokemon;
    return (
        <button onClick={() => handleOnClick(id)} className="poke-cell">
            {sprite && <img src={sprite} alt={name} />}
        </button>
    )
}

export default PokeCell;
