import React from 'react';
import request from 'superagent';
import PokeList from './PokeList.js';

// props are how parent components talk to child components -- we "pass" props from parents to children
class SearchPage extends React.Component {
    state = { 
        search: '',
        searchBy: 'pokemon',
        isLoading: false,
        pokeState: [],
        currentPage: 1,
        totalPages: 1
}

componentDidMount = async () => {
    const params = new URLSearchParams(this.props.location.search);

    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');

    if (searchBy && page && search) {
        await this.setState({
            searchBy: searchBy,
            currentPage: page,
            search: search
        });
    }

    await this.makeRequest()
}

makeRequest = async () => {
    this.setState({ isLoading: true });

    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`);

    await this.setState({
        pokeState: data.body.results,
        totalPages: Math.ceil(data.body.count / 20),
        isLoading: false,
    })

    const params = new URLSearchParams(this.props.location.search);

    params.set('search', this.state.search);
    params.set('searchBy', this.state.searchBy);
    params.set('page', this.state.currentPage);

    this.props.history.push('?' + params.toString())
}

handleSubmit = async (e) => {
    e.preventDefault();

    await this.setState({
        currentPage: 1
    })
    await this.makeRequest()
}

handleNextClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) + 1 });

    await this.makeRequest();
}

handlePrevClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) - 1 });

    await this.makeRequest();
}

// handleClick = async () => {
//     // 4) go hit the api and get the data
//     this.setState({ isLoading: true })
//     const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&${this.state.searchBy}=${this.state.search}`);

//     this.setState({ 
//         pokeState: data.body.results,
//         isLoading: false,
//     })
// }

render() {
    const { 
        isLoading, 
        pokeState,
        currentPage,
        totalPages,
    } = this.state;
    
    return (
        <div className="search">
            <div className="sidebar">
                <form onSubmit={this.handleSubmit}>
                <input onChange={(e) => this.setState({ search: e.target.value})} value={this.state.search}/>
                <select onChange={(e) => { this.setState({ searchBy: e.target.value })} } value={this.state.searchBy}>
                    <option value='pokemon'>name</option>
                    <option value='type'>type</option>
                    <option value='attack'>attack</option>
                    <option value='defense'>defense</option>
                </select>
                <button onClick={this.handleClick}>Do The Search!</button>
                </form>
            </div>
            <div className="results">
                {
                    isLoading 
                        ? <p>LOADING</p> 
                        : <PokeList
                            handleNextClick={this.handleNextClick}
                            handlePrevClick={this.handlePrevClick}
                            currentPage={currentPage}
                            pokeState={pokeState}
                            totalPages={totalPages}
                        />
                }
            </div>
        </div>
    );
    }
}

export default SearchPage;