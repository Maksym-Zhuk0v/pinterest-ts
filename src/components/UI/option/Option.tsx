import React from 'react'
import styles from './option.module.scss'
import { Link } from 'react-router-dom'

interface IOption {
	name: string
	value?: string
	onClick?: () => void,
	style?: object
}

const Option = ({ name, value, style, ...props }: IOption) => {
	return value ?
		<Link {...props} className={styles.opt} to={value ? value : '/'} > {name}</Link > :
		<div   {...props} className={styles.opt} style={style} > {name}</div >
}

export default Option