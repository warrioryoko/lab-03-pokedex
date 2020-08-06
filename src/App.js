import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header.js';
import UserInput from './UserInput.js';
import DisplayResults from './DisplayResults.js';
import './App.css';

export default class App extends Component {
    state = {
        search: '',
        isLoading: false,
        pokeState: [],
    }

    handleClick = async () => {
        
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`);

        this.setState({
            pokeState: data.body.results,
            isLoading: false,
        })

        console.log(data);
    }

    doTheSearch = (e) => {
        this.setState({search: e.target.value});
    }

    filterPokemon = (e) => {
        const pokeName = e.target.nameField.value,
            pokeType = e.target.typeField.value,
            pokeAttack = e.target.attackField.value,
            pokeDefense = e.target.defenseField.value;
        this.setState({ search: `${pokeName ? '&pokemon' + pokeName : ''}${pokeType ? '&type=' + pokeType : ''}${pokeAttack ? '&attack=' + pokeAttack : ''}${pokeDefense ? '$defense' + pokeDefense : ''}` })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Header></Header>
                <UserInput handleClick={this.handleClick} filterPokemon={this.filterPokemon}></UserInput>
                <DisplayResults pokeState={this.state.pokeState} isLoading={this.state.isLoading}></DisplayResults>
            </div>
        )
    }
}
