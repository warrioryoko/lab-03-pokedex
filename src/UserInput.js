import React, { Component } from 'react';

export default class UserInput extends Component {
    render() {
        return (
            <aside className="sidebar">
                <label>Search<input type="text" name="nameField" /></label>
                <button onClick={this.props.handleClick}>Go!</button>
                <br />
                <select>
                    <option value="" defaultValue></option>
                    <option name="typeField" value="Type">Type</option>
                </select>
                <input name="attackField" type="number" min="1"></input>
                <input name="defenseField" type="number" min="1"></input>
                <button name="update" onSubmit={this.props.filterPokemon}>Update</button>
            </aside>
        )
    }
}
