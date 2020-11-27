import React from 'react';
import { Table, Button } from 'react-bootstrap';


var apiUrl = 'https://pokeapi.co/api/v2/pokemon';
function fetchAPI(url){
    return fetch(url);
}

class PokemonList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pokemons:[],
            backbutton:null, 
            fwbutton:null
        }
    }

    getNext(url){
        if(url){
            apiUrl = url;
            this.componentDidMount();
        }   
    }

    handleClick(url) {
        alert(url);
      }

    componentDidMount(){
        const data = fetchAPI(apiUrl);
        data.then(data=>data.json())
        .then((data)=>{
            this.setState(
                {
                    pokemons:data.results,
                    backbutton:data.previous,
                    fwbutton:data.next
                }
            )
        })
    }


    render(){
        const pokemon = this.state;
        const prev = this.state.backbutton;
        const forward = this.state.fwbutton;
        return(
            <div className="container">
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th className="colname">Pokemon</th>
                        <th className="coldetail">Details</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            pokemon.pokemons.map((item) => (
                                <tr key={item.url}>
                                    <td>{item.name}</td>
                                    <td><button className="btn-warning" onClick={() => this.handleClick(item.url)}>Details</button></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td>
                                <button className="btn-primary" onClick={() => this.getNext(prev)}>Prev</button>
                                <button className="btn-danger" onClick={() => this.getNext(forward)}>Next</button>
                            </td>
                        </tr>
                    </tbody>
                 </Table>
            </div>
        )
    }
}

export default PokemonList;