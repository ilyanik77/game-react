import React from 'react';

import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/cartSlice'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import styles from './cartItem.module.css'

const CartItem = ({ title, price, id }) => {
	const dispatch = useDispatch()

	const handleDeleteClick = () => {
		dispatch(deleteItemFromCart(id))
	}

	return (
		<div className={styles.cartItem}>
			<span>{title} </span>
			<div className={styles.cartItem__price}>
				<span>{price} руб.</span>
				<AiOutlineCloseCircle
					size={15}
					className={styles.cartItem__deleteIcon}
					onClick={handleDeleteClick}
				/>
			</div>
		</div>
	)
}

export default CartItem;
