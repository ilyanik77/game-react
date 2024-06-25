import React from 'react'
import { useSelector } from 'react-redux'
import GameCover from '../../components/GameCover/GameCover'
import GameGenre from '../../components/GameGenre/GameGenre'
import GameBuy from '../../components/GameBuy/GameBuy'

import styles from './gamePage.module.css'

const GamePage = () => {
	const game = useSelector(state => state.games.currentGame)
	if (!game) return null

	return (
		<div className={styles.gamePage}>
			<h1 className={styles.gamePage__title}>{game.title}</h1>
			<div className={styles.gamePage__content}>
				<div className={styles.gamePage__left}>
					<iframe
						width='90%'
						height='400px'
						frameBorder='0'
						src={game.video}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					/>
				</div>
				<div className={styles.gamePage__right}>
					<GameCover image={game.image} />
					<p>{game.description}</p>
					<p className={styles.secondaryText}>
						Популярные метки для этого продукта:
					</p>
					{game.genres.map(genre => (
						<GameGenre genre={genre} key={genre} />
					))}
					<div className={styles.gamePage__buyGame}>
						<GameBuy game={game} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default GamePage
