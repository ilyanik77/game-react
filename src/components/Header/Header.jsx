import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.css'
import CartBlock from '../CartBlock/CartBlock'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.wrapper}>
				<Link to='/' className={styles.header__storeTitle}>
					Game Store
				</Link>
			</div>
			<div className={styles.wrapper + styles.header__cartBtnWrapper}>
				<Link>
					<CartBlock />
				</Link>
			</div>
		</div>
	)
}

export default Header
