import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage.js';
import DetailPage from './DetailPage/DetailPage.js';
import styles from './App.module.css';

export default class App extends Component {
    render() {
        return (
            <>
            <div className={styles.Box}>
                <Router>
                    <header>
                            <p>
                            <Link to="/detail">Detail</Link>
                            </p>
                        
                            <p>
                            <Link to="/">Home</Link>
                            </p>

                    </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:myPokemonId" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
            </>
        )
    }
}

// import React, { Component } from 'react';
// import request from 'superagent';
// import Header from './Header.js';
// import UserInput from './UserInput.js';
// import DisplayResults from './DisplayResults.js';
// import { processParams } from './util.js';
// import './App.css';

// export default class App extends Component {
//     state = {
//         search: '',
//         pokeName: '',
//         pokeType: '',
//         pokeAttack: '',
//         pokeDefense: '',
//         isLoading: false,
//         pokeState: [],
//     }

//     handleClick = async () => {
        
//         const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`);

//         this.setState({
//             pokeState: data.body.results,
//             isLoading: false,
//         })

//         console.log(this.state.search);
//         console.log(data);
//     }

//     handleAttackFilter = (e) => {
//         this.setState({pokeAttack: e.target.value});
//     }

//     handleDefenseFilter = (e) => {
//         this.setState({pokeDefense: e.target.value});
//     }

//     handleSearchByType = (e) => {
//         this.setState({pokeType: e.target.value});
//     }

//     handleSearchByName = (e) => {
//         this.setState({pokeName: e.target.value});
//     }

//     updateButton = () => {
//         this.setState({ 
//             search: processParams(
//                 this.state.pokeName, 
//                 this.state.pokeType, 
//                 this.state.pokeAttack, 
//                 this.state.pokeDefense
//             )
//         });
//         console.log(this.state.search);
//     }

//     render() {
//         return (
//             <div>
//                 <Header></Header>
//                 <UserInput 
//                     handleClick={this.handleClick} 
//                     handleAttackFilter={this.handleAttackFilter} 
//                     handleDefenseFilter={this.handleDefenseFilter} 
//                     handleSearchByType={this.handleSearchByType} 
//                     handleSearchByName={this.handleSearchByName} 
//                     updateButton={this.updateButton}>
//                 </UserInput>
//                 <DisplayResults pokeState={this.state.pokeState} isLoading={this.state.isLoading}></DisplayResults>
//             </div>
//         )
//     }
// }
