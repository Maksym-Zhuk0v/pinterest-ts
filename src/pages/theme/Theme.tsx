import React, { useContext, useEffect } from 'react'
import styles from './theme.module.scss'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../../context'

const Theme = () => {
	const { theme } = useParams()
	const context = useContext(Context)
	const data = context.pins

	return (
		<div>
			{
				data.filter(item => item.sort === theme).map(item => {
					return (
						<Link
							key={item.id} to={`/pin/${item.id}`} className={styles.main} >
							<img className={styles.img} src={item.image} />
						</Link>
					)
				})
			}
		</div>
	)
}

export default Theme