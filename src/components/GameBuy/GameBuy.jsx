import React from 'react'

//import { useDispatch, useSelector } from 'react-redux'

import styles from './gameBuy.module.css'
import Button from '../Button/Button'

const GameBuy = ({ game }) => {
	// const dispatch = useDispatch()
	// const items = useSelector(state => state.cart.itemsInCart)
	// const isItemInCart = items.some(item => item.id === game.id)

	// const handleClick = e => {
	// 	e.stopPropagation()
	// 	if (isItemInCart) {
	// 		dispatch(deleteItemFromCart(game.id))
	// 	} else {
	// 		dispatch(setItemInCart(game))
	// 	}
	// }

	return (
		<div className={styles.gameBuy}>
			<span className={styles.gameBuy__price}>{game.price} руб.</span>
			{/* <Button
				// type={isItemInCart ? 'secondary' : 'primary'}
				// onClick={handleClick}
			>
				{isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
			</Button> */}
			{/* <Button onClick={() => {}}>
                
            <Button/> */}
			<Button onClick={() => {}}>
                В корзину
            </Button>
		</div>
	)
}

export default GameBuy
