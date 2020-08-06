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
        filter: ''
    }

    handleClick = async () => {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`);

        this.setState({
            pokeState: data.body.results,
            isLoading: false,
        })
    }

    doTheSearch = (e) => {
        this.setState({search: e.target.value});
    }

    filterPokemon = (e) => {
        const filterSelection = e.target.value;

        this.setState({ filter: filterSelection })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Header></Header>
                <UserInput handleClick={this.handleClick} doTheSearch={this.doTheSearch}></UserInput>
                <DisplayResults pokeState={this.state.pokeState} isLoading={this.state.isLoading} filterPokemon={this.filterPokemon} filter={this.state.filter}></DisplayResults>
            </div>
        )
    }
}
