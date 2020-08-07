import React from 'react';
import styles from './PokeItem.module.css';
import { Link } from 'react-router-dom';

class PokeItem extends React.Component {
    render() {
        const { 
            pokemon: {
                pokemon,
                url_image,
    } 
} = this.props;

    return <Link to={`/detail/${pokemon}`}>
        <p className={styles.Box}>{pokemon}</p>
        <img src={url_image} alt={pokemon} />
    </Link>
    }
}

export default PokeItem