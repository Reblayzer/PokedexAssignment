import React, {useState, useEffect} from 'react';
import PokeCell from '../pokeCell';
import './PokeList.css';

const PokeList = ({handleOnClick}) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(currentPage - 1) * 20}`);
            const data = await response.json();
            const pokemonList = await Promise.all(data.results.map(async result => {
                const response = await fetch(result.url);
                const pokemonData = await response.json();
                return {
                    id: pokemonData.id,
                    name: pokemonData.name,
                    sprite: pokemonData.sprites.front_default
                };
            }));
            setPokemonData(pokemonList);
        };

        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < 66) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <>
            <section className="poke-list">
                {pokemonData.map(pokemon => (
                    <PokeCell key={pokemon.id} pokemon={pokemon} handleOnClick={handleOnClick}/>
                ))}
            </section>
            <div>
                <div>
                    <button className="previous" onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                </div>
                <div>
                    <button className="next" onClick={handleNextPage} disabled={currentPage === 66}>Next</button>
                </div>
            </div>
        </>
    );
};

export default PokeList;
