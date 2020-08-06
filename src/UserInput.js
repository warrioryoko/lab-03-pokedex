import React, { Component } from 'react';

export default class UserInput extends Component {
    render() {
        return (
            <aside className="sidebar">
                <label>Search<input type="text" onChange={this.props.doTheSearch} /></label>
                <button onClick={this.props.handleClick}>Go!</button>
                <br />
                <select onChange={this.props.filterPokemon}>
                    <option value="Name" defaultValue>Name</option>
                    <option value="Type">Type</option>
                    <option value="Attack">Attack</option>
                    <option value="Defense">Defense</option>
                    {
                        
                    }
                </select>
            </aside>
        )
    }
}
