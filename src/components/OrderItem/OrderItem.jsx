import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/cartSlice'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import GameCover from '../GameCover/GameCover'

import styles from './orderItem.module.css'

const OrderItem = ({game}) => {
	const dispatch = useDispatch()
	const handleDeleteClick = () => {
		dispatch(deleteItemFromCart(game.id))
	}

	return (
		<div className={styles.orderItem}>
			<div className={styles.orderItem__cover}>
				<GameCover image={game.image} />
			</div>
			<div className={styles.orderItem__title}>
				<span> {game.title} </span>
			</div>
			<div className={styles.orderItem__price}>
				<span>{game.price} руб.</span>
				<AiOutlineCloseCircle
					size={25}
					className={styles.cartItem__deleteIcon}
					onClick={handleDeleteClick}
				/>
			</div>
		</div>
	)
}

export default OrderItem
