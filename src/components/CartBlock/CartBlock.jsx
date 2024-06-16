import React from 'react'
import { BiCartAlt } from 'react-icons/bi'

import styles from './cartBlock.module.css'

const CartBlock = () => {
	return (
		<div className={styles.cartBlock}>
			<BiCartAlt size={25} className={styles.cartIcon} />
			<span className={styles.totalPrice}>2355 руб.</span>
		</div>
	)
}

export default CartBlock
