import React, { Component } from 'react';

export default class UserInput extends Component {
    render() {
        return (
            <aside className="sidebar">
                <label>Search by Name<input type="text" name="nameField" onChange={this.props.handleSearchByName} /></label>
                <button onClick={this.props.handleClick}>Go!</button>
                <br />
                <label>Search by Type<input type="text" onChange={this.props.handleSearchByType} /></label>
                <label>Search by minimum attack value<input name="attackField" type="number" min="1" onChange={this.props.handleAttackFilter}/></label>
                <label>Search by minimum defense value<input name="defenseField" type="number" min="1" onChange={this.props.handleDefenseFilter}/></label>
                <button name="update" onSubmit={this.props.updateButton}>Update</button>
            </aside>
        )
    }
}
