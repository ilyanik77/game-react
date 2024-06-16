import React from 'react'

//import { useDispatch } from 'react-redux'
//import { useNavigate } from 'react-router-dom'

import styles from './gameItem.module.css'
import GameCover from '../GameCover/GameCover'
import GameGenre from '../GameGenre/GameGenre'
import GameBuy from '../GameBuy/GameBuy'

const GameItem = ({ game }) => {
	// const navigate = useNavigate()
	// const dispatch = useDispatch()
	// const handleClick = () => {
	// 	// dispatch(setCurrentGame(game))
	// 	// navigate(`/app/${game.title}`)
	// }

	return (
		<div className={styles.gameItem}>
			{/* onClick={handleClick} */}
			<GameCover image={game.image} />
			
			<div className={styles.gameItem__details}>
				<span className={styles.gameItem__title}>{game.title}</span>
				<div className={styles.gameItem__genre}>
					{game.genres.map(genre => (
						<GameGenre genre={genre} key={genre} />
                    
					))}
					
				</div>
				<div className={styles.gameItem__buy}>
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	)
}

export default GameItem
