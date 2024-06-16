import React from 'react'

import { useSelector } from 'react-redux'

import Button from '../Button/Button.jsx'
import CartItem from '../CartItem/CartItem.jsx'

import { calcTotalPrice } from '../utils.js'

import styles from './cartMenu.module.css'

const CartMenu = ({ onClick }) => {
	const items = useSelector(state => state.cart.itemsInCart)
	return (
		<div className={styles.cartMenu}>
			<div className={styles.cartMenu__gamesList}>
				{items.length > 0
					? items.map(game => (
							<CartItem
								key={game.image}
								image={game.image}
								price={game.price}
								title={game.title}
								id={game.id}
							/>
					  ))
					: 'Корзина пуста'}
			</div>
			{items.length > 0 ? (
				<div className={styles.cartMenu__arrange}>
					<div className={styles.cartMenu__totalPrice}>
						<span>Итого:</span>
						<span>{calcTotalPrice(items)} руб.</span>
					</div>
					<Button onClick={onClick}>Оформить заказ</Button>
				</div>
			) : null}
		</div>
	)
}

export default CartMenu
