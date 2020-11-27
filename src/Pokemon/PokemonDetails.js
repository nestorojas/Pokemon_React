import React from 'react';
import apiUrl from './PokemonList'


class PokemonDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pokemonsdetails:[],
        }
    }

    componentDidMount() {
        if (apiUrl !== undefined) {
            fetch(apiUrl)
                .then(data => data.json())
                .then((data) => {
                    this.setState(
                        {
                            pokemonsdetails: data
                        }
                    )
                })
        }
    }


    render(){
        const pokemondetail = this.state;
        return (
            <div className="pokedetail">
              <h2>Pokemon Details</h2>
              <img src={pokemondetail.front_default} alt="sprite"/>
                <div>{pokemondetail.sprites.name}</div>       
            </div>
          )
    }
}

export default PokemonDetails;