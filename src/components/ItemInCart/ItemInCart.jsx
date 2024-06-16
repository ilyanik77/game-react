import React from 'react';

import styles from './itemInCart.module.css'

const ItemInCart = ({ quantity = 0 }) => {
	return quantity > 0 ? <div className={styles.itemsInCart}>{quantity}</div> : null
}

export default ItemInCart;
