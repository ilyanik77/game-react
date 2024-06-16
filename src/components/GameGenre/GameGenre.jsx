import React from 'react';

import styles from './gameGenre.module.css'

const GameGenre = ({ genre = '' }) => {
	return <span className={styles.gameGenre}>{genre}</span>
}

export default GameGenre;
