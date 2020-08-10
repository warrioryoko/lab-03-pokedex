import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        const {
            pokeState,
            handleNextClick,
            handlePrevClick,
            currentPage,
            totalPages
        } = this.props;

        return (
            <div>
                {
                    //If we HAVE pokemon, and the page (the div tag) has loaded...
                    pokeState.length > 0 && <div>
                        {
                            //If the current page number isn't the first page...
                            Number(currentPage) !== 1 && <button onClick={handlePrevClick}>Prev</button>
                        }

                        {
                            Number(currentPage) !== Number(totalPages) && <button onClick={handleNextClick}>Next</button>
                        }
                        {currentPage} of {totalPages}
                    </div>
                }
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>
                        {pokeState.map(pokemon => <PokeItem pokemon={pokemon} />)}
                    </div>
            </div>
        )
    }
}