import React from 'react';
import './App.css';
import PokemonList from './Pokemon/PokemonList'
//import PokemonDetails from './Pokemon/PokemonDetails'

class App extends React.PureComponent {
  render () {
    return (
        <PokemonList />
    )
  }
}

export default App;
