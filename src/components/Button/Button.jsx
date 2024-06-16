import React from 'react'


import styles from './button.module.css'

const Button = ({ onClick, type, children, size = 's' }) => {
	

	return (
		<button className={styles.btn} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
