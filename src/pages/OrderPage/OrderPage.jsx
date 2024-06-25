import React from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice, enumerate } from '../../components/utils'

import styles from './orderPage.module.css'
import OrderItem from '../../components/OrderItem/OrderItem'

const OrderPage = () => {
	const items = useSelector(state => state.cart.itemsInCart)

	if (items.length < 1) {
		return <h1>Ваша корзина пуста!</h1>
	}

	return (
		<div className={styles.orderPage}>
			<div className={styles.orderPage__content}>
				{items.map(game => (
					<OrderItem game={game} key={game.title} />
				))}
			</div>

			<div className={styles.orderPage__totalPrice}>
				<span>
					{items.length}{' '}
					{enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму{' '}
					{calcTotalPrice(items)} руб.
				</span>
			</div>
		</div>
	)
}

export default OrderPage
