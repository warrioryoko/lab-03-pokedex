import React, { Component } from 'react'
import request from 'superagent';
import style from '../App.module.css';

export default class DetailPage extends Component {
    state = { pokemon: null }

    componentDidMount = async () => {
        const name = this.props.match.params.myPokemonId;

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);

        console.log(data)
        const pokemon = data.body.results[0];

        this.setState({ pokemon: pokemon})
    }

    render() {
        const { pokemon } = this.state;

        return (
            <div className={style.BlueBox}>
                {
                    pokemon 
                        ? <div>
                        <p>{pokemon.pokemon}</p>
                        <p>Defense: {pokemon.defense}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <img src={pokemon.url_image} alt={pokemon.pokemon} />
                    </div>
                        : <h1>loading</h1>
                }
            </div>
        )
    }
}