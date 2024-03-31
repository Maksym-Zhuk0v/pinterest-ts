import React, { MouseEventHandler } from 'react'
import styles from './isHoveredOpt.module.scss'
import { Link, useMatch } from 'react-router-dom'

type opt = {
	name: string
	path: string
}

interface IIsHoveredOpt {
	opt: opt,
	prev: string,
	onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

const IsHoveredOpt = ({ opt, prev, onClick }: IIsHoveredOpt) => {
	const match = useMatch(`${prev}/${opt.path}`);

	return (
		<Link onClick={onClick} className={match !== null ? [styles.btn, styles.active].join(' ') : [styles.btn].join(' ')} to={opt.path}>{opt.name}</Link>
	)
}

export default IsHoveredOpt