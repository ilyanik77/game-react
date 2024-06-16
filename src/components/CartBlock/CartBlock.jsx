import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { BiCartAlt } from 'react-icons/bi'

import styles from './cartBlock.module.css'
import CartMenu from '../CartMenu/CartMenu'
import { useNavigate } from 'react-router-dom'
import ItemInCart from '../ItemInCart/ItemInCart'

const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector(state => state.cart.itemsInCart)
	const navigate = useNavigate()
	const totalPrice = items.reduce((acc, game) => (acc += game.price), 0)
    const handleGoToOrderClick = useCallback(() => {
			setIsCartMenuVisible(false)
			navigate('/order')
		}, [navigate])

	return (
		<div className={styles.cartBlock}>
			<ItemInCart quantity={items.length} />
			<BiCartAlt
				size={25}
				className={styles.cartIcon}
				onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
			/>
			{totalPrice > 0 ? (
				<span className='totalPrice'>{totalPrice} руб.</span>
			) : null}
			{isCartMenuVisible && <CartMenu onClick={handleGoToOrderClick} />}
		</div>
	)
}

export default CartBlock
