import React, {Component} from "react";
import {DetailView, PokeList, Pokemon} from "../../components";
import "./Pokedex.css";

class Pokedex extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: {}
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((response) => response.json())
            .then((data) => {
                const pokemon = new Pokemon(data);
                this.setState({pokemon});
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <>
                <h2>Pokedex</h2>
                <div className="App">
                    <PokeList handleOnClick={this.handleOnClick}/>
                    <DetailView pokemon={this.state.pokemon}/>
                </div>
            </>
        );
    }
}
export default Pokedex;