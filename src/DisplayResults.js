import React, { Component } from 'react'

export default class DisplayResults extends Component {
    render() {
        
        return (
            <section className="results-area">
                {
                    this.props.isLoading
                        ? <p>Loading!</p>
                        : this.props.pokeState.map(pokeBooger => <li>
                            {pokeBooger.pokemon} <br />
                            type : {pokeBooger.type_1} <br />
                            attack : {pokeBooger.attack} <br />
                            defense: {pokeBooger.defense}
                            <img src={pokeBooger.url_image} alt="Pokemon"></img></li>)
                }
            </section>
        )
    }
}
